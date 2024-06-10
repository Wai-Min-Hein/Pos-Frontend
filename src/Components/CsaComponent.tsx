import { Button, Modal, TextInput } from "@mantine/core";
import ListRenderComponent from "./ListRenderComponent";
import { IoMdAddCircleOutline } from "react-icons/io";

import excel from "../../public/images/iconsImage/excel.png";
import TopBar from "./TopBar";
import { HiOutlinePrinter } from "react-icons/hi2";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const CsaComponent = () => {
  interface csaInterface {
    _id: string;
    code: string;
    name: string;
  }

  interface formInterface {
    name: string;
    code: string;
  }

  const tableTitle: string[] = ["code", "name"];

  const [csaDatas, setCsaDatas] = useState<csaInterface[]>([]);

  const getCsaData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/csa");
      setCsaDatas(data.datas);
    } catch (error) {
      console.log(error);
      toast("Cannot get CSA datas");
    }
  };

  useEffect(() => {
    getCsaData();
  }, []);
  const [opened, { open, close }] = useDisclosure(false);

  const [form, setForm] = useState<formInterface>({ code: "", name: "" });



  const handleUpload = async () => {
    try {
      const res = await axios.post("http://localhost:3000/csa", form);
    getCsaData();


      toast(res.data.message);
      close()

    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast(error.response?.data.message);
      } else {
        toast("cannot upload data");
      }

      
    }
  };

const handleDelete = async (id: string) => {
  try {
    const res = await axios.delete(`http://localhost:3000/csa/${id}`);
    getCsaData();

    toast(res.data.message);


    
  } catch (error) {
    toast("Couldn't connect to server");

    
  }
}


  return (
    <div className="w-full h-full !overflow-hidden">
      <TopBar />
      <ToastContainer />

      <Modal opened={opened} onClose={close} title="Add New Area" centered>
        <TextInput
          onChange={(e) => setForm({ ...form, code: e.target.value })}
          label="Code"
          placeholder="Code"
        />
        <TextInput
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          label="Name"
          placeholder="Name"
        />

        <div className="flex justify-end mt-4">
          <Button onClick={() => handleUpload()}>Save</Button>
        </div>
      </Modal>

      <div className="">
        <div className="flex justify-between items-center">
          <div className="">
            <h1>Customer service area</h1>
            <p>Manage Customer service area</p>
          </div>

          <div className="flex justify-start items-center gap-4">
            <div className="">
              <img src={excel} alt="" />
            </div>
            <HiOutlinePrinter size={24} />
            <Button
              onClick={open}
              className="!bg-btn !text-white"
              leftSection={<IoMdAddCircleOutline size={18} />}
            >
              Add New Area
            </Button>
          </div>
        </div>

        <ListRenderComponent csaDatas={csaDatas} tableTitle={tableTitle} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default CsaComponent;
