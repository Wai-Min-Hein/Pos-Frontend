import { Accordion, Button } from "@mantine/core";
import fav from "/images/logo.png";
import csArea from "/images/iconsImage/csArea.png";
import branchList from "/images/iconsImage/branch.png";
import menuCategory from "/images/iconsImage/menu.png";
import fnb from "/images/iconsImage/fnb.png";
import priceTable from "/images/iconsImage/priceTable.png";
import productCategory from "/images/iconsImage/productCategory.png";
import product from "/images/iconsImage/product.png";
import ingredients from "/images/iconsImage/ingredients.png";
import userAccount from "/images/iconsImage/userAccount.png";
import userRight from "/images/iconsImage/userRight.png";
import employee from "/images/iconsImage/employee.png";
import mobile from "/images/iconsImage/mobile.png";
import stockIn from "/images/iconsImage/stockIn.png";
import stockOut from "/images/iconsImage/stockOut.png";
import customer from "/images/iconsImage/customer.svg";
import discount from "/images/iconsImage/discount.svg";
import voucherPayment from "/images/iconsImage/voucherPayment.png";

import cashBookList from "/images/iconsImage/cashBookList.svg";

import income from "/images/iconsImage/income.svg";
import expense from "/images/iconsImage/expense.svg";

import cashReceipt from "/images/iconsImage/cashReceipt.svg";
import cashPayment from "/images/iconsImage/cashPayment.svg";

import debt from "/images/iconsImage/debt.svg";

import cashBookReport from "/images/iconsImage/cashReport.svg";
import openingDebtList from "/images/iconsImage/openingDebtList.png";

import analysisReport from "/images/iconsImage/analysisReport.svg";

import pos from "/images/iconsImage/posRestaurant.svg";

const SideNav = () => {
  const menuList = [
    {
      id: "home",

      name: "Home",
      link: "/",
      lists: [
        {
          name: "Customer Service area",
          icon: csArea,
        },
        {
          name: "Branch List",
          icon: branchList,
        },
        {
          name: "Menu Category",
          icon: menuCategory,
        },

        {
          name: "F&B Menu List",
          icon: fnb,
        },

        {
          name: "Price Table ",
          icon: priceTable,
        },

        {
          name: "Product Category",
          icon: productCategory,
        },

        {
          name: "Product List",
          icon: product,
        },

        {
          name: "Ingredient List",
          icon: ingredients,
        },

        {
          name: "User Rights ",
          icon: userRight,
        },

        {
          name: "User Account ",
          icon: userAccount,
        },

        {
          name: "Employee List",
          icon: employee,
        },

        {
          name: "Mobile Account",
          icon: mobile,
        },
      ],
    },

    {
      id: "inventory",

      name: "Inventory",
      link: "/inventory",
      lists: [
        {
          name: "Product Category",
          icon: productCategory,
        },

        {
          name: "Product List",
          icon: product,
        },
        {
          name: "Stock In",
          icon: stockIn,
        },

        {
          name: "Stock Out",
          icon: stockOut,
        },
      ],
    },

    {
      id: "crm",

      name: "CRM",
      link: "/crm",
      lists: [
        {
          name: "Customer",
          icon: customer,
        },
        {
          name: "Discount",
          icon: discount,
        },

        {
          name: "Voucher Payment",
          icon: voucherPayment,
        },
      ],
    },

    {
      id: "finance",

      name: "Finance",
      link: "/finance",
      lists: [
        {
          name: "Cash book list",
          icon: cashBookList,
        },

        {
          name: "Income Type",
          icon: income,
        },
        {
          name: "Expense Type",
          icon: expense,
        },

        {
          name: "Cash Receipt Voucher",
          icon: cashReceipt,
        },

        {
          name: "Cash Payment Voucher",
          icon: cashPayment,
        },

        {
          name: "Debt Receipt Voucher",
          icon: debt,
        },

        {
          name: "Debt Payment Voucher",
          icon: debt,
        },

        {
          name: "Cash Book Report",
          icon: cashBookReport,
        },
        {
          name: "Opening Debt List",
          icon: openingDebtList,
        },
      ],
    },

    {
      id: "analysisReport",

      name: "Analysis Report",
      link: "/report",
      lists: [
        {
          name: "Sales Report",
          icon: analysisReport,
        },
      ],
    },

    {
      id: "pos",

      name: "Point of Sale",
      link: "/pos",
      lists: [
        {
          name: "Point of Sale",
          icon: pos,
        },
      ],
    },
  ];

  const menuItems = menuList.map((menu, index) => (
    <Accordion.Item value={menu.id} key={index} className="!border-none">
      <Accordion.Control>{menu.name}</Accordion.Control>
      <Accordion.Panel>
        <div className="text-sm flex flex-col gap-y-4">
          {menu.lists.map((list, index) => (
            <div
              className="flex items-center justify-start gap-2 basis-[31%] cursor-pointer"
              key={index}
            >
              <img src={list.icon} className="w-6 h-6" alt="" />
              <h4>{list.name}</h4>
            </div>
          ))}
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <div className="basis-[20%] h-screen py-3 px-6 bg-white rounded-r-2xl text-gray-500 flex flex-col ">
      <div className="flex justify-start items-center gap-2">
        <div className="">
          <img src={fav} className="w-24 h-12 object-contain" alt="" />
        </div>
        <h4>Ali Pos</h4>
      </div>

      <Accordion
        chevronPosition="right"
        variant="contained"
        className="flex-1 mt-6 overflow-auto"
      >
        {menuItems}
      </Accordion>
      <div className="basis-10 w-full mt-6">
        <Button className="!w-full h-6">Logout</Button>
      </div>
    </div>
  );
};

export default SideNav;

// <nav className="mt-12 flex-1">
//         <ul className="flex flex-col gap-4">

//           <Link to={"/"}>
//             <li className="bg-[rgba(255,255,255,0.50)]  rounded-lg px-1 py-2 cursor-pointer">
//             Home
//             </li>
//           </Link>
//           <Link to={"/pos"}>
//             <li className="bg-[rgba(255,255,255,0.50)]  rounded-lg px-1 py-2 cursor-pointer">
//               Pos
//             </li>
//           </Link>

//           <Link to={"/crm"}>
//             <li className="bg-[rgba(255,255,255,0.50)]  rounded-lg px-1 py-2 cursor-pointer">
//               CRM
//             </li>
//           </Link>

//           <Link to={"/inventory"}>
//             <li className="bg-[rgba(255,255,255,0.50)]  rounded-lg px-1 py-2 cursor-pointer">
//               Inventory
//             </li>
//           </Link>

//           {/* <Link to={"/hrm"}>
//             <li className="bg-[rgba(255,255,255,0.50)]  rounded-lg px-1 py-2 cursor-pointer">
//               HRM
//             </li>
//           </Link> */}
//           <Link to={"/finance"}>
//             <li className="bg-[rgba(255,255,255,0.50)]  rounded-lg px-1 py-2 cursor-pointer">
//               Finance
//             </li>
//           </Link>
//           <Link to={"/report"}>
//             <li className="bg-[rgba(255,255,255,0.50)]  rounded-lg px-1 py-2 cursor-pointer">
//               Analysis Report
//             </li>
//           </Link>
//         </ul>
//       </nav>
