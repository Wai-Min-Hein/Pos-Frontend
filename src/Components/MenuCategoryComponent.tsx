import { Button, Modal, TextInput } from "@mantine/core";
import ListRenderComponent from "./ListRenderComponent";
import { IoMdAddCircleOutline } from "react-icons/io";

import excel from "../../public/images/iconsImage/excel.png";
import TopBar from "./TopBar";
import { HiOutlinePrinter } from "react-icons/hi2";
import { useDisclosure } from "@mantine/hooks";


const MenuCategoryComponent = () => {

  interface categoryInterface {
    id: string,
    code: string,
    name: string,
    created_on: string,
    status: string
  }

  
  const tableTitle: string[] = [
    "code",
    "name",
    "created on",
    "status",
    
  ];

  const categoryDatas: categoryInterface[] = [
    {
        id:'1',
        code:'111',
        name: 'Food',
        created_on: 'sunday',
        status: 'Active'
    },
    {
        id:'2',
        code:'111',
        name: 'Food',
        created_on: 'sunday',
        status: 'Inactive'
    }
  ]

  const [opened, { open, close }] = useDisclosure(false);


  return (
    <div className="w-full h-full !overflow-hidden">
      <TopBar />

      <Modal opened={opened} onClose={close} title="Add New Category" centered>
        <TextInput
          className="!bg-transparent"
          label="Code"
          placeholder="Code"
        />
        <TextInput label="Name" placeholder="Name" />
        <div className="flex justify-end mt-4">
          <Button>Save</Button>
        </div>
      </Modal>

      <div className="">
        <div className="flex justify-between items-center">
          <div className="">
            <h1>Category</h1>
            <p>Manage Category</p>
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
              Add New Category
            </Button>

           
          </div>
        </div>

        <ListRenderComponent
          categoryDatas={categoryDatas}
          tableTitle={tableTitle}
        />
      </div>
    </div>
  );
};

export default MenuCategoryComponent;
