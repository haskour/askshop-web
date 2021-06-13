// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function Menus(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Mobile",
      to: "/",
      subMenu: [
        {
          id: 2,
          name: "Mobile category 1",
          to: "/",
        },
        {
          id: 3,
          name: "Mobile category 2",
          to: "/",
        },
        {
          id: 4,
          name: "Mobile category 3",
          to: "/",
        },
      ],
    },
    {
      id: 2,
      name: "TV & AV",
      to: "/mobile",
      subMenu: [
        {
          id: 2,
          name: "TV & AV category 1",
          to: "/",
        },
        {
          id: 3,
          name: "TV & AV category 2",
          to: "/",
        },
        {
          id: 4,
          name: "TV & AV category 3",
          to: "/",
        },
      ],
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
      subMenu: [
        {
          id: 2,
          name: "Displays category 1",
          to: "/",
        },
        {
          id: 3,
          name: "Displays category 2",
          to: "/",
        },
        {
          id: 4,
          name: "Displays category 3",
          to: "/",
        },
      ],
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
