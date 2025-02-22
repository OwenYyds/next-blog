"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/dispatch";
import { fetchUserInfo } from "@/store/modules/userInfoStore";
import { useEffect } from "react";

export default function Header() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.userInfo);
  console.log(userInfo);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);
  return <div>{"123"}</div>;
}
