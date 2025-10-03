"use client"
import { Tab, Tabs } from "@heroui/react";
import React from "react";
import Transactions from "./Transactions";
import SearchTransaction from "./SearchTransaction";

const HomeTab = () => {
  return (
    <>
      <Tabs fullWidth className="[&_[data-slot=tab]]:text-[#009688] mt-4" radius="full">
        <Tab key="transaction" title="Transaction RTGS">
          <Transactions />
        </Tab>
        ;
        <Tab key="search" title="Search Transaction RTGS">
          <SearchTransaction />
        </Tab>
        ;
      </Tabs>
    </>
  );
};

export default HomeTab;
