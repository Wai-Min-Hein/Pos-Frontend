import { useState } from "react";

import { Input } from "@mantine/core";
import { BiSearch } from "react-icons/bi";

import { IoIosPeople } from "react-icons/io";







import { MdInventory     } from "react-icons/md";




import { AiOutlineProduct } from "react-icons/ai";



const InventoryComponent = () => {
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
        <IoIosPeople size={32} />

        <h4>Master Lists</h4>
      </div>

      <div className="flex flex-wrap justify-start items-center px-10 mt-6 gap-y-8">
        

        <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
          <AiOutlineProduct size={20} />

          <h4>Product Categories</h4>
        </div>

        <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
          <AiOutlineProduct size={20} />

          <h4>Product List</h4>
        </div>

        
      </div>
    </div>

    <div className="good-material-row  mt-6">
      <div className="flex items-center justify-start gap-2">
        <MdInventory  size={32} />

        <h4>Inventory</h4>
      </div>

      <div className="flex flex-wrap justify-start items-center px-10 mt-6 gap-y-8">
        <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
          <AiOutlineProduct  size={20} />

          <h4>Stock In</h4>
        </div>

        <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
          <AiOutlineProduct  size={20} />

          <h4>Stock Out</h4>
        </div>

        <div className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer">
          <AiOutlineProduct  size={20} />

          <h4>Stock Card Report</h4>
        </div>

       
      </div>
    </div>
  </div>
  )
}

export default InventoryComponent