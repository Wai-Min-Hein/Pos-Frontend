import SideNav from './Components/SideNav'
import InventoryComponent from './Components/InventoryComponent'

const Inventory = () => {
  return (
    <div className=" w-screen h-screen flex justify-start items-start ">
    <SideNav/>

    <InventoryComponent/>

</div>
  )
}

export default Inventory