import FnbComponent from "./Components/FnbComponent";
import SideNav from "./Components/SideNav";
import TopBar from "./Components/TopBar";

const Fnb = () => {
  return (
    <div className="w-full min-h-screen">
      <TopBar />

      <div className="  flex justify-start items-start">
        <SideNav />

        <FnbComponent />
      </div>
    </div>
  );
};

export default Fnb;
