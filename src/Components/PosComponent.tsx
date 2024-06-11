import { Button, Select } from "@mantine/core";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";
import {
  MdDeleteOutline,
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
} from "react-icons/md";

import category from "../../public/images/iconsImage/category.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { TbUserPlus } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import {
  addMenus,
  increaseMenuQty,
  decreaseMenuQty,
  deleteMenu,
  setPaymentMethod,
  setOrderId,
  setCustomerInfo,
  onOrderConfirm,
} from "../slice/posOrderSlice";
import {  useNavigate, useParams } from "react-router-dom";
import { addOrder } from "../slice/OrderListSlice";

const PosComponent = () => {
  interface menusInterface {
    id: string;
    code: string;
    category: string;
    name: string;
    price: number;
    image: string;
  }

  const menus: menusInterface[] = [
    {
      id: "1",
      category: "phone",
      code: "22",
      name: "i phone 15",
      price: 3000,
      image:
        "https://i.pinimg.com/236x/be/a3/12/bea31296162a1c6d82f7cfa90a14d60b.jpg",
    },
    {
      id: "2",
      category: "laptop",
      code: "333",
      name: "M3 Pro",
      price: 3000,
      image:
        "https://i.pinimg.com/474x/20/97/aa/2097aad744c834823dc24666b428b561.jpg",
    },
    {
      id: "3",
      category: "shoe",
      code: "777",
      name: "Air jordan",
      price: 3000,
      image:
        "https://i.pinimg.com/236x/5f/d1/8e/5fd18eb206cd9aff58b6bc707b776c81.jpg",
    },
    {
      id: "4",
      category: "airpod",
      code: "008",
      name: "air pod",
      price: 3000,
      image:
        "https://i.pinimg.com/236x/5a/e0/c2/5ae0c2a598c1b18ea3cffaa84b0f09c3.jpg",
    },
    {
      id: "5",
      category: "chair",
      code: "9990",
      name: "Gaming chair",
      price: 3000,
      image:
        "https://i.pinimg.com/236x/aa/ca/12/aaca12f1d01952d39ebcfbacc7dbb116.jpg",
    },
  ];


const nav = useNavigate()


  const { tableId } = useParams();

  const [taxPercent, setTaxPercent] = useState<string>("0");
  const [disPercent, setDisPercent] = useState<string>("0");

  const orderList = useAppSelector((state) => state.order);


  const orderedmenus = useAppSelector((state) => state.order.orders);
  const paymentMethod = useAppSelector((state) => state.order.paymentMethod);
  const customer = useAppSelector((state) => state.order.customerInfo);

  const totalMenuQty = orderedmenus?.reduce((pv, cv) => pv + cv.quantity, 0);
  const totalMenuAmount = orderedmenus?.reduce(
    (pv, cv) => pv + cv.price * cv.quantity,
    0
  );

  const tax = totalMenuAmount
    ? totalMenuAmount * (Number(taxPercent) / 100)
    : 0;
  const discount = totalMenuAmount
    ? totalMenuAmount * (Number(disPercent) / 100)
    : 0;

  const grandTotal = totalMenuAmount ? totalMenuAmount + tax - discount : 0;

  const dispatch = useAppDispatch();

  const [menuCategory, setMenuCategory] = useState<menusInterface[]>(menus);

  const filterCategory = (category: string) => {
    if (category == "all") setMenuCategory(menus);
    else {
      const filterDatas = menuCategory.filter(
        (menu) => menu.category === category
      );
      setMenuCategory(filterDatas);
    }
  };

  const printRef = useRef<HTMLDivElement>(null);

  const [showPrintTemplate, setShowPrintTemplate] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  useEffect(() => {
    dispatch(setOrderId(Number(tableId)));

    dispatch(setCustomerInfo("Walkin Customer"));
  }, []);

  return (
    <div className="p-4 w-full">
      <div className="flex items-start justify-between gap-4 mt-6">
        <div className="basis-2/3 w-2/3 bg-transparentBgGreen p-6 rounded-md">
          <div className="mt-6 flex items-center justify-between ">
            <div className="">
              <h6>Categories</h6>
              <p>Select from below categories</p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <div className="w-6 h-6 gird place-items-center rounded-full bg-red-300  cursor-pointer nav-prev">
                <MdOutlineChevronLeft size={24} />
              </div>
              <div className="w-6 h-6 gird place-items-center rounded-full bg-red-300 cursor-pointer nav-next">
                <MdOutlineChevronRight size={24} />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              navigation={{
                prevEl: ".nav-prev",
                nextEl: ".nav-next",
              }}
              modules={[Navigation]}
              loop={true}
            >
              <SwiperSlide>
                <div
                  onClick={() => filterCategory("all")}
                  className="bg-white w-full h-36 rounded-md p-4 cursor-pointer"
                >
                  <div className="grid place-items-center w-full">
                    <img
                      src={category}
                      alt=""
                      className="w-2/5 object-cover "
                    />
                  </div>
                  <h6 className="text-center">All Category</h6>
                  <p className="text-center">38 items</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => filterCategory("shoe")}
                  className="bg-white w-full h-36 rounded-md p-4 cursor-pointer"
                >
                  <div className="grid place-items-center w-full">
                    <img
                      src="https://i.pinimg.com/564x/57/45/7f/57457fa82ffd936e5229d2f710405e0d.jpg"
                      alt=""
                      className="w-2/5 object-cover "
                    />
                  </div>
                  <h6 className="text-center">Shoe</h6>
                  <p className="text-center">8 items</p>
                </div>
              </SwiperSlide>
              <SwiperSlide onClick={() => filterCategory("phone")}>
                <div className="bg-white w-full h-36 rounded-md p-4 cursor-pointer">
                  <div className="grid place-items-center w-full">
                    <img
                      src="https://i.pinimg.com/236x/38/c1/7b/38c17b657fc52cd82c67da0dc15dfa5c.jpg"
                      alt=""
                      className="w-2/5 object-cover "
                    />
                  </div>
                  <h6 className="text-center">Phones</h6>
                  <p className="text-center">5 items</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => filterCategory("laptop")}
                  className="bg-white w-full h-36 rounded-md p-4 cursor-pointer"
                >
                  <div className="grid place-items-center w-full">
                    <img
                      src="https://i.pinimg.com/236x/67/73/29/677329a6828e967aed71eb2e67c90e6d.jpg"
                      alt=""
                      className="w-2/5 object-cover "
                    />
                  </div>
                  <h6 className="text-center">laptops</h6>
                  <p className="text-center">5 items</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => filterCategory("airpod")}
                  className="bg-white w-full h-36 rounded-md p-4 cursor-pointer"
                >
                  <div className="grid place-items-center w-full">
                    <img
                      src="https://i.pinimg.com/474x/bf/41/0d/bf410d8e66283bb6351b240407be5e87.jpg"
                      alt=""
                      className="w-2/5 h-full object-contain "
                    />
                  </div>
                  <h6 className="text-center">Airpods</h6>
                  <p className="text-center">15 items</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => filterCategory("chair")}
                  className="bg-white w-full h-36 rounded-md p-4 cursor-pointer flex flex-col justify-center items-center"
                >
                  <img
                    src="https://i.pinimg.com/236x/b4/dd/b3/b4ddb37ed259d813e6626809da7c3e57.jpg"
                    alt=""
                    className="w-2/5 h-1/2 object-contain "
                  />
                  <h6 className="text-center">Gaming Chairs</h6>
                  <p className="text-center">5 items</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="mt-6">
            <h6>Menus</h6>

            <div className="flex items-center justify-start flex-wrap gap-4 mt-4">
              {menus?.map((menu) => (
                <div
                  key={menu.id}
                  onClick={() => dispatch(addMenus({ ...menu, quantity: 1 }))}
                  className="bg-white basis-[31%] h-48 rounded-md p-4 cursor-pointer"
                >
                  <div className="grid place-items-center w-full">
                    <img
                      src={menu?.image}
                      alt=""
                      className="w-1/5  h-full object-contain "
                    />
                  </div>
                  <p className="text-center">{menu.category}</p>

                  <h6 className="text-center">{menu.name}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" basis-1/3  px-4">
          <div className="">
            <h6>Order List</h6>
            <p>Order id : {tableId}</p>
          </div>

          <div className="">
            <h6>Customer Informations</h6>
            <div className="">
              <div className="flex items-center justify-start gap-4">
                <Select
                  className="flex-1"
                  defaultValue={customer}
                  onChange={(e) => e && dispatch(setCustomerInfo(e))}
                  data={[
                    "Walkin Customer",
                    "React",
                    "Angular",
                    "Vue",
                    "Svelte",
                  ]}
                />
                <div className="w-8 h-8 grid place-items-center cursor-pointer rounded-sm bg-btn">
                  <TbUserPlus className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="addedMenus">
            <div className="flex items-start justify-start gap-2 my-4">
              <h6>Product Added</h6>
              <span className="w-5 h-5 bg-btn rounded-full grid place-items-center text-sm">
                {orderedmenus?.length}
              </span>
            </div>

            <div className="flex flex-col gap-y-6">
              {orderedmenus?.map((menu) => (
                <div
                  key={menu.id}
                  className="flex items-center justify-between gap-3 px-4"
                >
                  <div className="flex items-center justify-start gap-2">
                    <div className="w-12 h-12 rounded-sm">
                      <img
                        src={menu.image}
                        className="w-full h-full object-contain"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <span>{menu.code}</span>
                      <main>{menu.name}</main>
                      <span>{menu.price}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-start gap-2 border border-gray px-2 rounded-md">
                    <LuMinusCircle
                      onClick={() => dispatch(decreaseMenuQty(menu))}
                      className="cursor-pointer select-none"
                    />

                    <span>{menu.quantity}</span>
                    <LuPlusCircle
                      onClick={() => dispatch(increaseMenuQty(menu))}
                      className="cursor-pointer  select-none"
                    />
                  </div>

                  <div className="flex">
                    <Button className="!w-8 !h-8 !p-0  !bg-transparent">
                      <FaRegEdit className=" !text-btn" size={16} />
                    </Button>
                    <Button
                      onClick={() => dispatch(deleteMenu(menu))}
                      className="!w-8 !h-8 !p-0 !bg-transparent "
                    >
                      <MdDeleteOutline className=" !text-red-500" size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-start gap-4">
            <Select
              label="Tax"
              className=""
              defaultValue={taxPercent}
              onChange={(e) => e && setTaxPercent(e)}
              data={["0", "5", "10"]}
            />
            <Select
              label="Discount"
              className=""
              defaultValue={disPercent}
              onChange={(e) => e && setDisPercent(e)}
              data={["0", "5", "10", "15"]}
            />
          </div>

          <div className=" bg-transparentBgGreen px-4 mt-6 flex flex-col gap-y-4">
            <div className="flex  items-center justify-between">
              <h6>Product amount </h6>
              <p>{totalMenuAmount} ks</p>
            </div>

            <div className="flex  items-center justify-between">
              <h6>Total Quantity </h6>
              <p>{totalMenuQty}</p>
            </div>

            <div className="flex  items-center justify-between">
              <h6>Tax(5%) </h6>
              <p>{tax} ks</p>
            </div>

            <div className="flex  items-center justify-between text-red-500">
              <h6 className="text-inherit">Discount </h6>
              <p className="text-inherit">{discount} ks</p>
            </div>

            <div className="flex  items-center justify-between mt-6">
              <h6 className="text-inherit">Total </h6>
              <p className="text-inherit">{grandTotal} ks</p>
            </div>
          </div>

          <div className="mt-6">
            <h6>Payment Methods</h6>

            <div
              className={`mt-4 flex items-center justify-start gap-4 cursor-pointer`}
            >
              <div
                onClick={() => dispatch(setPaymentMethod("cash"))}
                className={`border border-gray rounded-md w-16 h-16 grid place-items-center cursor-pointer  ${
                  paymentMethod == "cash" ? "bg-btn" : ""
                }`}
              >
                <h6>Cash</h6>
              </div>
              <div
                onClick={() => dispatch(setPaymentMethod("kpay"))}
                className={`border border-gray rounded-md w-16 h-16 grid place-items-center cursor-pointer  ${
                  paymentMethod == "kpay" ? "bg-btn" : ""
                }`}
              >
                <h6>Kpay</h6>
              </div>
            </div>
          </div>

          <div className=" mt-6">
            <p className="bg-btnDark text-white px-4 py-2 rounded-md grid place-items-center">
              Grand Total : {grandTotal} ks
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 mt-6">
            <Button
                onClick={() => dispatch(onOrderConfirm(), dispatch(addOrder(orderList)), nav('/pos'))}
              

              className="basis-1/2"
            >
              Confirm Order
            </Button>
            <Button
              onClick={() => (handlePrint(), setShowPrintTemplate(true))}
              className="basis-1/2 !bg-btn"
            >
              Payment
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={printRef}
        className={`bg-transparentBgGreen mt-6 flex flex-col gap-y-4  px-12 py-8 ${
          showPrintTemplate ? "" : "hidden"
        }`}
      >
        <h1 className="text-center text-2xl font-semibold">Ali Pos</h1>

        <div className="flex  items-center justify-between">
          <h6>Address : </h6>
          <p>
            39/22, 2d Floor, Yan Shin Road, Yankin Township, Yangon, Myanmar
          </p>
        </div>
        <div className="flex  items-center justify-between">
          <h6>Product amount </h6>
          <p>{totalMenuAmount} ks</p>
        </div>

        <div className="flex  items-center justify-between">
          <h6>Total Quantity </h6>
          <p>{totalMenuQty}</p>
        </div>

        <div className="flex  items-center justify-between">
          <h6>Tax(5%) </h6>
          <p>{tax} ks</p>
        </div>

        <div className="flex  items-center justify-between text-red-500">
          <h6 className="text-inherit">Discount </h6>
          <p className="text-inherit">{discount} ks</p>
        </div>

        <div className="flex  items-center justify-between mt-6">
          <h6 className="text-inherit">Total </h6>
          <p className="text-inherit">{grandTotal} ks</p>
        </div>
      </div>
    </div>
  );
};

export default PosComponent;
