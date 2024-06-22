import { Button } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAppSelector } from "../hooks/hooks";

const PosTableComponent = () => {
  interface areaInterfaces {
    _id: string;
    code: string;
    name: string;
    __v: number;
  }


  const nav = useNavigate()

  const [areas, setAreas] = useState<areaInterfaces[]>([]);

  const[activeTable, setActiveTable] = useState<string>("")

  const tableId = useAppSelector((state) => state.order.orderId);


  const getAllAreas = async () => {
    try {
      const { data } = await axios.get("https://pos-t6g7.onrender.com/csa");

      setAreas(data.datas);
    } catch (error) {
      toast.error("Cannot get all areas");
    }
  };

  useEffect(() => {
    getAllAreas();
   
  }, []);

  useEffect(() => { areas&&setActiveTable(areas[0]?.name)}, [areas])
  return (
    <div className="bg-transparentBgGreen h-[80vh] mt-4 p-4">
      <ToastContainer />
      <div className="">
        <h1 className="text-xl text-headerText">Choose Areas</h1>
      </div>

      <div className="flex items-center justify-stretch gap-6 mt-6 cursor-pointer">
        {
            areas?.map(area => (
                <Button onClick={() => setActiveTable(area.name)}  className={` rounded-md px-6 py-8 ${activeTable == area.name ? "!bg-red-500": "!bg-btn"}`} key={area._id}>
                    <p className="text-white">{area.name}</p>
                </Button>
            ))
        }
      </div>

      <div className="mt-6">
        <Button onClick={() => nav(`/pos/${activeTable}/${tableId +1}`)} className={`!rounded-md !w-32 !h-20 !bg-blue-600 !text-white`}>Add New</Button>
      </div>
    </div>
  );
};

export default PosTableComponent;
