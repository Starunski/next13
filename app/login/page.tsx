"use client";
import { updateUser } from "../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { useRouter } from "next/navigation";
import { onLogin } from "../services/userService";

export default function Login() {
  const user = useSelector((state: RootState) => state.user.user);
  const router = useRouter();

  console.log("user", user);
  const dispatch = useDispatch();

  const onSubmit = async (e: any) => {
    console.log("event", e);
    const prepData = {
      login: e.target.form[0].value,
      password: e.target.form[1].value,
    };
    e.preventDefault();
    const data = await onLogin(prepData);

    console.log("====================================");
    console.log("data++++", data);
    if (data.success) {
      console.log("success");

      dispatch(updateUser({ login: data.data.login, isLoggedIn: true }));
      alert(`Success ! User ${data.data.login} is logged in!!!`);
      router.push("/");
    } else {
      alert(`Wrong login or password ! `);
    }
  };

  const onLogout = () => {
    dispatch(updateUser({ login: "", isLoggedIn: false }));
  };

  return (
    <div style={{ height: "100vh" }}>
      <div>User is  {user.isLoggedIn ? `____ ${user.login} ____` : "NOT LOGGED"}</div>
      <div>
        <form
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button
            type="button"
            onClick={!user.isLoggedIn ? (e) => onSubmit(e) : onLogout}
          >
            {!user.isLoggedIn ? "login" : "logout"}
          </button>
        </form>
      </div>
    </div>
  );
}
