import MenuCategoryComponent from "./Components/MenuCategoryComponent"
import SideNav from "./Components/SideNav"

const MenuCategory = () => {
  return (
    <div className="w-screen h-screen flex justify-start items-start ">
        <SideNav/>

        <MenuCategoryComponent/>
    </div>
  )
}

export default MenuCategory