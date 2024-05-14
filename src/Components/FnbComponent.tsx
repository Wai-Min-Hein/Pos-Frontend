import TopBar from "./TopBar";

import excel from "../../public/images/iconsImage/excel.png";

import { IoMdAddCircleOutline } from "react-icons/io";

import { CiImport } from "react-icons/ci";

import { HiOutlinePrinter } from "react-icons/hi2";
import { Button } from "@mantine/core";

import { useNavigate } from "react-router-dom";
import ListRenderComponent from "./ListRenderComponent";

const FnbComponent = () => {
  interface productInterface {
    id: string;
    name: string;
    price: number;
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
    "price",
    "created by",
  ];

  const productDatas: productInterface[] = [
    {
      id: "1",
      name: "Product 1",
      price: 100,
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
      price: 101,
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
      price: 102,
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
      price: 103,
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
      price: 104,
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
      price: 105,
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
      price: 106,
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
      price: 107,
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
      price: 108,
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
      price: 109,
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
      price: 109,
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
      price: 109,
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
      price: 109,
      category: "laptop",
      sku: "p010",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
  ];

  const nav = useNavigate();

  return (
    <div className="w-full h-full !overflow-hidden">
      <TopBar />

      <div className="">
        <div className="flex justify-between items-center">
          <div className="">
            <h1>FnB Menus List</h1>
            <p>Manage FnB Menus</p>
          </div>

          <div className="flex justify-start items-center gap-4">
            <div className="">
              <img src={excel} alt="" />
            </div>
            <HiOutlinePrinter size={24} />
            <Button
              onClick={() => nav("/new")}
              className="!bg-btn !text-white"
              leftSection={<IoMdAddCircleOutline size={18} />}
            >
              Add New
            </Button>

            <Button
              className="!bg-btnDark !text-white"
              leftSection={<CiImport size={18} />}
            >
              Import Product
            </Button>
          </div>
        </div>

        <ListRenderComponent
          productDatas={productDatas}
          tableTitle={tableTitle}
        />
      </div>
    </div>
  );
};

export default FnbComponent;
