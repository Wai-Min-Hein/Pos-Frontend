import { Button, Modal, Select, TextInput } from "@mantine/core";
import ListRenderComponent from "./ListRenderComponent";
import { IoMdAddCircleOutline } from "react-icons/io";

import excel from "../../public/images/iconsImage/excel.png";
import TopBar from "./TopBar";
import { HiOutlinePrinter } from "react-icons/hi2";
import { useDisclosure } from "@mantine/hooks";


const CashBookListComponent = () => {

  interface cashBookDatasInterface {
    id: string,
    code: string,
    name: string,
    branch: string,
    type?: string,

  }

  
  const tableTitle: string[] = [
    "code",
    "name",
    "branch",
    "type",
    
  ];

  const cashBookDatas: cashBookDatasInterface[] = [
    {
        id:'1',
        code:'111',
        name: 'Food',
        branch: 'yangon',
        type:'09888777555'
    },
    {
        id:'2',
        code:'111',
        name: 'Food',
        branch: 'yangon',
        type:'09888777555'
    }
  ]

  const [opened, { open, close }] = useDisclosure(false);


  return (
    <div className="w-full h-full    !overflow-hidden">
      <TopBar />

      <Modal opened={opened} onClose={close} title="Add Cash book" centered>
      <Select
      label="Cash book type"
      placeholder="Cash book type"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
        <TextInput label="Code" placeholder="Code" />
        <Select
      label="Branch"
      placeholder="Branch"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
         <Select
      label="Type"
      placeholder="Type"
      data={['Cash', 'Book']}
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
          cashBookDatas={cashBookDatas}
          tableTitle={tableTitle}
          open={open}
        />
      </div>
    </div>
  );
};

export default CashBookListComponent;
