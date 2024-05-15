import { Button, Modal, TextInput, Textarea } from "@mantine/core";
import ListRenderComponent from "./ListRenderComponent";
import { IoMdAddCircleOutline } from "react-icons/io";

import excel from "../../public/images/iconsImage/excel.png";
import TopBar from "./TopBar";
import { HiOutlinePrinter } from "react-icons/hi2";
import { useDisclosure } from "@mantine/hooks";


const IncomeTypeComponent = () => {

  interface incomeTypeInterface {
    id: string,
    code: string,
    name: string,
    description: string

  }

  
  const tableTitle: string[] = [
    "code",
    "name",
    "description",
    
  ];

  const incomeTypeDatas: incomeTypeInterface[] = [
    {
        id:'1',
        code:'111',
        name: 'Food',
        description: 'yangon',
    },
    {
        id:'2',
        code:'111',
        name: 'Food',
        description: 'yangon',
    }
  ]

  const [opened, { open, close }] = useDisclosure(false);


  return (
    <div className="w-full h-full    !overflow-hidden">
      <TopBar />

      <Modal opened={opened} onClose={close} title="Add Cash book" centered>
      
        <TextInput label="Code" placeholder="Code" />
        <TextInput label="Name" placeholder="Name" />
        <Textarea
      label="Description"
      placeholder="Description"
    />
       

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
          incomeTypeDatas={incomeTypeDatas}
          tableTitle={tableTitle}
          open={open}
        />
      </div>
    </div>
  );
};

export default IncomeTypeComponent;
