import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import Fnb from "./Fnb";
import MenuCategory from "./MenuCategory";
import BranchList from "./BranchList";
import Csa from "./Csa";
import PriceTable from "./PriceTable";
import ProductCategory from "./ProductCategory";
import ProductList from "./ProductList";
import IngredientList from "./IngredientList";
import UserRight from "./UserRight";
import UserAccount from "./UserAccount";
import EmployeeList from "./EmployeeList";
import MobileAccount from "./MobileAccount";
import StockIn from "./StockIn";
import StockOut from "./StockOut";
import Customer from "./Customer";
import Discount from "./Discount";
import VoucherPayment from "./VoucherPayment";
import CashBookList from "./CashBookList";
import IncomeType from "./IncomeType";
import ExpenseType from "./ExpenseType";
import CashReceiptVoucher from "./CashReceiptVoucher";
import CashPaymetVoucher from "./CashPaymentVoucher";
import DebtReceiptVoucher from "./DebtReceiptVoucher";
import DebtPaymentVoucher from "./DebtPaymentVoucher";
import CashBookReport from "./CashBookReport";
import OpeningDebtList from "./OpeningDebtList";
import Report from "./Report";
import Pos from "./Pos";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/branches" element={<BranchList />} />

      {/* home */}


      <Route path="/system/fnb" element={<Fnb />} />
      <Route path="/system/menucategory" element={<MenuCategory />} />
      <Route path="/system/customerservice" element={<Csa />} />
      <Route path="/system/pricetable" element={<PriceTable />} />
      <Route path="/system/ingredients" element={<IngredientList />} />
      <Route path="/system/rights" element={<UserRight />} />
      <Route path="/system/accounts" element={<UserAccount />} />
      <Route path="/system/employees" element={<EmployeeList />} />
      <Route path="/system/mobileaccounts" element={<MobileAccount />} />

      {/* home */}



    {/* inventory */}
      
      <Route path="/inventory/productcategories" element={<ProductCategory />} />
      <Route path="/inventory/products" element={<ProductList />} />
      <Route path="/inventory/stockin" element={<StockIn />} />
      <Route path="/inventory/stockout" element={<StockOut />} />

    {/* inventory */}



    {/* crm */}

      <Route path="/crm/customers" element={<Customer />} />
      <Route path="/crm/discounts" element={<Discount />} />
      <Route path="/crm/voucherpayments" element={<VoucherPayment />} />

    {/* crm */}


    {/* finance */}
      <Route path="/finance/cashbooks" element={<CashBookList />} />
      <Route path="/finance/income" element={<IncomeType />} />
      <Route path="/finance/expense" element={<ExpenseType />} />
      <Route path="/finance/cashreceipt" element={<CashReceiptVoucher />} />
      <Route path="/finance/cashpayment" element={<CashPaymetVoucher />} />
      <Route path="/finance/debtreceipt" element={<DebtReceiptVoucher />} />
      <Route path="/finance/debtpayment" element={<DebtPaymentVoucher />} />
      <Route path="/finance/cashbookreport" element={<CashBookReport />} />
      <Route path="/finance/openingdebtlists" element={<OpeningDebtList />} />
    {/* finance */}


    {/* report */}
      <Route path="/salereports" element={<Report />} />
    {/* report */}

      {/* pos */}
      <Route path="/pos" element={<Pos />} />
      {/* pos */}



    </Routes>
  );
};

export default AppRouter;
