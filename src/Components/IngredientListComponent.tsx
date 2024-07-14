import React, { useState } from 'react';
import {Table } from '@mantine/core';
import TopBar from './TopBar';
import { CiSquarePlus } from 'react-icons/ci';
import SelectFormComponent from './SelectFromComponent';

const IngredientListComponent = () => {
  interface MenuInterface {
    id: string;
    name: string;
    sku: string;
    quantity: number;
    unit: string;
  }

  interface ProductInterface {
    id: string;
    name: string;
    category: string;
    sku: string;
    createdByName: string;
    createdByImage: string;
    unit: string;
  }

  const initialMenuDatas: MenuInterface[] = [
    {
      id: '1',
      name: 'Product 1',
      sku: 'p001',
      quantity: 2,
      unit: 'pc',
    },
    {
      id: '2',
      name: 'Product 2',
      sku: 'p002',
      quantity: 1,
      unit: 'pc',
    },
  ];
  const productDatas: ProductInterface[] = [
    {
      id: "1",
      name: "Product 1",
      category: "laptop",
      sku: "p001",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "2",
      name: "Product 2",
      category: "laptop",
      sku: "p002",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "3",
      name: "Product 3",
      category: "laptop",
      sku: "p003",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "4",
      name: "Product 4",
      category: "laptop",
      sku: "p004",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "5",
      name: "Product 5",
      category: "laptop",
      sku: "p005",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "6",
      name: "Product 6",
      category: "laptop",
      sku: "p006",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "7",
      name: "Product 7",
      category: "laptop",
      sku: "p007",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "8",
      name: "Product 8",
      category: "laptop",
      sku: "p008",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "9",
      name: "Product 9",
      category: "laptop",
      sku: "p009",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
    {
      id: "10",
      name: "Product 10",
      category: "laptop",
      sku: "p010",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },

    {
      id: "11",
      name: "Product 10",
      category: "laptop",
      sku: "p010",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },

    {
      id: "12",
      name: "Product 10",
      category: "laptop ",
      sku: "p010",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },

    {
      id: "13",
      name: "Product 10",
      category: "laptop",
      sku: "p010",
      createdByName: "John",
      createdByImage:
        "https://i.pinimg.com/474x/8b/f2/1c/8bf21c33efbc925593a022e0147ad4f2.jpg",
      unit: "pc",
    },
  ];

  const [menuDatas, setMenuDatas] = useState<MenuInterface[]>(initialMenuDatas);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: {id:string; sku: string; name: string } }>({});

  const toggleSelectForm = (id: string) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  const handleSelectChange = (id: string, value: {id:string; sku: string; name: string }) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [id]: value,
    }));
  };

  const handleAddRow = (menuId: string, selectedOption: {id:string; sku: string; name: string; quantity: number }) => {
    const newMenu = initialMenuDatas.find((menu) => menu.id === menuId || menu.name);
    console.log(newMenu);
    if (newMenu) {
      const newMenuItem: MenuInterface = {
        ...newMenu,
        id: selectedOption.id,
        sku: selectedOption.sku,
        name: selectedOption.name,
        quantity: selectedOption.quantity
      };
      console.log(newMenuItem)
      // Update menuDatas
      setMenuDatas((prevMenuDatas) => [...prevMenuDatas, newMenuItem]);
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, menuId]);
    }
  };

  const handleDeleteRow = (menuId: string) => {
    setSelectedRows((prevSelectedRows) => prevSelectedRows.filter((rowId) => rowId !== menuId));
  };

  const rows = menuDatas.map((menu) => (
    <React.Fragment key={menu.id}>
      <Table.Tr>
        <Table.Td>
          <CiSquarePlus onClick={() => toggleSelectForm(menu.id)} className='cursor-pointer' />
        </Table.Td>
        <Table.Td>{menu.sku}</Table.Td>
        <Table.Td>{menu.name}</Table.Td>
        <Table.Td>{menu.quantity} pc</Table.Td>
        <Table.Td></Table.Td>
      </Table.Tr>
      {selectedRows.includes(menu.id) && (
        <SelectFormComponent
          menuId={menu.id}
          productDatas={productDatas}
          selectedOptions={selectedOptions}
          handleSelectChange={handleSelectChange}
          onAdd={(selectedOption) => handleAddRow(menu.id, selectedOption)}
          onDelete={() => handleDeleteRow(menu.id)}
        />
      )}
    </React.Fragment>
  ));

  return (
    <div className='w-full h-full overflow-hidden'>
      <TopBar />
      <div className='mt-4'>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                <CiSquarePlus />
              </Table.Th>
              <Table.Th>SKU</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Unit</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </div>
  );
};

export default IngredientListComponent;
