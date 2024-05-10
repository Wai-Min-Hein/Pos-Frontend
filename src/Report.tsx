import { useState } from "react";

import { Input } from "@mantine/core";
import { BiSearch } from "react-icons/bi";
import SideNav from "./Components/SideNav";

const Report = () => {
  const [value, setValue] = useState("");

  return (
    <div className=" w-screen h-screen flex justify-start items-start ">
      <SideNav />

      <div
        className="px-12 w-full">
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
        <h6 className="">
          In this route, there is not tab. You will only see report list
          according your sales
        </h6>
      </div>
    </div>
  );
};

export default Report;
