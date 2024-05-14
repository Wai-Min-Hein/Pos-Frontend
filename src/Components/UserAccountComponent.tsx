import { Button, Modal, PasswordInput, Select, TextInput } from "@mantine/core";
import ListRenderComponent from "./ListRenderComponent";
import { IoMdAddCircleOutline } from "react-icons/io";

import excel from "../../public/images/iconsImage/excel.png";
import TopBar from "./TopBar";
import { HiOutlinePrinter } from "react-icons/hi2";
import { useDisclosure } from "@mantine/hooks";

const UserAccountComponent = () => {
  interface userAccountInterface {
    id: string;
    code: string;
    name: string;
    phone: string;
    email?: string;
    role: string;
    created_on: string;
    status: string;
  }

  const tableTitle: string[] = [
    "code",
    "name",
    "phone",
    "email",
    "role",
    "created on",
    "status",
  ];

  const userAccount: userAccountInterface[] = [
    {
      id: "1",
      code: "111",
      name: "Food",
      phone: "09777666555",
      email: "wai@example.com",
      role: "Administrator",
      status: "Active",
      created_on: "sunday",
    },
    {
      id: "2",
      code: "111",
      name: "Food",
      phone: "09777666555",
      email: "wai@example.com",
      role: "Administrator",
      status: "Active",
      created_on: "sunday",
    },
  ];

  const [opened, { open, close }] = useDisclosure(false);

 

  return (
    <div className="w-full h-full !overflow-hidden">
      <TopBar />

      <Modal opened={opened} onClose={close} title="Add New Area" centered>
        <div className="flex items-center justify-start gap-2">
          <TextInput label="User Name" placeholder="User Name" className="!basis-1/2" />
          <TextInput label="Phone" placeholder="Phone" className="!basis-1/2" />
        </div>

        <div className="flex items-center justify-start gap-2">
          <TextInput label="Email" placeholder="Email"  className="!basis-1/2"/>
          <Select
            label="Role"
            placeholder="Role" className="!basis-1/2"
            data={["React", "Angular", "Vue", "Svelte"]}
          />
        </div>

        <div className="flex items-center justify-start gap-2">
        <PasswordInput label="Password" placeholder="Password" className="!basis-1/2"/>
          <PasswordInput label="Confirm Password" placeholder="Confirm Password" className="!basis-1/2" />
        </div>

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
          userAccount={userAccount}
          tableTitle={tableTitle}
          open={open}
        />
      </div>
    </div>
  );
};

export default UserAccountComponent;
