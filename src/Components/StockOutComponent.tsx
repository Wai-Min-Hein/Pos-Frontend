import { Button, Modal } from "@mantine/core";
import ListRenderComponent from "./ListRenderComponent";
import { IoMdAddCircleOutline } from "react-icons/io";

import excel from "../../public/images/iconsImage/excel.png";
import TopBar from "./TopBar";
import { HiOutlinePrinter } from "react-icons/hi2";
import { useDisclosure } from "@mantine/hooks";
import AddStockInComponent from "./AddStockInComponent";


const StockOutComponent = () => {

  interface stockOutInterface {
    id: string,
    reference: string,
    supplier: string,
    date: string,
    totalAmount:number,
    totalQty: number

  }

  
  const tableTitle: string[] = [
    "Reference",
    "Supplier Name",
    "Date",
    "Total Amount",
    "Total Quantity"
    
  ];

  const stockOutDatas: stockOutInterface[] = [
    {
        id:'1',
        reference:'111',
       supplier: "wai",
       date: 'sunday',
       totalAmount: 138593,
       totalQty: 44
    },
    
  ]

  const [opened, { open, close }] = useDisclosure(false);


  return (
    <div className="w-full h-full    !overflow-hidden">
      <TopBar />

      <Modal opened={opened} onClose={close} title="" centered fullScreen>
        <AddStockInComponent/>
      </Modal>

      <div className="">
        <div className="flex justify-between items-center">
          <div className="">
            <h1>Branches</h1>
            <p>Manage Branches</p>
          </div>

          <div className="flex justify-start items-center gap-4">
            <div className="">
              <img src={excel} alt="" />
            </div>
            <HiOutlinePrinter size={24} />
            <Button
              onClick={open}
              className="!bg-btn !text-white"
              leftSection={<IoMdAddCircleOutline size={18} />}
            >
             Add New Stock out
            </Button>

           
          </div>
        </div>

        <ListRenderComponent
          stockOutDatas={stockOutDatas}
          tableTitle={tableTitle}
        />
      </div>
    </div>
  );
};

export default StockOutComponent;
