import CashPaymentVoucherComponent from "./Components/CashPaymentVoucherComponent"
import SideNav from "./Components/SideNav"

const CashPaymetVoucher = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>
      <CashPaymentVoucherComponent/>
    </div>
  )
}

export default CashPaymetVoucher