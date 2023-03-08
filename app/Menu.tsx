"use client";
import Link from "next/link";
import React, { useState } from "react";
import type { RootState } from "./store/store";
import { useSelector, useDispatch } from "react-redux";

const Menu = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {/* <button onClick={() => setCounter((prev) => prev + 1)}>
        Counter: {counter}
      </button> */}

      <Link href="/">HOME</Link>
      <Link href="/posts">POSTS</Link>
      <Link href="/login">Login / register</Link>
      {user.isLoggedIn && <Link href="/profile">Profile</Link>}
    </div>
  );
};
export default Menu;
