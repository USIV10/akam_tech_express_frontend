interface SessionData {
  token: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  loginTime: number;
  expiresAt: number;
}

class SessionManager {
  private static readonly SESSION_KEY = 'userSession';
  private static readonly SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

  // Save session to localStorage with expiration
  static saveSession(token: string, user: any): void {
    const sessionData: SessionData = {
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      },
      loginTime: Date.now(),
      expiresAt: Date.now() + this.SESSION_DURATION
    };

    localStorage.setItem(this.SESSION_KEY, JSON.stringify(sessionData));
  }

  // Get current session
  static getSession(): SessionData | null {
    try {
      const sessionStr = localStorage.getItem(this.SESSION_KEY);
      if (!sessionStr) return null;

      const session: SessionData = JSON.parse(sessionStr);
      
      // Check if session is expired
      if (Date.now() > session.expiresAt) {
        this.clearSession();
        return null;
      }

      return session;
    } catch (error) {
      console.error('Error getting session:', error);
      return null;
    }
  }

  // Update session token (useful for token refresh)
  static updateToken(token: string): void {
    const session = this.getSession();
    if (session) {
      session.token = token;
      session.expiresAt = Date.now() + this.SESSION_DURATION;
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
    }
  }

  // Check if user is logged in
  static isLoggedIn(): boolean {
    return this.getSession() !== null;
  }

  // Get auth token
  static getToken(): string | null {
    const session = this.getSession();
    return session ? session.token : null;
  }

  // Get user data
  static getUser(): any | null {
    const session = this.getSession();
    return session ? session.user : null;
  }

  // Clear session
  static clearSession(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  // Get session time remaining
  static getTimeRemaining(): number {
    const session = this.getSession();
    if (!session) return 0;
    return Math.max(0, session.expiresAt - Date.now());
  }

  // Format time remaining for display
  static getTimeRemainingDisplay(): string {
    const timeRemaining = this.getTimeRemaining();
    if (timeRemaining === 0) return 'Session expired';

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m`;
    } else if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${minutes}m`;
    }
  }

  // Check if session is about to expire (within 1 hour)
  static isSessionExpiringSoon(): boolean {
    const timeRemaining = this.getTimeRemaining();
    return timeRemaining > 0 && timeRemaining < (60 * 60 * 1000); // 1 hour
  }
}

export default SessionManager;
