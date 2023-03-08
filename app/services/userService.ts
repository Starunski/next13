const baseUrl = "http://localhost:3001/api/auth";

export const onLogin = async ({ login, password }: any) => {
  console.log("login", login, password);

  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      password,
    }),
  });
  const dataa = await res.json();

  if (dataa.token) {
    // dispatch(updateUser(data));
    localStorage.setItem("token", dataa.token);
    localStorage.setItem("user", JSON.stringify(login));
  }
  return dataa;
};
