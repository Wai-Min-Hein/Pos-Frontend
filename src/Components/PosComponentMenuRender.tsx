import { useDispatch } from "react-redux";
import { addMenus } from "../slice/posOrderSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

interface menusInterface {
    menuId: string;
    name: string;
    price: number;
    vat: string;
    disPercent: number;
    disAmount: number;
    adjust: boolean;
}

interface fnbInterface {
    _id: string;
    name: string;
    price: number;
    category: string;
    sku: string;
    createdByName: string;
    createdByImage: string;
    unit: string;
  }

interface propsInterface {
  menu: menusInterface;
}

const PosComponentMenuRender = ({ menu }: propsInterface) => {



    const [fnb, setFnb] = useState<fnbInterface>()


  const getMenu = async () => {
    try {
      const { data } = await axios.get(`https://pos-t6g7.onrender.com/fnb/${menu.menuId}`);
      setFnb(data.datas);
    } catch (error) {
      toast.error("Cannot get menu");
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  const dispatch = useDispatch();
  return (
    <div
      key={menu.menuId}
      onClick={() => fnb&& dispatch(addMenus({ id: menu?.menuId,code: fnb?.sku,category: fnb.category,name: fnb.name,price: menu.price,  quantity: 1 }))}
      className="bg-white basis-[31%] h-48 rounded-md p-4 cursor-pointer"
    >
      {/* <div className="grid place-items-center w-full">
        <img
          src={fnb?.image}
          alt=""
          className="w-1/5  h-full object-contain "
        />
      </div> */}
      <p className="text-center">{fnb?.category}</p>

      <h6 className="text-center">{menu.name}</h6>
    </div>
  );
};

export default PosComponentMenuRender;
