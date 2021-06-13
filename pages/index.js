import Head from "next/head";
import HeaderHome from "../components/Header-home/Header-home";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/menus");
      const menus = result.data;
      setMenus(menus);
      //   setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <main>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderHome items={menus} />
    </main>
  );
}
