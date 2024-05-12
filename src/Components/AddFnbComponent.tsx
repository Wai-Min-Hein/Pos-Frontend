import { Accordion, Box, Button, Select, Textarea } from "@mantine/core";
import TopBar from "./TopBar";
import { LuMoveLeft, LuPlusCircle } from "react-icons/lu";
import { HiOutlineInformationCircle } from "react-icons/hi2";

import stockPrice from "../../public/images/iconsImage/stockPrice.svg";
import { MdFormatListBulleted } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { DateTimePicker } from "@mantine/dates";
import { useNavigate } from "react-router-dom";

const AddFnbComponent = () => {

    const nav = useNavigate()
  return (
    <div className="w-full h-full px-8   !overflow-hidden">
      <TopBar />

      <div className="flex justify-between items-center">
        <div className="">
          <h1>New product</h1>
          <p>Add new product</p>
        </div>

        <div className="flex justify-start items-center gap-4">
          <Button
          onClick={() => nav('/')}
            className="!bg-btnDark !text-white"
            leftSection={<LuMoveLeft size={18} />}
          >
            Back to product
          </Button>
        </div>
      </div>

      <div className="my-4 border-2 border-gray p-4 rounded-md">
        <Accordion defaultValue={["information" , "price", "customer"]} multiple={true}>
          <Accordion.Item value="information">
            <Accordion.Control className="!bg-transparent !border-none">
              <div className="flex items-center justify-start gap-2">
                <HiOutlineInformationCircle />
                <h6>Product Information</h6>
              </div>
            </Accordion.Control>
            <Accordion.Panel>
              <Box mx="">
                <form className=" add-fnb-form flex flex-col gap-6">
                  <div className=" flex items-center justify-start gap-x-8 w-full">
                    <Select
                      label="Product Name"
                      className="basis-1/3 !bg-transparent"
                      placeholder="Choose"
                      data={["React", "Angular", "Vue", "Svelte"]}
                    />
                    <Select
                      className="basis-1/3"
                      label="SKU"
                      placeholder="Choose"
                      data={["React", "Angular", "Vue", "Svelte"]}
                    />
                  </div>

                  <div className=" flex items-center justify-start gap-x-8 w-full">
                    <Select
                      label={"Category"}
                      className="basis-1/3 !bg-transparent"
                      placeholder="Choose"
                      data={["React", "Angular", "Vue", "Svelte"]}
                    />
                    <Select
                      className="basis-1/3"
                      label="Sub Category"
                      placeholder="Choose"
                      data={["React", "Angular", "Vue", "Svelte"]}
                    />
                  </div>

                  <div className=" flex items-center justify-start gap-x-8 w-full">
                    <Select
                      label={"Unit"}
                      className="basis-1/3 !bg-transparent"
                      placeholder="Choose"
                      data={["React", "Angular", "Vue", "Svelte"]}
                    />
                    <Select
                      className="basis-1/3"
                      label="Price"
                      placeholder="Choose"
                      data={["React", "Angular", "Vue", "Svelte"]}
                    />
                  </div>
                  <Textarea label="Description" autosize minRows={6} />
                </form>
              </Box>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="price">
            <Accordion.Control className="!bg-transparent !border-none">
              <div className="">
                <div className="flex items-center justify-start gap-2">
                  <img src={stockPrice} className="w-4 h-4" alt="" />
                  <h6>Pricing Stock</h6>
                </div>

                
              </div>
            </Accordion.Control>
            <Accordion.Panel>

                <div className="">
                    
              <div className="flex items-center justify-start gap-2">
                <CiImageOn />
                <h6>Image</h6>
              </div>

              <div className="flex items-center justify-start gap-3 mt-4">
                <div className="w-32 h-36 border-2 border-gray grid place-items-center rounded-md">
                    <div className="grid place-items-center">
                      <LuPlusCircle />
                      <p>image</p>
                    </div>
                  </div>
                  

                  <div className="w-32 h-36 border-2 border-gray flex items-center justify-center rounded-md  relative">
                    <img
                      src="https://i.pinimg.com/236x/be/a3/12/bea31296162a1c6d82f7cfa90a14d60b.jpg"
                      className="object-contain w-4/5 h-4/5"
                      alt=""
                    />
                    <div className="w-6 h-6 rounded bg-red-500 absolute -right-2 -top-2 grid place-items-center">
                      <RxCross2 />
                    </div>
                  </div>

                  


                </div>

                
                </div>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="customer">
            <Accordion.Control className="!bg-transparent !border-none">
              <div className="flex items-center justify-start gap-2">
                <MdFormatListBulleted />
                <h6>Customer field</h6>
              </div>
            </Accordion.Control>
            <Accordion.Panel>
            <Box mx="">
                <form className=" add-fnb-form flex flex-col gap-6">
                  <div className=" flex items-center justify-start gap-x-8 w-full">
                  
                    <DateTimePicker label="Manufacture Date" className="basis-1/3 !bg-transparent" placeholder="Choose date" />
                    <DateTimePicker label="Expired on" className="basis-1/3 !bg-transparent" placeholder="Choose date" />
                  </div>

                 

                
                </form>
              </Box>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <div className="flex items-center justify-end my-6 gap-4">
            <Button  className="!bg-btnDark !text-white">Cancle</Button>
            <Button  className="!bg-btn !text-white">Save product</Button>
        </div>
      </div>
    </div>
  );
};

export default AddFnbComponent;
