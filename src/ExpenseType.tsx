import ExpenseTypeComponent from "./Components/ExpenseTypeComponent"
import SideNav from "./Components/SideNav"

const ExpenseType = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>

      <ExpenseTypeComponent/>
    </div>
  )
}

export default ExpenseType