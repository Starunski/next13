"use client";

export default function Login() {
  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log("submit", e.target[0].value, e.target[1].value);
    const res = await fetch("http://localhost:3001/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value,
      }),
    });
    const data = await res.json();

    console.log("====================================");
    console.log("data++++", data);
  };

  return (
    <div style={{ height: "100vh" }}>
      <div>Login / Register </div>
      <div>
        <form
          onSubmit={(e) => onSubmit(e)}
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
          <button type="submit">Login / register</button>
        </form>
      </div>
    </div>
  );
}
