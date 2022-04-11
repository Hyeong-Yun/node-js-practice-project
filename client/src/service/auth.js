export default class AuthService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }
  async singup(username, password, name, email) {
    const data = await this.http.fetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        name,
        email,
      }),
    });

    this.tokenStorage.saveToken(data.token);
    return data;
  }

  async login(username, password) {
    const data = await this.http.fetch("auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    return {
      useranme: "yun",
      token: "abcd1234",
    };
  }
  async me() {
    return {
      username: "yun",
      token: "abcd1234",
    };
  }
  async logout() {
    return;
  }
}
