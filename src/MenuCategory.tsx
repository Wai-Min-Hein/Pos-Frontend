import MenuCategoryComponent from "./Components/MenuCategoryComponent";
import SideNav from "./Components/SideNav";
import TopBar from "./Components/TopBar";

const MenuCategory = () => {
  return (
    <div className="w-full h-screen">
      <TopBar />
      <div className=" flex justify-start items-start ">
        <SideNav />

        <MenuCategoryComponent />
      </div>
    </div>
  );
};

export default MenuCategory;
