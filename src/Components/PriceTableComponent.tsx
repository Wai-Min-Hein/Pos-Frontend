import { Button } from "@mantine/core";
import ListRenderComponent from "./ListRenderComponent";
import { IoMdAddCircleOutline } from "react-icons/io";

import excel from "../../public/images/iconsImage/excel.png";
import TopBar from "./TopBar";
import { HiOutlinePrinter } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const PriceTableComponent = () => {

  interface menuInterface {
    name: string;
    price: number | string;
    vat: number | string;
    disPercent: number | string;
    disAmount: number | string;
    adjust: boolean;
  }

  interface priceTableInterface {
  _id: string;

    code: string;
    name: string;
    branch: string;
    area: string;
    startDate: Date | null;
    endDate: Date | null;
    menus: menuInterface[];
  }



  
  const tableTitle: string[] = [
    "code",
    "name",
    "branch",
    "area",
    'dateFrom',
    'dateTo'
    
    
  ];

 

  const [priceTableDatas, setPriceTableDatas] = useState<priceTableInterface[]>()



  const getDatas = async () => {
    try {

      const {data} = await axios.get('http://localhost:3000/pricetable')

      setPriceTableDatas(data.datas);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {getDatas()}, [])

  const nav = useNavigate()

  

  const handleDetail  = (id: string) => {
    nav(`/system/pricetable/${id}`)
  }


  return (
    <div className="w-full h-full !overflow-hidden ">
      <TopBar />

      

      <div className="">
        <div className="flex justify-between items-center">
          <div className="">
            <h1>Price Table</h1>
            <p>Manage Price Table</p>
          </div>

          <div className="flex justify-start items-center gap-4">
            <div className="">
              <img src={excel} alt="" />
            </div>
            <HiOutlinePrinter size={24} />
            <Button
              className="!bg-btn !text-white"
              onClick={() => nav('/system/pricetable/new')}

              leftSection={<IoMdAddCircleOutline size={18} />}
            >
              Add New Area
            </Button>

           
          </div>
        </div>

        <ListRenderComponent
          priceTableDatas={priceTableDatas}
          tableTitle={tableTitle}
          handleDetail={handleDetail}
        />
      </div>
    </div>
  );
};

export default PriceTableComponent;
