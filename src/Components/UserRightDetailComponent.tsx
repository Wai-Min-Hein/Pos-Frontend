import { HiOutlinePrinter } from "react-icons/hi2";
import TopBar from "./TopBar";
import excel from "../../public/images/iconsImage/excel.png";
import { IoMdAddCircleOutline } from "react-icons/io";
import {
  Accordion,
  Button,
  Checkbox,
  Input,
  Select,
  Table,
} from "@mantine/core";
import { BiSearch } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";

const UserRightDetailComponent = () => {
  interface rightDataInterface {
    id: string;
    module: string;
    create: boolean;
    edit: boolean;
    delete: boolean;
    view: boolean;
    all: boolean;
  }

  const rightData: rightDataInterface[] = [
    {
        id: '1',
        module: 'statusbar',
        create: true,
        edit: true,
        delete: true,
        view: true,
        all: true,
      },

      {
        id: '2',
        module: 'statusbar',

        create: true,
        edit: false,
        delete: true,
        view: false,
        all: true,
      },

    
    
  ];

  const rows = rightData.map((data) => (
    <Table.Tr key={data.id}>
      <Table.Td>
        <Checkbox />
      </Table.Td>
      <Table.Td className="capitalize">
        {data.module}
      </Table.Td>
      <Table.Td>
        <Checkbox checked={data.create}/>
      </Table.Td>
      <Table.Td>
        <Checkbox checked={data.edit}/>
      </Table.Td>
      <Table.Td>
        <Checkbox checked={data.delete}/>
      </Table.Td>
      <Table.Td>
        <Checkbox checked={data.view}/>
      </Table.Td>
      <Table.Td>
        <Checkbox checked={data.all}/>
      </Table.Td>

     
    </Table.Tr>
  ));
  const [value, setValue] = useState("");

  return (
    <div className="w-full h-full !overflow-hidden">
      <TopBar />

      <div className="mt-4">
        <div className="flex justify-between items-center px-4">
          <div className="">
            <h1>Customer service area</h1>
            <p>Manage Customer service area</p>
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
              Add New Role
            </Button>
          </div>
        </div>

        <div className="border border-gray p-4  rounded-md my-6">
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

          <div className="">
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Td>
                    <Checkbox />
                  </Table.Td>
                  <Table.Th>Module</Table.Th>
                  <Table.Th>Create</Table.Th>
                  <Table.Th>Edit</Table.Th>
                  <Table.Th>Delete</Table.Th>
                  <Table.Th>View</Table.Th>
                  <Table.Th>Allow All</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRightDetailComponent;
