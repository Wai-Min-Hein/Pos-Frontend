import SalesReportComponent from "./Components/SalesReportComponent";
import SideNav from "./Components/SideNav";

const SalesReport = () => {

  return (
    <div className=" w-screen h-screen flex justify-start items-start ">
      <SideNav />

      <SalesReportComponent/>



    </div>
  );
};

export default SalesReport;
