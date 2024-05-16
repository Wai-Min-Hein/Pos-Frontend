import { Button } from "@mantine/core";
import ListRenderComponent from "./ListRenderComponent";
import { IoMdAddCircleOutline } from "react-icons/io";

import excel from "../../public/images/iconsImage/excel.png";
import TopBar from "./TopBar";
import { HiOutlinePrinter } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";


const PriceTableComponent = () => {

  interface priceTableInterface {
    id: string,
    code: string,
    name: string,
    dateFrom: string,
    dateTo: string,
    

  }

  
  const tableTitle: string[] = [
    "code",
    "name",
    'dateFrom',
    'dateTo'
    
    
  ];

  const priceTableDatas: priceTableInterface[] = [
    {
        id:'1',
        code:'111',
        name: 'Food',
        dateFrom:'saturday',
        dateTo:'saturday'

        
    },
    {
        id:'2',
        code:'111',
        name: 'Food',
        dateFrom:'saturday',
        dateTo:'saturday'


       
    }
  ]

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