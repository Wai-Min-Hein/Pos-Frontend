import CashBookReportComponent from "./Components/CashBookReportComponent"
import SideNav from "./Components/SideNav"

const CashBookReport = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>
      <CashBookReportComponent/>
    </div>
  )
}

export default CashBookReport