import { Button, Modal, NumberInput, TextInput } from "@mantine/core";
import ListRenderComponent from "./ListRenderComponent";
import { IoMdAddCircleOutline } from "react-icons/io";

import excel from "../../public/images/iconsImage/excel.png";
import TopBar from "./TopBar";
import { HiOutlinePrinter } from "react-icons/hi2";
import { useDisclosure } from "@mantine/hooks";


const BranchListComponent = () => {

  interface branchInterface {
    id: string,
    code: string,
    name: string,
    address?: string,
    phone?:string,

  }

  
  const tableTitle: string[] = [
    "code",
    "name",
    "address",
    "phone",
    
  ];

  const branchDatas: branchInterface[] = [
    {
        id:'1',
        code:'111',
        name: 'Food',
        address: 'yangon',
        phone:'09888777555'
    },
    {
        id:'2',
        code:'111',
        name: 'Food',
        address: 'yangon',
        phone:'09888777555'
    }
  ]

  const [opened, { open, close }] = useDisclosure(false);


  return (
    <div className="w-full h-full px-8   !overflow-hidden">
      <TopBar />

      <Modal opened={opened} onClose={close} title="Add New Branch" centered>
        <TextInput
          label="Code"
          placeholder="Code"
        />
        <TextInput label="Name" placeholder="Name" />
        <NumberInput label="Phone" placeholder="Phone" />
        <TextInput label="Address" placeholder="Address" />

        <div className="flex justify-end mt-4">
          <Button>Save</Button>
        </div>
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
              Add New Branch
            </Button>

           
          </div>
        </div>

        <ListRenderComponent
          branchDatas={branchDatas}
          tableTitle={tableTitle}
        />
      </div>
    </div>
  );
};

export default BranchListComponent;
