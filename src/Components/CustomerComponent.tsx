import { Button, Modal, Select, TextInput } from "@mantine/core";
import ListRenderComponent from "./ListRenderComponent";
import { IoMdAddCircleOutline } from "react-icons/io";

import excel from "../../public/images/iconsImage/excel.png";
import TopBar from "./TopBar";
import { HiOutlinePrinter } from "react-icons/hi2";
import { useDisclosure } from "@mantine/hooks";
import { DateTimePicker } from "@mantine/dates";

const CustomerComponent = () => {
  interface CustomerInterface {
    id: string;
    code: string;
    name: string;
    phone: string;
    email?: string;
    gender?:string,
    dob?: string,
    address?: string,
  }

  const tableTitle: string[] = [
    "code",
    "name",
    "phone",
    "email",
    "Gender",
    "DOB",
    "Address",
  ];

  const customerDatas: CustomerInterface[] = [
    {
      id: "1",
      code: "111",
      name: "Food",
      phone: "09777666555",
      email: "wai@example.com",
    },
    {
      id: "2",
      code: "111",
      name: "Food",
      phone: "09777666555",
      email: "wai@example.com",
    },
  ];

  const [opened, { open, close }] = useDisclosure(false);

 

  return (
    <div className="w-full h-full !overflow-hidden">
      <TopBar />

      <Modal opened={opened} onClose={close} title="Add New Customer"  centered>
        <div className="flex items-center justify-start gap-2">
          <TextInput label="Code" placeholder="Code" className="!basis-1/2" />
          <TextInput label="Customer Name" placeholder="Customer Name" className="!basis-1/2" />

        </div>

        <div className="flex items-center justify-start gap-2">
          <TextInput label="Phone" placeholder="Phone"  className="!basis-1/2"/>
          <TextInput label="Email" placeholder="Email"  className="!basis-1/2"/>
          
        </div>

        <div className="flex items-center justify-start gap-2">
          <Select
            label="Gender"
            placeholder="Gender" className="!basis-1/2"
            data={["React", "Angular", "Vue", "Svelte"]}
          />
            <DateTimePicker label='Date of Birth' placeholder="Date of Birth" className="!basis-1/2" />
          
        
        </div>
          <TextInput label="Address" placeholder="Address"  className="!basis-1/2"/>

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
              Add New Account
            </Button>
          </div>
        </div>

        <ListRenderComponent
          customerDatas={customerDatas}
          tableTitle={tableTitle}
          open={open}
        />
      </div>
    </div>
  );
};

export default CustomerComponent;
