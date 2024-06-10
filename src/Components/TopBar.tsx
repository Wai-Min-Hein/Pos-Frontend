import { Input } from "@mantine/core";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import fav from "/images/logo.png";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const TopBar = () => {
  const [value, setValue] = useState("");
  const nav = useNavigate();

  return (
    <div className="headerBar w-full h-16 flex items-center justify-start  sticky top-0  z-50 bg-white">
      <div onClick={() => nav('/')} className="flex justify-start items-center gap-2 basis-1/5  cursor-pointer">
        <div className="">
          <img src={fav} className="w-24 h-12 object-contain" alt="" />
        </div>
        <h4 className="capitalize text-2xl font-[500]">ALI Pos</h4>
      </div>
      <Input
        placeholder="Search "
        className="basis-1/4 !mt-0 mr-auto rounded-lg"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <div className="flex gap-1 pr-2">
            {value && (
                <RxCross2 onClick={() => setValue("")} 
                className=" cursor-pointer text-red-600"/>
              )}
          <BiSearch aria-label="Sesrch" onClick={() => setValue("")} />
          </div>
        }
      />

      <div className="">
        <h6>Branch : Aliean Coffee shop</h6>
      </div>
    </div>
  );
};

export default TopBar;
