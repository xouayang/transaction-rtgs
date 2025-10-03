"use client"
import { Button } from "@heroui/react";
import Image from "next/image";
import TabsComponents from "./components/Tab/page"
import Transactions from "./components/Transactions/page";
export default function Home() {
  return (
     <>
     {/* <TabsComponents/> */}
     <Transactions/>
     </>
  );
}
