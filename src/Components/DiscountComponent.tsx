import TopBar from "./TopBar";

import excel from "../../public/images/iconsImage/excel.png";

import { IoMdAddCircleOutline } from "react-icons/io";

import { CiImport } from "react-icons/ci";

import { HiOutlinePrinter } from "react-icons/hi2";
import { Button, Modal } from "@mantine/core";

import ListRenderComponent from "./ListRenderComponent";
import { useDisclosure } from "@mantine/hooks";
import AddDiscountComponent from "./AddDiscountComponent";

const DiscountComponent = () => {
  interface DiscountInterface {
    id: string;
    code: string,
    name: string,
    status: string,
    effectiveDate:string,
    expiredDate: string,
    limit: string | number,
    branch: string,
    rate?: number,
    amount?: number
  }

  const tableTitle: string[] = [
    'code',
    "name",

    "status",
    "effective date",
    "expired date",
    "limit",
    "branch",
    "rate",
    "amount",
  ];

  const discountDatas: DiscountInterface[] = [
    {
      id: '1',
    code: '333',

    name: 'D5%',
    status: "Active",
    effectiveDate:'Yesterday',
    expiredDate: 'next year',
    limit: 'unlimited',
    branch: 'Ynagon',
    rate: 5,
    amount: 0
    }
  ];

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="w-full h-full !overflow-hidden">
      <TopBar />

      <Modal opened={opened} onClose={close} fullScreen>
        <AddDiscountComponent/>
      </Modal>

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
              onClick={open}
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

        <ListRenderComponent
          discountDatas={discountDatas}
          tableTitle={tableTitle}
          open={open}
        />
      </div>
    </div>
  );
};

export default DiscountComponent;
