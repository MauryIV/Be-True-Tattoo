import decode from "jwt-decode";

class AuthService {
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("admin_token");
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem("admin_token");
  }

  login(adminToken) {
    localStorage.setItem("admin_token", adminToken);
    window.location.assign("/admin");
  }

  logout() {
    localStorage.removeItem("admin_token");
    window.location.assign("/");
  }
}

export default new AuthService();
