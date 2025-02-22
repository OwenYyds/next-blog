import { TOKEN } from "@/constants/user";

const getToken = () => {
  return localStorage.getItem(TOKEN);
};

const setToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
};

const removeToken = () => {
  localStorage.removeItem(TOKEN);
};

export { getToken, setToken, removeToken };
