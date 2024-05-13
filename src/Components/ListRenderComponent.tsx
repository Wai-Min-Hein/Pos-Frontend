import { FiFilter } from "react-icons/fi";

import { Accordion, Button, Input, Select, Table } from "@mantine/core";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

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

interface categoryInterface {
  id: string;
  code: string;
  name: string;
  created_on: string;
  status: string;
}

interface propsInterface {
  productDatas?: productInterface[];
  tableTitle: string[];
  categoryDatas?: categoryInterface[];
}

const ListRenderComponent = ({
  productDatas,
  tableTitle,
  categoryDatas,
}: propsInterface) => {
  const [value, setValue] = useState("");

  const tableDatas = productDatas || categoryDatas;

  const rows = tableDatas.map((product) => {
    const keys = Object.keys(product).filter(
      (key) => key !== "id" && key !== "createdByImage"
    );

    return (
      <Table.Tr key={product.id}>
        {keys.map((key) => (
          <Table.Td key={key} className="capitalize">
            {product[key]}
          </Table.Td>
        ))}

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
    );
  });

  return (
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
        <Table>
          <Table.Thead>
            <Table.Tr>
              {tableTitle.map((title, index) => (
                <Table.Th className="capitalize" key={index}>
                  {title}
                </Table.Th>
              ))}

              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>

      <div className="mt-4">
        <h6 className="text-sm">1 - 10 items of 10</h6>
      </div>
    </div>
  );
};

export default ListRenderComponent;
