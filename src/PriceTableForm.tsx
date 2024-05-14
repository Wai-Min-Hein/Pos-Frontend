import { IoMdAddCircleOutline } from "react-icons/io"
import excel from "/images/iconsImage/excel.png";
import details from "/images/iconsImage/details.svg";
import { HiOutlinePrinter } from "react-icons/hi2";
import { Button } from "@mantine/core";
import { LuMoveLeft, LuSave } from "react-icons/lu";
import PriceTableFormComponent from "./Components/PriceTableFormComponent";
import { useNavigate } from "react-router-dom";



const PriceTableForm = () => {
  const nav = useNavigate()
  return (
    <div className="w-full h-screen bg-gray">
       <div className="flex justify-between items-center p-3">
          <div className="flex items-center justify-start gap-2">
            <div className="w-8 h-8">
              <img src={details} className="w-full h-full object-cover" alt="" />
            </div>
            <p>Details information</p>
          </div>

          <div className="flex justify-start items-center gap-4">
            <div className="">
              <img src={excel} alt="" />
            </div>
            <HiOutlinePrinter size={24} />
            <Button
              className="!bg-btn !text-white"
              leftSection={<IoMdAddCircleOutline size={18} />}
            >
              Add New Area
            </Button>
            <Button
              className="!bg-btn !text-white"
              leftSection={<LuMoveLeft  size={18} />}
              onClick={() => nav('/system/pricetable')}
            >
              Skip
            </Button>

            <Button
              className="!bg-btn !text-white"
              leftSection={<LuSave  size={18} />}
            >
              Save
            </Button>

           
          </div>
        </div>

        <PriceTableFormComponent/>
    </div>
  )
}

export default PriceTableForm