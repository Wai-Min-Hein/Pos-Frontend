import { Button, Table } from "@mantine/core";
import TopBar from "./TopBar";
import { CiSquarePlus } from "react-icons/ci";

const IngredientListComponent = () => {
  interface productInterface {
    id: string;
    name: string;
    sku: string;

    unit: string;
  }

  const productDatas: productInterface[] = [
    {
      id: "1",
      name: "Product 1",

      sku: "p001",

      unit: "pc",
    },
    {
      id: "2",
      name: "Product 2",
      sku: "p002",
      unit: "pc",
    },
  ];


  const rows = productDatas.map((product) => (
    <Table.Tr key={product.id}>
      
      <Table.Td >
      <CiSquarePlus className="cursor-pointer"/>
      </Table.Td>
      <Table.Td >{product.sku}</Table.Td>
      <Table.Td >{product.name}</Table.Td>
      <Table.Td>{product.unit}</Table.Td>
      
    </Table.Tr>
  ));
  return (
    <div className="w-full h-full !overflow-hidden">
      <TopBar />

      <div className="mt-4">
      <Table>
      <Table.Thead>
        <Table.Tr>
        <Table.Th ><CiSquarePlus /></Table.Th>
          <Table.Th >SKU</Table.Th>
          <Table.Th >Name</Table.Th>
          <Table.Th>Unit</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
      </div>
    </div>
  );
};

export default IngredientListComponent;
