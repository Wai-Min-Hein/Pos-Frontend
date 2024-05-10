import { Button } from "@mantine/core";
import fav from "/images/favicon.png";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="basis-[20%] h-screen py-3 px-6 bg-green-500 rounded-r-2xl text-white flex flex-col">
      <div className="flex justify-start items-center gap-2">
        <div className="">
          <img src={fav} className="w-12 h-12 object-cover" alt="" />
        </div>
        <h4>Ali Pos</h4>
      </div>

      <nav className="mt-12 flex-1">
        <ul className="flex flex-col gap-4">
        
          

          <Link to={"/"}>
            <li className="bg-[rgba(255,255,255,0.50)]  rounded-lg px-1 py-2 cursor-pointer">
            Home
            </li>
          </Link>
          <Link to={"/pos"}>
            <li className="bg-[rgba(255,255,255,0.50)]  rounded-lg px-1 py-2 cursor-pointer">
              Pos
            </li>
          </Link>


          <Link to={"/crm"}>
            <li className="bg-[rgba(255,255,255,0.50)]  rounded-lg px-1 py-2 cursor-pointer">
              CRM
            </li>
          </Link>

          <Link to={"/inventory"}>
            <li className="bg-[rgba(255,255,255,0.50)]  rounded-lg px-1 py-2 cursor-pointer">
              Inventory
            </li>
          </Link>

         
          {/* <Link to={"/hrm"}>
            <li className="bg-[rgba(255,255,255,0.50)]  rounded-lg px-1 py-2 cursor-pointer">
              HRM
            </li>
          </Link> */}
          <Link to={"/finance"}>
            <li className="bg-[rgba(255,255,255,0.50)]  rounded-lg px-1 py-2 cursor-pointer">
              Finance
            </li>
          </Link>
          <Link to={"/report"}>
            <li className="bg-[rgba(255,255,255,0.50)]  rounded-lg px-1 py-2 cursor-pointer">
              Analysis Report
            </li>
          </Link>
        </ul>
      </nav>

      <Button className="">Logout</Button>
    </div>
  );
};

export default SideNav;
