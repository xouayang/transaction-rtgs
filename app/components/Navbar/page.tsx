"use client";
import { NavbarBrand, Navbar, Image } from "@heroui/react";
import React from "react";
const Navbars = () => {
  return (
    <>
      <Navbar className="bg-[#009688]">
        <NavbarBrand className="flex justify-center gap-3 text-white">
          <Image
            src="/logobank.jpg"
            alt="logobank"
            width={50}
            height={50}
            className="object-contain rounded-full"
          />
          <div className="text-lg">ທຸລະກຳໂອນເງິນຜ່ານ Mebank</div>
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default Navbars;
