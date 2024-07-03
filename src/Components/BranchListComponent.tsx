import { Button, Modal, TextInput } from "@mantine/core";
import ListRenderComponent from "./ListRenderComponent";
import { IoMdAddCircleOutline } from "react-icons/io";

import excel from "../../public/images/iconsImage/excel.png";
import { HiOutlinePrinter } from "react-icons/hi2";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const BranchListComponent = () => {
  interface branchInterface {
    _id: string;
    code: string;
    name: string;
    address?: string;
    phone?: string;
  }

  interface formInterface {
    code: string;
    name: string;
    address?: string;
    phone?: string;
  }

  const tableTitle: string[] = ["code", "name", "address", "phone"];

  const [form, setForm] = useState<formInterface>({
    code: "",
    name: "",
    address: "",
    phone: "",
  });



  const [branchDatas, setBranchDatas] = useState<branchInterface[]>([]);

  const getBranchDatas = async () => {
    try {
      const { data } = await axios.get("https://pos-t6g7.onrender.com/branch");
      setBranchDatas(data.datas);
    } catch (error) {
      console.log(error);
      toast("Cannot get CSA datas");
    }
  };

  const handleUpload = async () => {
    try {
      const res = await axios.post("https://pos-t6g7.onrender.com/branch", form);
      getBranchDatas();

      setForm({ code: "", name: "", address: "", phone: "" });


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

  useEffect(() => {
    getBranchDatas();
  }, []);

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="w-full h-full flex-1   !overflow-hidden">
      <ToastContainer />

      <Modal opened={opened} onClose={close} title="Add New Branch" centered>
        <TextInput
          value={form.code}
          onChange={(e) => setForm({ ...form, code: e.target.value })}
          label="Code"
          placeholder="Code"
        />
        <TextInput
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          label="Name"
          placeholder="Name"
        />
        <TextInput
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          label="Phone"
          placeholder="Phone"
        />
        <TextInput 
         value={form.address}
         onChange={(e) => setForm({ ...form, address: e.target.value })}
        label="Address" placeholder="Address" />

        <div className="flex justify-end mt-4">
          <Button onClick={handleUpload}>Save</Button>
        </div>
      </Modal>

      <div className="">
        <div className="flex justify-between items-center">
          <div className="">
            <h1>Branches</h1>
            <p>Manage Branches</p>
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
              Add New Branch
            </Button>
          </div>
        </div>

        <ListRenderComponent
          branchDatas={branchDatas}
          tableTitle={tableTitle}
        />
      </div>
    </div>
  );
};

export default BranchListComponent;
