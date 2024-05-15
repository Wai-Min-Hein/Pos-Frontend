
import DebtPaymentVoucherComponent from "./Components/DebtPaymentVoucherComponent"
import SideNav from "./Components/SideNav"

const DebtPaymentVoucher = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>
      <DebtPaymentVoucherComponent/>
    </div>
  )
}

export default DebtPaymentVoucher