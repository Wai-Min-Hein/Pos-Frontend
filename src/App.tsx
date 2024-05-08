import { Input } from "@mantine/core";
import fav from "/images/favicon.png";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <div className="container mx-auto w-screen h-screen">
      <div className="headerBar w-full h-16 flex items-center justify-start gap-4">
        <div className="flex justify-start items-center gap-2">
          <div className="">
            <img src={fav} className="w-12 h-12 object-cover" alt="" />
          </div>
          <h4>Ali Pos</h4>
        </div>

          <Input
            placeholder="Search "
            className="basis-1/4 !mt-0 mr-auto"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            rightSectionPointerEvents="all"
            mt="md"
            rightSection={
              <BiSearch
                aria-label="Sesrch"
                onClick={() => setValue('')}
              />
            }
          />


<div className="">
  <h6>

  Branch : Aliean Coffee shop
  </h6>
</div>

      </div>
    </div>
  );
};

export default App;
