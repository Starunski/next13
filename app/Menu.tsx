"use client";
import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {/* <button onClick={() => setCounter((prev) => prev + 1)}>
        Counter: {counter}
      </button> */}
      <Link href="/">HOME</Link>
      <Link href="/posts">POSTS</Link>
      <Link href="/login">Login / register</Link>
    </div>
  );
};
export default Menu;
