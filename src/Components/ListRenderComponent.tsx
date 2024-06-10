import { FiFilter } from "react-icons/fi";

import { Accordion, Button, Input, Select, Table } from "@mantine/core";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
// import { FaCross } from "react-icons/fa";




interface fnbInterface {
  _id: string;
  name: string;
  price: number;
  category: string;
  sku: string;
  createdByName: string;
  createdByImage: string;
  unit: string;
}

interface categoryInterface {
  id: string;
  code: string;
  name: string;
  created_on: string;
  status: string;
}

interface branchInterface {
  id: string;
  code: string;
  name: string;
  address?: string;
  phone?: string;
}

interface csaInterface {
  _id: string;
  code: string;
  name: string;
}

interface menuInterface {
  name: string;
  price: number | string;
  vat: number | string;
  disPercent: number | string;
  disAmount: number | string;
  adjust: boolean;
}

interface priceTableInterface {
  _id: string;

  code: string;
  name: string;
  branch: string;
  area: string;
  startDate: Date | null;
  endDate: Date | null;
  menus: menuInterface[];
}

interface userAccountInterface {
  id: string;
  code: string;
  name: string;
  phone: string;
  email?: string;
  role: string;
  status: string;
  created_on: string;
}

interface EmployeeListInterface {
  id: string;
  code: string;
  name: string;
  phone: string;
  email?: string;
  department?: string;
  gender?: string;
  dob?: string;
  address?: string;
  branch?: string;
}

interface productInterface {
  id: string;
  name: string;
  category: string;
  sku: string;
  createdByName: string;
  createdByImage: string;
  unit: string;
}

interface productCategoryInterface {
  id: string;
  code: string;
  name: string;
  created_on: string;
  status: string;
}

interface stockInInterface {
  id: string;
  reference: string;
  supplier: string;
  date: string;
  totalAmount: number;
  totalQty: number;
}
interface stockOutInterface {
  id: string;
  reference: string;
  supplier: string;
  date: string;
  totalAmount: number;
  totalQty: number;
}

interface cashBookDatasInterface {
  id: string;
  code: string;
  name: string;
  branch: string;
  type?: string;
}

interface incomeTypeInterface {
  id: string;
  code: string;
  name: string;
  description: string;
}

interface ExpenseTypeInterface {
  id: string;
  code: string;
  name: string;
  description: string;
}

interface CashPaymentVoucherDatasInterface {
  id: string;
  code: string;
  name: string;
  date: string;
  amount: number;
  partner: string;
  description: string;
}

interface CashReceiptVoucherDatasInterface {
  id: string;
  code: string;
  name: string;
  date: string;
  amount: number;
  partner: string;
  description: string;
}

interface DebtPaymentVoucherDatasInterface {
  id: string;
  code: string;
  name: string;
  date: string;
  amount: number;
  partner: string;
  description: string;
}

interface DebtReceiptVoucherDatasInterface {
  id: string;
  code: string;
  name: string;
  date: string;
  amount: number;
  partner: string;
  description: string;
}

interface CustomerInterface {
  id: string;
  code: string;
  name: string;
  phone: string;
  email?: string;
  gender?: string;
  dob?: string;
  address?: string;
}

interface DiscountInterface {
  id: string;
  code: string;
  name: string;
  status: string;
  effectiveDate: string;
  expiredDate: string;
  limit: string | number;
  branch: string;
  rate?: number;
  amount?: number;
}
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

interface OpeningDebtListInterface {
  id: string;
  date: string;
  description?: string;
  type: string;
  amount: number;
  from: string;

  partner: string;
}

interface SalesReportDatasInterface {
  id: string;
  branchCode: string;
  branchName: string;
  date: string;
  billNo: string;
  area: string;
  table: string;
  productAmount: number;
  discount: number;
  revenue: number;
}

