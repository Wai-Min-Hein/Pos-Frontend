import { Accordion, Button } from "@mantine/core";
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
import { useLocation, useNavigate } from "react-router-dom";

const SideNav = () => {
  interface menuListInterface {
    id: string;
    name: string;
    link?: string;
    lists: {
      name: string;
      icon: string;
      href?: string;
      baseRoute?: boolean;
    }[];
  }
  
  const menuList : menuListInterface[] = [
    {
      id: "system",
  
      name: "System",
      lists: [
        {
          name: "F&B Menu List",
          icon: fnb,
          href: "/",
          baseRoute: true
        },
  
        {
          name: "Menu Category",
          icon: menuCategory,
          href: "/system/menucategory",
  
        },
        {
          name: "Branch List",
          icon: branchList,
          href: "/system/branchlists",
  
        },
  
        {
          name: "Customer Service area",
          icon: csArea,
          href: "/system/customerservice",
  
        },
  
        {
          name: "Price Table ",
          icon: priceTable,
  
          href: "/system/pricetable",
  
        },
  
       
  
        {
          name: "Ingredient List",
          icon: ingredients,
  
          href: "/system/ingredients",
        },
  
        {
          name: "User Rights ",
          icon: userRight,
  
          href: "/system/rights",
        },
  
        {
          name: "User Account ",
          icon: userAccount,
  
          href: "/system/accounts",
        },
  
        {
          name: "Employee List",
          icon: employee,
  
          href: "/system/employees",
        },
  
        {
          name: "Mobile Account",
          icon: mobile,
  
          href: "/system/mobileaccounts",
        },
      ],
    },
  
    {
      id: "inventory",
  
      name: "Inventory",
      link: "/inventory",
      lists: [
        
  
        {
          name: "Product List",
          icon: product,
  
          href: "/inventory/products",
        },
        {
          name: "Product Category",
          icon: productCategory,
  
          href: "/inventory/productcategories",
        },
        {
          name: "Stock In",
          icon: stockIn,
          href: "/inventory/stockin",
  
        },
  
        {
          name: "Stock Out",
          icon: stockOut,
          href: "/inventory/stockout",
  
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
          href: "/crm/customers",
        },
        {
          name: "Discount",
          icon: discount,
          href: "/crm/discounts",
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
          href: "/finance/cashbooks",
        },
  
        {
          name: "Income Type",
          icon: income,
          href: "/finance/income",
        },
        {
          name: "Expense Type",
          icon: expense,
          href: "/finance/expense",
        },
  
        {
          name: "Cash Receipt Voucher",
          icon: cashReceipt,
          href: "/finance/cashreceipt",
        },
  
        {
          name: "Cash Payment Voucher",
          icon: cashPayment,
          href: "/finance/cashpayment",
        },
  
        {
          name: "Debt Receipt Voucher",
          icon: debt,
          href: "/finance/debtreceipt",
        },
  
        {
          name: "Debt Payment Voucher",
          icon: debt,
          href: "/finance/debtpayment",
        },
  
        {
          name: "Cash Book Report",
          icon: cashBookReport,
          href: "/finance/cashbookreport",
        },
        {
          name: "Opening Debt List",
          icon: openingDebtList,
          href: "/finance/openingdebtlists",
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
          href: "/salereports",
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
          href: "/pos",
        },
      ],
    },
  
    
  ];

  const location = useLocation();
  const activeNav: string =
    (location.pathname.includes("system") && 'system') ||
    (location.pathname.includes("crm") && 'crm') ||
    (location.pathname.includes("inventory") && 'inventory') ||
    (location.pathname.includes("finance") && 'finance') ||
    (location.pathname.includes("salereports") && 'analysisReport') ||
    (location.pathname.includes("pos") && 'pos') ||
    'system';

    const navigate = useNavigate();

    const handleLogout = () => { 
      localStorage.removeItem('token'); 
      setTimeout(() => {
        navigate('/login');
      }, 500);
    }

  const menuItems = menuList.map((menu, index) => (
    <Accordion.Item value={menu.id} key={index} className="!border-none !bg-transparent">
      <Accordion.Control>{menu.name}</Accordion.Control>
      <Accordion.Panel>
        <div className="text-sm flex flex-col gap-y-2">
          {menu.lists.map((list, index) => (
            <div
              onClick={() => list.href && navigate(list.href)}
              className={
                list.href && (
                  location.pathname.includes(list.href) && 
                  (!list.baseRoute || location.pathname === '/') 
                  ? 'bg-transparentBgGreen flex items-center justify-start gap-2 basis-[31%] cursor-pointer hover:bg-transparentBgGreen px-2 py-3 rounded-sm' 
                  : 'flex items-center justify-start gap-2 basis-[31%] cursor-pointer hover:bg-transparentBgGreen px-2 py-3 rounded-sm'
                )
              }
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
    <div className="basis-1/5 max-h-screen h-[90vh] overflow-auto bg-white rounded-r-2xl text-gray-500 flex flex-col sticky top-0">
      <Accordion
        chevronPosition="right"
        defaultValue={activeNav}
        variant="contained"
        className="flex-1 overflow-auto"
      >
        {menuItems}
      </Accordion>
      <div className="basis-10 w-full mt-6">
        <Button className="!w-full h-6 !bg-btn !text-[#000]" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default SideNav;



