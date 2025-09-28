import Hero from "@/components/home/Hero";
import LatestPost from "@/components/home/LatestPost";
import { Home } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <LatestPost/>
    </div>
  );
};

export default page;
