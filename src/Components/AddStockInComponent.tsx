import {
  Button,
  NumberInput,
  Select,
  Switch,
  Table,
  TextInput,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";

const AddStockInComponent = () => {
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
    <div>
      <div className="">
        <form action="">
          <div className="flex justify-start items-center gap-6">
            <TextInput
              placeholder="Code"
              label="Reference code"
              className="basis-1/3"
            />
            <Select
              placeholder="Supplier"
              className="basis-1/3"
              label="Supplier"
              data={["React", "Angular", "Vue", "Svelte"]}
            />
            <DateTimePicker
              label="Date"
              placeholder="Choose Date"
              className="basis-1/3"
            />
          </div>

          <div className="flex justify-start items-center gap-6">
            <TextInput
            //   placeholder="Total Quantity"
            defaultValue={44}
              label="Total Quantity"
              className="basis-1/3"
            />

<TextInput
            //   placeholder="Total Quantity"
            defaultValue={299442}
              label="Total Amount"
              className="basis-1/3"
            />
           
          </div>
        </form>
      </div>

      <div className="bg-transparentBgGreen mt-6 p-4 rounded-sm">
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
                <Table.Th className="!w-32">Allow to adjust</Table.Th>
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

                <Table.Td>
                  <NumberInput label="Discount" className="" />
                </Table.Td>

                <Table.Td>
                  <NumberInput label="Discount Amount" className="" />
                </Table.Td>

                <Table.Td>
                  <Switch defaultChecked />
                </Table.Td>
              </Table.Tr>

              <Table.Tr>
                <Table.Td>
                  <Button className="!bg-transparent !text-btnDark hover:border-none">
                    Save
                  </Button>
                </Table.Td>

                <Table.Td>
                  <Button className="!bg-transparent !text-btnDark hover:border-none">
                    Delete
                  </Button>
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

export default AddStockInComponent;