interface propsInterface {
  fnbDatas?: fnbInterface[];
  tableTitle: string[];
  categoryDatas?: categoryInterface[];
  branchDatas?: branchInterface[];
  csaDatas?: csaInterface[];
  priceTableDatas?: priceTableInterface[];
  handleDetail?: (id: string) => void;
  handleDelete?: (id: string) => void;
  open?: () => void;
  userAccount?: userAccountInterface[];
  employeeList?: EmployeeListInterface[];
  productDatas?: productInterface[];
  productCategoryDatas?: productCategoryInterface[];
  stockInDatas?: stockInInterface[];
  stockOutDatas?: stockOutInterface[];
  cashBookDatas?: cashBookDatasInterface[];
  incomeTypeDatas?: incomeTypeInterface[];
  expenseTypeDatas?: ExpenseTypeInterface[];
  cashPaymentVoucherDatas?: CashPaymentVoucherDatasInterface[];
  cashReceiptVoucherDatas?: CashReceiptVoucherDatasInterface[];
  debtPaymentVoucherDatas?: DebtPaymentVoucherDatasInterface[];
  debtReceiptVoucherDatas?: DebtReceiptVoucherDatasInterface[];
  customerDatas?: CustomerInterface[];
  discountDatas?: DiscountInterface[];
  cashBookReportDatas?: CashBookReportInterface[];
  openingDebtListDatas?: OpeningDebtListInterface[];
  SalesReportDatas?: SalesReportDatasInterface[];
}

