import { AuthProvider, HttpError } from "react-admin";
export const authProvider: AuthProvider = {
  login: async ({ name, password }) => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      if (!response.ok) {
        throw new HttpError("Unauthorized", 401, {
          message: "Invalid name or password",
        });
      }

      const user = await response.json();

      localStorage.setItem("user", JSON.stringify(user));

      return Promise.resolve();
    } catch (error) {
      if (error instanceof HttpError) {
        return Promise.reject(error);
      }

      return Promise.reject(
        new HttpError("Network error", 500, {
          message: "Unable to reach the server",
        })
      );
    }
  },
  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("user");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
