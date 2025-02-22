"use client";

import { useAppDispatch } from "@/hooks/dispatch";
import { fetchUserInfo } from "@/store/modules/userInfoStore";
import { useEffect } from "react";

export default function Header() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);
  return <div>test</div>;
}
