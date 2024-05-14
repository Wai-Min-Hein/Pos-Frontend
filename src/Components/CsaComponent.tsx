import { Button, Modal, TextInput } from "@mantine/core";
import ListRenderComponent from "./ListRenderComponent";
import { IoMdAddCircleOutline } from "react-icons/io";

import excel from "../../public/images/iconsImage/excel.png";
import TopBar from "./TopBar";
import { HiOutlinePrinter } from "react-icons/hi2";
import { useDisclosure } from "@mantine/hooks";


const CsaComponent = () => {

  interface csaInterface {
    id: string,
    code: string,
    name: string,
    

  }

  
  const tableTitle: string[] = [
    "code",
    "name",
    
    
  ];

  const csaDatas: csaInterface[] = [
    {
        id:'1',
        code:'111',
        name: 'Food',
        
    },
    {
        id:'2',
        code:'111',
        name: 'Food',
       
    }
  ]

  const [opened, { open, close }] = useDisclosure(false);


  return (
    <div className="w-full h-full px-8   !overflow-hidden">
      <TopBar />

      <Modal opened={opened} onClose={close} title="Add New Area" centered>
        <TextInput
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
            <h1>Customer service area</h1>
            <p>Manage Customer service area</p>
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
              Add New Area
            </Button>

           
          </div>
        </div>

        <ListRenderComponent
          csaDatas={csaDatas}
          tableTitle={tableTitle}
        />
      </div>
    </div>
  );
};

export default CsaComponent;
