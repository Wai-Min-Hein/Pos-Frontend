import TopBar from "./TopBar";

import excel from "../../public/images/iconsImage/excel.png";

import { IoMdAddCircleOutline } from "react-icons/io";

import { CiImport } from "react-icons/ci";

import { FiFilter } from "react-icons/fi";

import { HiOutlinePrinter } from "react-icons/hi2";
import { Accordion, Button, Input, Select, Table } from "@mantine/core";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const FnbComponent = () => {
  const [value, setValue] = useState("");

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

  const nav = useNavigate()

  const rows = productDatas.map((product) => (
    <Table.Tr key={product.id}>
      <Table.Td className="capitalize">{product.name}</Table.Td>
      <Table.Td className="capitalize">{product.category}</Table.Td>
      <Table.Td className="capitalize">{product.sku}</Table.Td>
      <Table.Td className="capitalize">{product.unit}</Table.Td>
      <Table.Td className="capitalize">{product.price} ks</Table.Td>

      <Table.Td className="capitalize">
        <div className="flex items-center justify-start gap-1">
          <div className="">
            <img
              src={product.createdByImage}
              className="w-8 h-8 object-cover rounded"
              alt=""
            />
          </div>
          <h6>{product.createdByName}</h6>
        </div>
      </Table.Td>

      <Table.Td className="capitalize w-24">
        <div className="flex items-center justify-start gap-x-2">
          <div className="w-8 h-8 grid place-items-center rounded border-2  border-gray">
            <LuEye />
          </div>
          <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
            <TbEdit />
          </div>

          <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
            <MdDeleteOutline />
          </div>
        </div>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <div className="w-full h-full px-8   !overflow-hidden">
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
            onClick={() => nav('/new')}
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

        <div className="border border-gray p-4  rounded-md m-6">
          <div className=" relative grid place-items-center">
            <Input
              placeholder="Search "
              className=" !mt-0 mr-auto rounded-lg  w-1/4"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              rightSectionPointerEvents="all"
              mt="md"
              rightSection={
                <BiSearch aria-label="Sesrch" onClick={() => setValue("")} />
              }
            />
            <Accordion className="!border-none filter">
              <Accordion.Item className="!border-none" value="filter">
                <Accordion.Control className="!bg-transparent !border-none">
                  <div className="w-10 h-10 grid place-items-center rounded cursor-pointer bg-btn absolute top-0 right-0">
                    <FiFilter size={24} className="" />
                  </div>
                </Accordion.Control>
                <Accordion.Panel className="">
                  <div className="flex items-center justify-between mt-4 gap-x-12">
                    <Select
                      placeholder="Choose Product"
                      data={["React", "Angular", "Vue", "Svelte"]}
                    />

                    <Select
                      placeholder="Choose Category"
                      data={["React", "Angular", "Vue", "Svelte"]}
                    />

                    <Select
                      placeholder="Choose Unit"
                      data={["React", "Angular", "Vue", "Svelte"]}
                    />

                    <Select
                      placeholder="Choose Price"
                      data={["React", "Angular", "Vue", "Svelte"]}
                    />

                    <Button
                      className="!bg-btn !text-white"
                      leftSection={<IoSearchSharp size={18} />}
                    >
                      Search
                    </Button>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className=" overflow-auto border-b-2 border-gray pb-2">
            <Table >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Category</Table.Th>
                  <Table.Th>SKU</Table.Th>
                  <Table.Th>Unit</Table.Th>
                  <Table.Th>Price</Table.Th>
                  <Table.Th>Created by</Table.Th>
                  <Table.Th>Actions</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </div>


          <div className="mt-4">
              <h6 className="text-sm">
                1 - 10 items of 10
              </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FnbComponent;
