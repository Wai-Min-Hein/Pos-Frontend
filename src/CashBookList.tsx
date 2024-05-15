import CashBookListComponent from "./Components/CashBookListComponent"
import SideNav from "./Components/SideNav"

const CashBookList = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>
      <CashBookListComponent/>
    </div>
  )
}

export default CashBookList