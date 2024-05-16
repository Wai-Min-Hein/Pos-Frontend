import {
  Button,
  Modal,
  NumberInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import ListRenderComponent from "./ListRenderComponent";
import { IoMdAddCircleOutline } from "react-icons/io";

import excel from "../../public/images/iconsImage/excel.png";
import TopBar from "./TopBar";
import { HiOutlinePrinter } from "react-icons/hi2";
import { useDisclosure } from "@mantine/hooks";
import { DateTimePicker } from "@mantine/dates";

const CashBookReportComponent = () => {
  interface CashBookReportInterface {
    id: string;
    code: string;
    name: string;
    date: string;
    receiptVoucher?: string;
    paymentVoucher?: string;
    partner?: string;
    description?: string;
    openingBalance?: number;
    receipt?: number;
    payment?: number;
    closingBalance?: number;
  }

  const tableTitle: string[] = [
    "cash book code",
    "name",
    "date",
    "receipt voucher",
    "payment voucher",
    "partner",
    "description",
    "opening balance",
    "receipt",
    "payment",
    "closing balance",
  ];

  const cashBookReportDatas: CashBookReportInterface[] = [
    {
      id: "1",
      code: "111",
      name: "Food",
      receiptVoucher:'11123',
      paymentVoucher:'3r3fw',
    openingBalance:35434554,
    receipt:4999,
    payment:0,
    closingBalance:3343,
      date: "sunday",
      partner: "waimin",
      description: "yangon",
    },
    {
      id: "2",
      code: "111",
      name: "Food",
      receiptVoucher:'11123',
      paymentVoucher:'3r3fw',
    openingBalance:35434554,
    receipt:4999,
    payment:0,
    closingBalance:3343,
      date: "sunday",
      partner: "waimin",
      description: "yangon",
    },
  ];
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="w-full h-full    !overflow-hidden">
      <TopBar />

      <Modal opened={opened} onClose={close} title="Add Debt Payment" centered>
        <div className="flex items-center justify-start gap-4">
          <Select
            className="basis-1/2"
            label="Income Type"
            placeholder="Type"
            data={["React", "Angular", "Vue", "Svelte"]}
          />
          <DateTimePicker
            className="basis-1/2"
            label="Time"
            placeholder="Choose  time"
          />
        </div>

        <div className="flex items-center justify-start gap-4">
          <NumberInput
            className="basis-1/2"
            label="Amount"
            placeholder="Amount"
          />
          <TextInput className="basis-1/2" label="Code" placeholder="Code" />
        </div>
        <Select
          className=""
          label="Customer"
          placeholder="Customer"
          data={["React", "Angular", "Vue", "Svelte"]}
        />
        <Textarea label="Description" placeholder="Description" />

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
              Add Debt Payment
            </Button>
          </div>
        </div>

        <ListRenderComponent
          cashBookReportDatas={cashBookReportDatas}
          tableTitle={tableTitle}
          open={open}
        />
      </div>
    </div>
  );
};

export default CashBookReportComponent;
