import { Button } from "@mantine/core";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuRefreshCcw } from "react-icons/lu";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

import category from "../../public/images/iconsImage/category.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useState } from "react";
const PosComponent = () => {
    interface menusInterface {
        id: string;
        category: string;
        name: string;
        price:number;
        image: string;
    }
  const menus: menusInterface[] = [
    {
      id: "1",
      category: "phone",
      name: "i phone 15",
      price: 3000,
      image:
        "https://i.pinimg.com/564x/57/45/7f/57457fa82ffd936e5229d2f710405e0d.jpg",
    },
    {
      id: "2",
      category: "laptop",
      name: "i phone 15",
      price: 3000,
      image:
        "https://i.pinimg.com/564x/57/45/7f/57457fa82ffd936e5229d2f710405e0d.jpg",
    },
    {
      id: "3",
      category: "shoe",
      name: "i phone 15",
      price: 3000,
      image:
        "https://i.pinimg.com/564x/57/45/7f/57457fa82ffd936e5229d2f710405e0d.jpg",
    },
    {
      id: "4",
      category: "airpod",
      name: "i phone 15",
      price: 3000,
      image:
        "https://i.pinimg.com/564x/57/45/7f/57457fa82ffd936e5229d2f710405e0d.jpg",
    },
    {
      id: "5",
      category: "chair",
      name: "i phone 15",
      price: 3000,
      image:
        "https://i.pinimg.com/564x/57/45/7f/57457fa82ffd936e5229d2f710405e0d.jpg",
    },
  ];

  const [menuCategory, setMenuCategory] = useState<menusInterface[]>(menus);

  const filterCategory  = (category: string) => {
    if (category == "all") setMenuCategory(menus);
    else {
      const filterDatas = menus.filter((menu) => menu.category === category);
      setMenuCategory(filterDatas);
    }
  };

  return (
    <div className="p-4 w-full">
      <div className="flex flex-row gap-4">
        <Button
          className="!bg-btnDark"
          leftSection={<HiOutlineShoppingCart size={24} />}
        >
          View Order
        </Button>
        <Button className="!bg-btn" leftSection={<LuRefreshCcw size={24} />}>
          Transcation
        </Button>
      </div>

      <div className="flex items-center justify-between gap-2 mt-6">
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
                <div onClick={() => filterCategory('all')} className="bg-white w-full h-36 rounded-md p-4 cursor-pointer">
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
                <div  onClick={() => filterCategory('shoe')} className="bg-white w-full h-36 rounded-md p-4 cursor-pointer">
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
              <SwiperSlide  onClick={() => filterCategory('phone')}>
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
                <div  onClick={() => filterCategory('laptop')} className="bg-white w-full h-36 rounded-md p-4 cursor-pointer">
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
              <SwiperSlide >
                <div  onClick={() => filterCategory('airpod')} className="bg-white w-full h-36 rounded-md p-4 cursor-pointer">
                  <div className="grid place-items-center w-full">
                    <img
                      src="https://i.pinimg.com/474x/bf/41/0d/bf410d8e66283bb6351b240407be5e87.jpg"
                      alt=""
                      className="w-2/5 object-cover "
                    />
                  </div>
                  <h6 className="text-center">Airpods</h6>
                  <p className="text-center">15 items</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div  onClick={() => filterCategory('chair')} className="bg-white w-full h-36 rounded-md p-4 cursor-pointer flex flex-col justify-center items-center">
                  <img
                    src="https://i.pinimg.com/236x/b4/dd/b3/b4ddb37ed259d813e6626809da7c3e57.jpg"
                    alt=""
                    className="w-2/5 h-2/3 object-contain "
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
              {menuCategory.map((menu) => (
                <div
                  key={menu.id}
                  className="bg-white basis-[31%] h-48 rounded-md p-4 cursor-pointer"
                >
                  <div className="grid place-items-center w-full">
                    <img
                      src={menu?.image}
                      alt=""
                      className="w-2/5 object-cover "
                    />
                  </div>
                  <p className="text-center">{menu.category}</p>

                  <h6 className="text-center">{menu.name}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" basis-1/3">
          <h1>test</h1>
        </div>
      </div>
    </div>
  );
};

export default PosComponent;
