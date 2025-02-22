"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const userInfo = useSelector(
    (state: {
      userInfo: {
        name: string;
        email: string;
        phone: string;
        address: string;
        role: string;
      };
    }) => state.userInfo
  );

  const dispatch = useDispatch();

  function setUserInfo() {
    dispatch({
      type: "userInfo/setUserInfo",
      payload: {
        name: "1112222",
        email: "3333",
        phone: "444",
        address: "125553",
        role: "admin",
      },
    });
  }

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div>
      <h1>Header</h1>
      <button onClick={setUserInfo}>Change User Info</button>
    </div>
  );
}
