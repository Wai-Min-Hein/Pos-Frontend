import {
  Accordion,
  Box,
  Button,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { LuMoveLeft, LuPlusCircle } from "react-icons/lu";
import { HiOutlineInformationCircle } from "react-icons/hi2";

import stockPrice from "../../public/images/iconsImage/stockPrice.svg";
import { MdFormatListBulleted } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { DateTimePicker } from "@mantine/dates";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import axios from "axios";

import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddFnbComponent = () => {
  interface formInterface {
    name: string;
    img?: string;
    category: string;
    description?: string;
    sku: string;
    createdByName?: string;
    createByImage?: string;
    unit: string;
  }

  const [form, setForm] = React.useState<formInterface>({
    name: "",
    sku: "",
    category: "",
    img: "",
    description: "",
    createdByName: "",
    createByImage: "",
    unit: "",
  });

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/fnb", form);

      toast(data.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const nav = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="w-full h-full px-8   !overflow-hidden">

      <div className="flex justify-between items-center">
        <div className="">
          <h1>New product</h1>
          <p>Add new product</p>
        </div>

        <div className="flex justify-start items-center gap-4">
          <Button
            onClick={() => nav("/")}
            className="!bg-btnDark !text-white"
            leftSection={<LuMoveLeft size={18} />}
          >
            Back to product
          </Button>
        </div>
      </div>

      <Modal opened={opened} onClose={close} title="Add New Category" centered>
        <TextInput
          className="!bg-transparent"
          label="Code"
          placeholder="Code"
        />
        <TextInput label="Name" placeholder="Name" />
        <div className="flex justify-end mt-4">
          <Button>Save</Button>
        </div>
      </Modal>

      <div className="my-4 border-2 border-gray p-4 rounded-md">
        <Accordion
          defaultValue={["information", "price", "customer"]}
          multiple={true}
        >
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
                    <TextInput
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="basis-1/3 !bg-transparent"
                      placeholder="Product Name"
                      label="Product Name"
                    />

                    <TextInput
                      onChange={(e) =>
                        setForm({ ...form, sku: e.target.value })
                      }
                      className="basis-1/3 !bg-transparent"
                      placeholder="SKU"
                      label="SKU"
                    />
                  </div>

                  <div className=" flex items-center justify-start gap-x-8 w-full">
                    <div className="relative">
                      <Select
                        onChange={(e) =>
                          setForm({ ...form, category: e ? e : "" })
                        }
                        className="basis-1/3"
                        label="Category"
                        placeholder="Choose"
                        data={["React", "Angular", "Vue", "Svelte"]}
                      />

                      <div
                        onClick={open}
                        className="absolute top-0 right-0 flex items-center justify-start gap-1 cursor-pointer"
                      >
                        <LuPlusCircle size={14} />

                        <span className="text-sm">Add New</span>
                      </div>
                    </div>

                    <Select
                      className="basis-1/3"
                      label="Sub Category"
                      placeholder="Choose"
                      data={["React", "Angular", "Vue", "Svelte"]}
                    />
                  </div>

                  <div className=" flex items-center justify-start gap-x-8 w-full">
                    <TextInput
                      onChange={(e) =>
                        setForm({ ...form, unit: e.target.value })
                      }
                      label={"Unit"}
                      className="basis-1/3 !bg-transparent"
                      placeholder="Unit"
                    />
                  </div>
                  <Textarea
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    label="Description"
                    autosize
                    minRows={6}
                  />
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
                    <DateTimePicker
                      label="Manufacture Date"
                      className="basis-1/3 !bg-transparent"
                      placeholder="Choose date"
                    />
                    <DateTimePicker
                      label="Expired on"
                      className="basis-1/3 !bg-transparent"
                      placeholder="Choose date"
                    />
                  </div>
                </form>
              </Box>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <div className="flex items-center justify-end my-6 gap-4">
          <Button className="!bg-btnDark !text-white">Cancle</Button>
          <Button onClick={handleSubmit} className="!bg-btn !text-white">
            Save product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddFnbComponent;
