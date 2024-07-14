import React, { useState } from "react";
import { Button, Table } from "@mantine/core";
import { MdAdd, MdDelete } from "react-icons/md";

interface SelectFormComponentProps {
  menuId: string;
  productDatas: { id: string; sku: string; name: string }[];
  selectedOptions: { [key: string]: {id:string; sku: string; name: string } };
  handleSelectChange: (
    id: string,
    value: {id:string; sku: string; name: string }
  ) => void;
  onAdd: (selectedOption: {
    id: string;
    sku: string;
    name: string;
    quantity: number;
  }) => void;
  onDelete: () => void;
}

const SelectFormComponent: React.FC<SelectFormComponentProps> = ({
  menuId,
  productDatas,
  selectedOptions,
  handleSelectChange,
  onAdd,
  onDelete,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const SelectedId = e.target.value;
    const selectedProduct = productDatas.find(
      (product) => product.id === SelectedId
    );
    if (selectedProduct) {
      handleSelectChange(menuId, {
        id: selectedProduct.id,
        sku: selectedProduct.sku,
        name: selectedProduct.name,
      });
    }
  };

  const handleSkuChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSku = e.target.value;
    const selectedProduct = productDatas.find(
      (product) => product.sku === selectedSku
    );
    if (selectedProduct) {
      handleSelectChange(menuId, {
        id: selectedProduct.id,
        sku: selectedProduct.sku,
        name: selectedProduct.name,
      });
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    const selectedProduct = productDatas.find(
      (product) => product.name === selectedName
    );
    if (selectedProduct) {
      handleSelectChange(menuId, {
        id: selectedProduct.id,
        sku: selectedProduct.sku,
        name: selectedProduct.name,
      });
    }
  };

  const handleAddButtonClick = () => {
    onAdd({
      id: selectedOptions[menuId]?.id || "",
      sku: selectedOptions[menuId]?.sku || "",
      name: selectedOptions[menuId]?.name || "",
      quantity: quantity,
    });
  };

  return (
    <Table.Tr>
      <Table.Td>
        <select
          value={selectedOptions[menuId]?.id || ""}
          onChange={handleIdChange}
          className=" hidden"
        >
          {productDatas.map((option) => (
            <option key={option.id} value={option.id}>
              {option.id}
            </option>
          ))}
        </select>
      </Table.Td>
      <Table.Td>
        <select
          value={selectedOptions[menuId]?.sku || ""}
          onChange={handleSkuChange}
          className=" "
        >
          {productDatas.map((option) => (
            <option key={option.id} value={option.sku}>
              {option.sku}
            </option>
          ))}
        </select>
      </Table.Td>
      <Table.Td>
        <select
          value={selectedOptions[menuId]?.name || ""}
          onChange={handleNameChange}
        >
          {productDatas.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </Table.Td>
      <Table.Td className=" w-56">
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={handleQuantityChange}
          min={1}
        />
      </Table.Td>
      <Table.Td className="flex gap-2">
        <Button size="sm" onClick={handleAddButtonClick}>
          <MdAdd />
        </Button>
        <Button size="sm" color="red" onClick={onDelete}>
          <MdDelete />
        </Button>
      </Table.Td>
    </Table.Tr>
  );
};

export default SelectFormComponent;
