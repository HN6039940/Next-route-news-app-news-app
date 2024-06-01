"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ParallelImage = () => {
  const router = useRouter();
  return <div onClick={router.back}>ParallelImage</div>;
};

export default ParallelImage;
