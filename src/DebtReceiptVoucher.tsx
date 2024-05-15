import DebtReceiptVoucherComponent from "./Components/DebtReceiptVoucherComponent"
import SideNav from "./Components/SideNav"

const DebtReceiptVoucher = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>
      <DebtReceiptVoucherComponent/>
    </div>
  )
}

export default DebtReceiptVoucher