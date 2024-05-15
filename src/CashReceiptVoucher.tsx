import CashReceiptVoucherComponent from "./Components/CashReceiptVoucherComponent"
import SideNav from "./Components/SideNav"

const CashReceiptVoucher = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>
      <CashReceiptVoucherComponent/>
    </div>
  )
}

export default CashReceiptVoucher