const ListRenderComponent = ({
  fnbDatas,
  tableTitle,
  categoryDatas,
  branchDatas,
  csaDatas,
  priceTableDatas,
  handleDetail,
  handleDelete,
  open,
  userAccount,
  employeeList,
  productDatas,
  productCategoryDatas,
  stockInDatas,
  stockOutDatas,
  cashBookDatas,
  incomeTypeDatas,
  expenseTypeDatas,
  cashPaymentVoucherDatas,
  cashReceiptVoucherDatas,
  debtPaymentVoucherDatas,
  debtReceiptVoucherDatas,
  customerDatas,
  discountDatas,
  cashBookReportDatas,

  openingDebtListDatas,
  SalesReportDatas,
}: propsInterface) => {
  
  const [value, setValue] = useState("");
  // const [filter, setFilter] = useState(""); // Filter state
  // const [searchTerm, setSearchTerm] = useState(""); // Search term state
  // const [currentPage, setCurrentPage] = useState(1); // Current page state
  // const itemsPerPage = 10;

  // // Filtered and paginated data
  // const filteredData = data.filter((item) =>
  //   item.category.toLowerCase().includes(filter.toLowerCase()) &&
  //   (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.price.toString().includes(searchTerm))
  // );
  // const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  // const displayedData = filteredData.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  // // Handle search input change
  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);
  //   setCurrentPage(1); // Reset to first page on search
  // };

  // // Handle filter change
  // const handleFilterChange = (value) => {
  //   setFilter(value);
  //   setCurrentPage(1); // Reset to first page on filter change
  // };
  

  const rows =
    (fnbDatas &&
      fnbDatas?.map((product) => (
        <Table.Tr key={product._id}>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.category}</Table.Td>
          <Table.Td className="capitalize w-24">{product.sku}</Table.Td>
          <Table.Td className="capitalize w-24">{product.unit}</Table.Td>
          <Table.Td className="capitalize w-24">{product.price}</Table.Td>
          <Table.Td className="capitalize w-24">
            {product.createdByName}
          </Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div className="w-8 h-8 grid place-items-center rounded border-2  border-gray">
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (categoryDatas &&
      categoryDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.created_on}</Table.Td>
          <Table.Td className="capitalize w-24">{product.status}</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div className="w-8 h-8 grid place-items-center rounded border-2  border-gray">
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (branchDatas &&
      branchDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.address}</Table.Td>
          <Table.Td className="capitalize w-24">{product.phone}</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div className="w-8 h-8 grid place-items-center rounded border-2  border-gray">
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (csaDatas &&
      csaDatas?.map((product) => (
        <Table.Tr key={product._id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24 mr-auto">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24 ml-auto">
            <div className="flex items-center justify-start gap-x-2">
             
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <MdDeleteOutline onClick={() =>handleDelete && handleDelete(product._id)} />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (priceTableDatas &&
      priceTableDatas?.map((product) => (
        <Table.Tr key={product._id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.branch}</Table.Td>
          <Table.Td className="capitalize w-24">{product.area}</Table.Td>
          <Table.Td className="capitalize w-24">
          {product.startDate && new Date(product.startDate).toLocaleDateString() }
          </Table.Td>
          <Table.Td className="capitalize w-24">{product.endDate && new Date(product.endDate).toLocaleDateString() }</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div
                onClick={() => handleDetail && handleDetail(product._id)}
                className="w-8 h-8 grid place-items-center rounded border-2  border-gray cursor-pointer"
              >
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (userAccount &&
      userAccount?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.phone}</Table.Td>
          <Table.Td className="capitalize w-24">{product.email}</Table.Td>
          <Table.Td className="capitalize w-24">{product.role}</Table.Td>
          <Table.Td className="capitalize w-24">{product.created_on}</Table.Td>
          <Table.Td className="capitalize w-24">{product.status}</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div
                onClick={open && open}
                className="w-8 h-8 grid place-items-center rounded border-2  border-gray cursor-pointer"
              >
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (employeeList &&
      employeeList?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.phone}</Table.Td>
          <Table.Td className="capitalize w-24">{product.email}</Table.Td>
          <Table.Td className="capitalize w-24">{product.department}</Table.Td>
          <Table.Td className="capitalize w-24">{product.gender}</Table.Td>
          <Table.Td className="capitalize w-24">{product.dob}</Table.Td>
          <Table.Td className="capitalize w-24">{product.address}</Table.Td>
          <Table.Td className="capitalize w-24">{product.branch}</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div
                onClick={open && open}
                className="w-8 h-8 grid place-items-center rounded border-2  border-gray cursor-pointer"
              >
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (productDatas &&
      productDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.category}</Table.Td>
          <Table.Td className="capitalize w-24">{product.sku}</Table.Td>
          <Table.Td className="capitalize w-24">{product.unit}</Table.Td>
          <Table.Td className="capitalize w-24">
            {product.createdByName}
          </Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div className="w-8 h-8 grid place-items-center rounded border-2  border-gray">
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (productCategoryDatas &&
      productCategoryDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.created_on}</Table.Td>
          <Table.Td className="capitalize w-24">{product.status}</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div className="w-8 h-8 grid place-items-center rounded border-2  border-gray">
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (stockInDatas &&
      stockInDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.reference}</Table.Td>
          <Table.Td className="capitalize w-24">{product.supplier}</Table.Td>
          <Table.Td className="capitalize w-24">{product.date}</Table.Td>
          <Table.Td className="capitalize w-24">{product.totalAmount}</Table.Td>
          <Table.Td className="capitalize w-24">{product.totalQty}</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div className="w-8 h-8 grid place-items-center rounded border-2  border-gray">
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (stockOutDatas &&
      stockOutDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.reference}</Table.Td>
          <Table.Td className="capitalize w-24">{product.supplier}</Table.Td>
          <Table.Td className="capitalize w-24">{product.date}</Table.Td>
          <Table.Td className="capitalize w-24">{product.totalAmount}</Table.Td>
          <Table.Td className="capitalize w-24">{product.totalQty}</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div className="w-8 h-8 grid place-items-center rounded border-2  border-gray">
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (cashBookDatas &&
      cashBookDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.branch}</Table.Td>
          <Table.Td className="capitalize w-24">{product.type}</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div
                onClick={open && open}
                className="w-8 h-8 grid place-items-center rounded border-2  border-gray"
              >
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (incomeTypeDatas &&
      incomeTypeDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.description}</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div
                onClick={open && open}
                className="w-8 h-8 grid place-items-center rounded border-2  border-gray"
              >
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (expenseTypeDatas &&
      expenseTypeDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.description}</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div
                onClick={open && open}
                className="w-8 h-8 grid place-items-center rounded border-2  border-gray"
              >
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (cashPaymentVoucherDatas &&
      cashPaymentVoucherDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.date}</Table.Td>
          <Table.Td className="capitalize w-24">{product.amount}</Table.Td>
          <Table.Td className="capitalize w-24">{product.partner}</Table.Td>
          <Table.Td className="capitalize w-24">{product.description}</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div
                onClick={open && open}
                className="w-8 h-8 grid place-items-center rounded border-2  border-gray"
              >
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (cashReceiptVoucherDatas &&
      cashReceiptVoucherDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.date}</Table.Td>
          <Table.Td className="capitalize w-24">{product.amount}</Table.Td>
          <Table.Td className="capitalize w-24">{product.partner}</Table.Td>
          <Table.Td className="capitalize w-24">{product.description}</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div
                onClick={open && open}
                className="w-8 h-8 grid place-items-center rounded border-2  border-gray"
              >
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (debtPaymentVoucherDatas &&
      debtPaymentVoucherDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.date}</Table.Td>
          <Table.Td className="capitalize w-24">{product.amount}</Table.Td>
          <Table.Td className="capitalize w-24">{product.partner}</Table.Td>
          <Table.Td className="capitalize w-24">{product.description}</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div
                onClick={open && open}
                className="w-8 h-8 grid place-items-center rounded border-2  border-gray"
              >
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (debtReceiptVoucherDatas &&
      debtReceiptVoucherDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.date}</Table.Td>
          <Table.Td className="capitalize w-24">{product.amount}</Table.Td>
          <Table.Td className="capitalize w-24">{product.partner}</Table.Td>
          <Table.Td className="capitalize w-24">{product.description}</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div
                onClick={open && open}
                className="w-8 h-8 grid place-items-center rounded border-2  border-gray"
              >
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (customerDatas &&
      customerDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.phone}</Table.Td>
          <Table.Td className="capitalize w-24">{product.email}</Table.Td>
          <Table.Td className="capitalize w-24">{product.gender}</Table.Td>
          <Table.Td className="capitalize w-24">{product.dob}</Table.Td>
          <Table.Td className="capitalize w-24">{product.address}</Table.Td>
          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div
                onClick={open && open}
                className="w-8 h-8 grid place-items-center rounded border-2  border-gray cursor-pointer"
              >
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (discountDatas &&
      discountDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.status}</Table.Td>
          <Table.Td className="capitalize w-24">
            {product.effectiveDate}
          </Table.Td>
          <Table.Td className="capitalize w-24">{product.expiredDate}</Table.Td>
          <Table.Td className="capitalize w-24">{product.limit}</Table.Td>
          <Table.Td className="capitalize w-24">{product.branch}</Table.Td>
          <Table.Td className="capitalize w-24">{product.rate}</Table.Td>
          <Table.Td className="capitalize w-24">{product.amount}</Table.Td>

          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div
                onClick={open && open}
                className="w-8 h-8 grid place-items-center rounded border-2  border-gray cursor-pointer"
              >
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (cashBookReportDatas &&
      cashBookReportDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.code}</Table.Td>
          <Table.Td className="capitalize w-24">{product.name}</Table.Td>
          <Table.Td className="capitalize w-24">{product.date}</Table.Td>
          <Table.Td className="capitalize w-24">
            {product.receiptVoucher}
          </Table.Td>
          <Table.Td className="capitalize w-24">
            {product.paymentVoucher}
          </Table.Td>
          <Table.Td className="capitalize w-24">{product.partner}</Table.Td>
          <Table.Td className="capitalize w-24">{product.description}</Table.Td>
          <Table.Td className="capitalize w-24">
            {product.openingBalance}
          </Table.Td>
          <Table.Td className="capitalize w-24">{product.receipt}</Table.Td>
          <Table.Td className="capitalize w-24">{product.payment}</Table.Td>
          <Table.Td className="capitalize w-24">
            {product.closingBalance}
          </Table.Td>

          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div
                onClick={open && open}
                className="w-8 h-8 grid place-items-center rounded border-2  border-gray cursor-pointer"
              >
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (openingDebtListDatas &&
      openingDebtListDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.from}</Table.Td>
          <Table.Td className="capitalize w-24">{product.partner}</Table.Td>
          <Table.Td className="capitalize w-24">{product.type}</Table.Td>
          <Table.Td className="capitalize w-24">{product.amount}</Table.Td>
          <Table.Td className="capitalize w-24">{product.description}</Table.Td>

          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div
                onClick={open && open}
                className="w-8 h-8 grid place-items-center rounded border-2  border-gray cursor-pointer"
              >
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      ))) ||
    (SalesReportDatas &&
      SalesReportDatas?.map((product) => (
        <Table.Tr key={product.id}>
          <Table.Td className="capitalize w-24">{product.branchCode}</Table.Td>
          <Table.Td className="capitalize w-24">{product.branchName}</Table.Td>
          <Table.Td className="capitalize w-24">{product.date}</Table.Td>
          <Table.Td className="capitalize w-24">{product.billNo}</Table.Td>
          <Table.Td className="capitalize w-24">{product.area}</Table.Td>
          <Table.Td className="capitalize w-24">{product.table}</Table.Td>
          <Table.Td className="capitalize w-24">
            {product.productAmount}
          </Table.Td>
          <Table.Td className="capitalize w-24">{product.discount}</Table.Td>
          <Table.Td className="capitalize w-24">{product.revenue}</Table.Td>

          <Table.Td className="capitalize w-24">
            <div className="flex items-center justify-start gap-x-2">
              <div
                onClick={open && open}
                className="w-8 h-8 grid place-items-center rounded border-2  border-gray cursor-pointer"
              >
                <LuEye />
              </div>
              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <TbEdit />
              </div>

              <div className="w-8 h-8 grid place-items-center rounded border-2 border-gray cursor-pointer">
                <MdDeleteOutline />
              </div>
            </div>
          </Table.Td>
        </Table.Tr>
      )));

  return (
    <div className="border border-gray p-4  rounded-md my-6">
      <div className=" relative grid place-items-center">
        <Input
          placeholder="Search "
          className=" !mt-0 mr-auto rounded-lg  w-1/4"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          rightSectionPointerEvents="all"
          mt="md"
          rightSection={
            <div className=" flex gap-1 pr-2">
              {value && (
                <RxCross2 onClick={() => setValue("")} 
                className=" cursor-pointer text-red-600"/>
              )}
              <BiSearch aria-label="Search" />
            </div>
          }
          
        />
        <Accordion className="!border-none filter">
          <Accordion.Item className="!border-none" value="filter">
            <Accordion.Control className="!bg-transparent !border-none">
              <div className="w-10 h-10 grid place-items-center rounded cursor-pointer bg-btn absolute top-0 right-0">
                <FiFilter size={24} className="" />
              </div>
            </Accordion.Control>
            <Accordion.Panel className="">
              <div className="flex items-center justify-between mt-4 gap-x-12">
                <Select
                  placeholder="Choose Product"
                  data={["React", "Angular", "Vue", "Svelte"]}
                />

                <Select
                  placeholder="Choose Category"
                  data={["React", "Angular", "Vue", "Svelte"]}
                />

                <Select
                  placeholder="Choose Unit"
                  data={["React", "Angular", "Vue", "Svelte"]}
                />

                <Select
                  placeholder="Choose Price"
                  data={["React", "Angular", "Vue", "Svelte"]}
                />

                <Button
                  className="!bg-btn !text-white"
                  leftSection={<IoSearchSharp size={18} />}
                >
                  Search
                </Button>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className=" overflow-auto border-b-2 border-gray pb-2">
        <Table.ScrollContainer minWidth={500}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                {tableTitle.map((title, index) => (
                  <Table.Th className="capitalize" key={index}>
                    {title}
                  </Table.Th>
                ))}

                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </div>

      <div className="mt-4">
        <h6 className="text-sm">1 - 10 items of 10</h6>
      </div>
    </div>
  );
};

export default ListRenderComponent;

 