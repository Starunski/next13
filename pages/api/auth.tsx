import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  data?: any;
  success?: boolean;
  token?: string;
};

const userDataBase = [
  { login: "admin", password: "admin" },
  { login: "user", password: "user" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const { login, password } = req.body;
    console.log({ login, password });

    if (
      userDataBase.find((el) => el.login === login && el.password === password)
    ) {
      res
        .status(200)
        .json({ success: true, message: `Hello ${login}!`, data: req.body , token: "Starunski secret token"});
    } else {
      res
        .status(200)
        .json({ success: false, message: `Error , wrong login or password!`, data: req.body });
    }
  }
}

// import { NextRequest } from "next/server";

// export const config = {
//   runtime: "edge",
// };

// export default async function handler(req: NextRequest) {
//   const { searchParams } = new URL(req.url);

//   const delay = searchParams.get("delay");

//   if (delay) {
//     await new Promise((resolve) => setTimeout(resolve, Number(delay)));
//   }

//   return new Response(JSON.stringify(reviews), {
//     status: 200,
//     headers: {
//       "content-type": "application/json",
//     },
//   });
// }

// const reviews = [
//   {
//     id: "1",
//     name: "Nullam Duis",
//     rating: 4,
//     text: "Phasellus efficitur, nisi ut varius ultricies, tortor arcu ullamcorper nisi, eu auctor enim est ut enim. Sed fringilla, nulla ut tincidunt hendrerit, risus tortor laoreet tortor, non mattis arcu elit vel ante.",
//   },
//   {
//     id: "2",
//     name: "Donec Nulla Velit",
//     rating: 1,
//     text: "Nullam fermentum nisl non mattis fringilla!!!!",
//   },
//   {
//     id: "3",
//     name: "J Tempus",
//     rating: 3,
//     text: "Pellentesque faucibus quam eu vehicula pulvinar. Integer cursus fringilla metus.",
//   },
// ];
