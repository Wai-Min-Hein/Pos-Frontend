import TopBar from "./TopBar";

import excel from "../../public/images/iconsImage/excel.png";

import { IoMdAddCircleOutline } from "react-icons/io";

import {  CiImport } from "react-icons/ci";

import {  HiOutlinePrinter } from "react-icons/hi2";
import {  Button,  Modal, Notification } from "@mantine/core";

import ListRenderComponent from "./ListRenderComponent";
import { useDisclosure } from "@mantine/hooks";
import AddProductComponent from "./AddProductComponent";
import * as XLSX from 'xlsx';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import AlertContext from "../AlertContext";


const ProductListComponent = () => {

  const nav = useNavigate();
  interface productInterface {
    id: string;
    name: string;
    category: string;
    sku: string;
    createdByName: string;
    createdByImage: string;
    unit: string;
  }

  const tableTitle: string[] = [
    "name",
    "category",
    "sku",
    "unit",
    "created by",
  ];

  const productDatas: productInterface[] = [
    {
      id: "1",
      name: "Product 1",
      category: "laptop",
      sku: "p001",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "2",
      name: "Product 2",
      category: "laptop",
      sku: "p002",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "3",
      name: "Product 3",
      category: "laptop",
      sku: "p003",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "4",
      name: "Product 4",
      category: "laptop",
      sku: "p004",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "5",
      name: "Product 5",
      category: "laptop",
      sku: "p005",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "6",
      name: "Product 6",
      category: "laptop",
      sku: "p006",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "7",
      name: "Product 7",
      category: "laptop",
      sku: "p007",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "8",
      name: "Product 8",
      category: "laptop",
      sku: "p008",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "9",
      name: "Product 9",
      category: "laptop",
      sku: "p009",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "10",
      name: "Product 10",
      category: "laptop",
      sku: "p010",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },

    {
      id: "11",
      name: "Product 10",
      category: "laptop",
      sku: "p010",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },

    {
      id: "12",
      name: "Product 10",
      category: "laptop ",
      sku: "p010",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },

    {
      id: "13",
      name: "Product 10",
      category: "laptop",
      sku: "p010",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
  ];
  const [opened, { open, close }] = useDisclosure(false);

  const handelToExport = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(productDatas);
  
    XLSX.utils.book_append_sheet(workbook, worksheet, "Mysheet1");
  
    XLSX.writeFile(workbook, "ProductList.xlsx");
  
    // console.log(productDatas);
  };

  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("No context provided");
  }

  const { alert, clearAlert } = context;

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        clearAlert();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alert, clearAlert]);


  return (
    <div className="w-full h-full !overflow-hidden">
      <TopBar />
      {alert && (
        <Notification title="Success" color={alert.color} onClose={clearAlert}>
          {alert.message}
        </Notification>
      )}

      <div className="">
        <div className="flex justify-between items-center">
          <div className="">
            <h1>FnB Menus List</h1>
            <p>Manage FnB Menus</p>
          </div>

          <div className="flex justify-start items-center gap-4">
            <div className=" cursor-pointer">
              <img src={excel} alt="" onClick={handelToExport} />
            </div>
            <HiOutlinePrinter className=" cursor-pointer" size={24} />
            <Button
              onClick={open}
              className="!bg-btn !text-white"
              leftSection={<IoMdAddCircleOutline size={18} />}
            >
              Add New
            </Button>

            <Button
              className="!bg-btnDark !text-white"
              leftSection={<CiImport size={18} />}
              onClick={() => nav('/upload')}
            >
              Import Product
            </Button>
          </div>
        </div>

        <Modal
          opened={opened}
          fullScreen
          onClose={close}
          
        >
         <AddProductComponent/>
        </Modal>

        <ListRenderComponent
          productDatas={productDatas}
          tableTitle={tableTitle}
        />
      </div>
    </div>
  );
};

export default ProductListComponent;
