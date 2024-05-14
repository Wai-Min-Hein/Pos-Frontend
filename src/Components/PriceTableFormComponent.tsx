import {
  Button,
  NumberInput,
  Select,
  Switch,
  Table,
  TextInput,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { useState } from "react";

const PriceTableFormComponent = () => {
  const [applyPolicy, setApplyPolicy] = useState(true);
  const [detailInfo, setDetailInfo] = useState(false);

  interface menuInterface {
    id: string;
    code: string;
    category: string;
    name: string;
    price: number;
    vat: number;
    disPercent: number;
    disAmount: number;
    adjust: boolean;
  }

  const menus: menuInterface[] = [
    {
      id: "1",
      code: "11",
      category: "Fruit",
      name: "Apple",
      price: 3000,
      vat: 5,
      disPercent: 0,
      disAmount: 0,
      adjust: false,
    },
    {
      id: "2",
      code: "11",
      category: "Fruit",
      name: "Apple",
      price: 3000,
      vat: 5,
      disPercent: 0,
      disAmount: 0,
      adjust: true,
    },
  ];


  const rows = menus.map((menu) => (
    <Table.Tr key={menu.id}>
      <Table.Td>{menu.category}</Table.Td>
      <Table.Td>{menu.code}</Table.Td>
      <Table.Td>{menu.name}</Table.Td>
      <Table.Td>{menu.price}</Table.Td>
      <Table.Td>{menu.vat}</Table.Td>
      <Table.Td>{menu.disPercent}</Table.Td>
      <Table.Td>{menu.disAmount}</Table.Td>
      <Table.Td>
        <Switch checked={menu.adjust} />
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <div className="w-full mt-4 px-6 py-4 ">
      <div className="bg-white py-2">
        <Button
          onClick={() => (setDetailInfo(false), setApplyPolicy(true))}
          className={`!bg-transparent !text-darkText  focus:border-none visited:border-none hover:border-none !transition-none ${
            applyPolicy ? "!border-b-2 !border-b-btn pb-1" : ""
          }`}
        >
          Apply Policy
        </Button>
        <Button
          onClick={() => (setDetailInfo(true), setApplyPolicy(false))}
          className={`!bg-transparent !text-darkText  focus:border-none hover:border-none !transition-none ${
            detailInfo ? "!border-b-2 !border-b-btn pb-1" : ""
          }`}
        >
          Products Details Information
        </Button>
      </div>

      <div className={`py-2 mt-4 apply-policy ${applyPolicy ? "" : "hidden"}`}>
        <form action="" className="price-table-form">
          <div className="bg-white px-4 py-3 rounded-md">
            <h6>Price Table Informations</h6>
            <div className="flex items-center justify-start gap-4">
              <TextInput
                className="!border-b border-b-gray !bg-transparent basis-1/4"
                label="Price table code"
                placeholder=""
              />
              <TextInput
                className="!border-b border-b-gray !bg-transparent basis-1/4"
                label="Price table name"
                placeholder=""
              />
            </div>
          </div>

          <div className="my-6 bg-white px-4 py-3 rounded-md">
            <h6>Apply at</h6>
            <div className="flex items-center justify-start gap-4">
              <Select
                label="Choose Branch"
                className="basis-1/3"
                placeholder="Choose Branch"
                data={["React", "Angular", "Vue", "Svelte"]}
              />

              <Select
                label="Choose Customers"
                className="basis-1/3"
                placeholder="Choose Customers"
                data={["React", "Angular", "Vue", "Svelte"]}
              />
            </div>
          </div>

          <div className="my-6 bg-white px-4 py-3 rounded-md">
            <h6>Time of Application</h6>
            <div className="flex items-center justify-start gap-4">
              <DateTimePicker
                label="Effective time from"
                className="basis-1/2"
                placeholder="Choose Date"
              />

              <DateTimePicker
                label="Effective time to"
                className="basis-1/2"
                placeholder="Choose Date"
              />
            </div>
          </div>
        </form>
      </div>

      <div
        className={`py-2 mt-4 apply-policy bg-white px-4 ${
          detailInfo ? "" : "hidden"
        }`}
      >
        <Table.ScrollContainer minWidth={500}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Category</Table.Th>
                <Table.Th>Code</Table.Th>
                <Table.Th className="!w-60">Name</Table.Th>
                <Table.Th>Price</Table.Th>
                <Table.Th>VAT</Table.Th>
                <Table.Th>Discount %</Table.Th>
                <Table.Th>Discount Amount</Table.Th>
                <Table.Th>Allow to adjust</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td colSpan={3}>
                  <TextInput label="Name" className="" />
                </Table.Td>

                <Table.Td>
                  <NumberInput label="Price" className="" />
                </Table.Td>

                <Table.Td>
                  <Select
                    label="VAT"
                    data={["React", "Angular", "Vue", "Svelte"]}
                  />
                </Table.Td>

                <Table.Td >
                  <NumberInput label="Discount" className="" />
                </Table.Td>

                <Table.Td >
                  <NumberInput label="Discount Amount" className="" />
                </Table.Td>

                <Table.Td>
        <Switch defaultChecked />
      </Table.Td>



              </Table.Tr>

              {rows}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </div>
    </div>
  );
};

export default PriceTableFormComponent;
