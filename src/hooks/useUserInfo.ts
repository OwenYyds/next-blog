import { getToken } from "@/services";
import { useEffect, useState } from "react";

export const useUserInfo = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const token = getToken();
    setIsUserLoggedIn(!!token);
    console.log("success useUserInfo");
  }, []);

  return { isUserLoggedIn };
};
