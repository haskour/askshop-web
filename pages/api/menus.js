// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function Menus(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Mobile",
      to: "/mobile",
    },
    {
      id: 2,
      name: "TV & AV",
      to: "/mobile",
    },
    {
      id: 3,
      name: "Home Appliances",
      to: "/mobile",
    },
    {
      id: 4,
      name: "Computing",
      to: "/mobile",
    },
    {
      id: 5,
      name: "Displays",
      to: "/mobile",
    },
    {
      id: 6,
      name: "Smart Home",
      to: "/mobile",
    },
    {
      id: 7,
      name: "Offers",
      to: "/mobile",
    },
  ]);
}
