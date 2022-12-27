import React from "react";
import Dashbard from "../Layouts/Homepage/Dashbard";
import LeftNav from "../Layouts/Homepage/LeftNav";
import TopNav from "../Layouts/Homepage/TopNav";

export default function Home() {
  return (
    <div>
      <TopNav />
      <LeftNav />
      <Dashbard />
    </div>
  );
}
