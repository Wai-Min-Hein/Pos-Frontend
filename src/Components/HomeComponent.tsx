import { useState } from "react";

import { Input } from "@mantine/core";
import { BiSearch } from "react-icons/bi";


import { HiOutlineBuildingStorefront } from "react-icons/hi2";


import { MdProductionQuantityLimits ,MdPriceCheck,MdBalance,MdOutlineManageAccounts   } from "react-icons/md";

import { IoFastFoodOutline } from "react-icons/io5";

import { AiOutlineProduct } from "react-icons/ai";

import { PiMapPinSimpleArea } from "react-icons/pi";

import { FiUserCheck } from "react-icons/fi";

import { FaRegUserCircle } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci";





const HomeComponent = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-full px-12">
      <div className="headerBar w-full h-16 flex items-center justify-start gap-8 ">
        <Input
          placeholder="Search "
          className="basis-2/5 !mt-0 mr-auto rounded-lg"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          rightSectionPointerEvents="all"
          mt="md"
          rightSection={
            <BiSearch aria-label="Sesrch" onClick={() => setValue("")} />
          }
        />

        <div className="">
          <h6>Branch : Aliean Coffee shop</h6>
        </div>
      </div>

      <div className="branch-row">
      <div className="flex items-center justify-start gap-2">
          <HiOutlineBuildingStorefront size={32} />

          <h4>Branch Informations</h4>
        </div>

        <div className="flex flex-wrap justify-start items-center px-10 mt-6 gap-y-8">
          <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
            <PiMapPinSimpleArea size={20} />

            <h4>Customer Service area</h4>
          </div>

          <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
            <HiOutlineBuildingStorefront size={20} />

            <h4>Branch List</h4>
          </div>

          
        </div>
      </div>

      <div className="good-material-row  mt-6">
        <div className="flex items-center justify-start gap-2">
          <MdProductionQuantityLimits size={32} />

          <h4>Goods, material & Price</h4>
        </div>

        <div className="flex flex-wrap justify-start items-center px-10 mt-6 gap-y-8">
          <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
            <IoFastFoodOutline size={20} />

            <h4>Menu Categories</h4>
          </div>

          <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
            <IoFastFoodOutline size={20} />

            <h4>F&B Menu List</h4>
          </div>

          <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
            <MdPriceCheck size={20} />

            <h4>Price table</h4>
          </div>


          <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
            <AiOutlineProduct size={20} />

            <h4>Product Categories</h4>
          </div>

          <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
            <AiOutlineProduct size={20} />

            <h4>Product List</h4>
          </div>

          <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
            <MdBalance  size={20} />

            <h4>Build up material</h4>
          </div>
        </div>
      </div>





      <div className="good-material-row  mt-6">
        <div className="flex items-center justify-start gap-2">
          <FiUserCheck size={32} />

          <h4>Employee - User</h4>
        </div>

        <div className="flex flex-wrap justify-start items-center px-10 mt-6 gap-y-8">
          <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
            <MdOutlineManageAccounts  size={20} />

            <h4>User account</h4>
          </div>

          <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
            <MdOutlineManageAccounts  size={20} />

            <h4>User rights</h4>
          </div>

          <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
            <FaRegUserCircle  size={20} />

            <h4>Employee</h4>
          </div>

          <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
            <CiMobile4  size={20} />

            <h4>Mobile account</h4>
          </div>

          


        </div>
      </div>












    </div>
  );
};

export default HomeComponent;
