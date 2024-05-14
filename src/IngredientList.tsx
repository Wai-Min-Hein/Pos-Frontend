import IngredientListComponent from "./Components/IngredientListComponent"
import SideNav from "./Components/SideNav"

const IngredientList = () => {
  return (
    <div   className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>
      <IngredientListComponent/>
    </div>
  )
}

export default IngredientList