import {
  Autocomplete,
  Button,
  NumberInput,
  Select,
  Switch,
  Table,
  TextInput,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { IoMdAddCircleOutline } from "react-icons/io";
import excel from "/images/iconsImage/excel.png";
import details from "/images/iconsImage/details.svg";
import { HiOutlinePrinter } from "react-icons/hi2";
import { LuMoveLeft, LuSave } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const PriceTableFormComponent1 = () => {

  const nav = useNavigate();

  const [applyPolicy, setApplyPolicy] = useState(true);
  const [detailInfo, setDetailInfo] = useState(false);

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

  interface menuInterface {
    _id: string;
    name: string;
    price: number | string;
    vat: number | string;
    disPercent: number | string;
    disAmount: number | string;
    adjust: boolean;
  }

  interface wholeFormInterface {
    _id: string;
    code: string;
    name: string;
    branch: string;
    area: string;
    startDate: Date | null;
    endDate: Date | null;
    menus: menuInterface[];
  }
  const [formData, setFormData] = useState<menuInterface>({
    _id: "",
    name: "",
    price: 0,
    vat: 0,
    disPercent: 0,
    disAmount: 0,
    adjust: false,
  });
  //to select menu //
  const [fnbDatas, setFnbDatas] = useState<fnbInterface[]>([]);

  
  // const currentFormMenu = fnbDatas.find(fnb => fnb.name == formData.name)


  const fnbNames = fnbDatas.map((fnb) => fnb.name);

  const getFnbDatas = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/fnb");

      setFnbDatas(data.datas);
    } catch (error) {
      toast("Cannot get fnb datas");
    }
  };

  //to select menu //


 




  const [datas, setDatas] = useState<menuInterface[]>([]);

  const handleRowSave = () => {
    const isMenuExisted = datas.filter((data) => data.name == formData.name)[0];
    const otherMenus = datas.filter((data) => data.name != formData.name);

    if (Number(formData.price) > 0) {
      setDatas([...datas, formData]);

      setFormData({
    _id: "",

        name: "",
        price: 0,
        vat: 0,
        disPercent: 0,
        disAmount: 0,
        adjust: false,
      });
    } else {
      toast.error("Price cannot be empty");
    }

    if (isMenuExisted) {
      setDatas([formData, ...otherMenus]);
    }
  };

  const handleRowDel = () => {
    setFormData({
    _id: "",

      name: "",
      price: 0,
      vat: 0,
      disPercent: 0,
      disAmount: 0,
      adjust: false,
    });
  };

  const handleUpdate = (data: menuInterface) => {
    setFormData(data);
  };

  const [wholeFormData, setWholeFormData] = useState<wholeFormInterface>({
    _id: "",

    code: "",
    name: "",
    branch: "",
    area: "",
    startDate: null,
    endDate: null,
    menus: [],
  });
  const handleFileSave = () => {
    setWholeFormData({ ...wholeFormData, menus: datas });
  };

  console.log(wholeFormData);

  useEffect(() => {
    getFnbDatas();
  }, []);

  const rows = datas.map((data) => (
    <Table.Tr key={data.name}>
      {/* <Table.Td>{data.category}</Table.Td>
      <Table.Td>{data.code}</Table.Td> */}
      <Table.Td
        onClick={() => handleUpdate(data)}
        colSpan={3}
        className="cursor-pointer text-blue-500"
      >
        {data.name}
      </Table.Td>
      <Table.Td>{data.price}</Table.Td>
      <Table.Td>{data.vat}</Table.Td>
      <Table.Td>{data.disPercent}</Table.Td>
      <Table.Td>{data.disAmount}</Table.Td>
      <Table.Td>
        <Switch checked={data.adjust} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    
      <div className="w-full mt-4 px-6 py-4 overflow-auto">
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center justify-start gap-2">
          <div className="w-8 h-8">
            <img src={details} className="w-full h-full object-cover" alt="" />
          </div>
          <p>Details information</p>
        </div>

        <div className="flex justify-start items-center gap-4">
          <div className="">
            <img src={excel} alt="" />
          </div>
          <HiOutlinePrinter size={24} />
          <Button
            className="!bg-btn !text-white"
            onClick={() => nav("/system/pricetable/new")}
            leftSection={<IoMdAddCircleOutline size={18} />}
          >
            Add New Area
          </Button>
          <Button
            className="!bg-btn !text-white"
            leftSection={<LuMoveLeft size={18} />}
            onClick={() => nav("/system/pricetable")}
          >
            Skip
          </Button>

          <Button
            onClick={handleFileSave}
            className="!bg-btn !text-white"
            leftSection={<LuSave size={18} />}
          >
            Save
          </Button>
        </div>
      </div>
      <ToastContainer />
      <div className="bg-white py-2">
        <Button
          onClick={() => (setDetailInfo(false), setApplyPolicy(true))}
          className={`!bg-transparent !text-darkText  focus:border-none visited:border-none hover:border-none !transition-none ${
            applyPolicy ? "!border-b-2 !border-b-btn pb-1" : ""
          }`}
        >
          Apply Policy
        </Button>
        <Button
          onClick={() => (setDetailInfo(true), setApplyPolicy(false))}
          className={`!bg-transparent !text-darkText  focus:border-none hover:border-none !transition-none ${
            detailInfo ? "!border-b-2 !border-b-btn pb-1" : ""
          }`}
        >
          Products Details Information
        </Button>
      </div>

      <div className={`py-2 mt-4 apply-policy ${applyPolicy ? "" : "hidden"}`}>
        <form action="" className="price-table-form">
          <div className="bg-white px-4 py-3 rounded-md">
            <h6>Price Table Informations</h6>
            <div className="flex items-center justify-start gap-4">
              <TextInput
                value={wholeFormData.code}
                onChange={(e) =>
                  setWholeFormData({ ...wholeFormData, code: e.target.value })
                }
                className="!border-b border-b-gray !bg-transparent basis-1/4"
                label="Price table code"
                placeholder=""
              />
              <TextInput
                value={wholeFormData.name}
                onChange={(e) =>
                  setWholeFormData({ ...wholeFormData, name: e.target.value })
                }
                className="!border-b border-b-gray !bg-transparent basis-1/4"
                label="Price table name"
                placeholder=""
              />
            </div>
          </div>

          <div className="my-6 bg-white px-4 py-3 rounded-md">
            <h6>Apply at</h6>
            <div className="flex items-center justify-start gap-4">
              <Select
                value={wholeFormData.branch}
                onChange={(e) =>
                  e && setWholeFormData({ ...wholeFormData, branch: e })
                }
                label="Choose Branch"
                className="basis-1/3"
                placeholder="Choose Branch"
                data={["React", "Angular", "Vue", "Svelte"]}
              />

              <Select
                value={wholeFormData.area}
                onChange={(e) =>
                  e && setWholeFormData({ ...wholeFormData, area: e })
                }
                label="Choose Area"
                className="basis-1/3"
                placeholder="Choose Area"
                data={["React", "Angular", "Vue", "Svelte"]}
              />
            </div>
          </div>

          <div className="my-6 bg-white px-4 py-3 rounded-md">
            <h6>Time of Application</h6>
            <div className="flex items-center justify-start gap-4">
              <DateTimePicker
                value={wholeFormData.startDate && wholeFormData.startDate}
                onChange={(e) =>
                  e && setWholeFormData({ ...wholeFormData, startDate: e })
                }
                label="Effective time from"
                className="basis-1/2"
                placeholder="Choose Date"
              />

              <DateTimePicker
                value={wholeFormData.endDate && wholeFormData.endDate}
                onChange={(e) =>
                  e && setWholeFormData({ ...wholeFormData, endDate: e })
                }
                label="Effective time to"
                className="basis-1/2"
                placeholder="Choose Date"
              />
            </div>
          </div>
        </form>
      </div>

      <div
        className={`py-2 mt-4 apply-policy overflow-auto w-full bg-white px-4  ${
          detailInfo ? "" : "hidden"
        }`}
      >
        <Table.ScrollContainer minWidth={500} className="w-[90rem]">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Category</Table.Th>
                <Table.Th>Code</Table.Th>
                <Table.Th className="!w-60">Name</Table.Th>
                <Table.Th>Price</Table.Th>
                <Table.Th>VAT</Table.Th>
                <Table.Th>Discount %</Table.Th>
                <Table.Th>Discount Amount</Table.Th>
                <Table.Th className="!w-32">Allow to adjust</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td colSpan={3}>
                  <Autocomplete
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e })}
                    label="name"
                    placeholder="Name"
                    data={fnbNames}
                  />
                </Table.Td>

                <Table.Td>
                  <NumberInput
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e })}
                    label="Price"
                    className=""
                  />
                </Table.Td>

                <Table.Td>
                  <Select
                    label="VAT"
                    defaultValue={"0"}
                    data={["0", "5", "10", "15", "20"]}
                  />
                </Table.Td>

                <Table.Td>
                  <NumberInput
                    value={formData.disPercent}
                    disabled={Number(formData.disAmount) > 0 ? true : false}
                    onChange={(e) =>
                      setFormData({ ...formData, disPercent: e })
                    }
                    label="Discount"
                    className=""
                  />
                </Table.Td>

                <Table.Td>
                  <NumberInput
                    value={formData.disAmount}
                    disabled={Number(formData.disPercent) > 0 ? true : false}
                    onChange={(e) => setFormData({ ...formData, disAmount: e })}
                    label="Discount Amount"
                    className=""
                  />
                </Table.Td>

                <Table.Td>
                  <Switch
                    onChange={(e) =>
                      setFormData({ ...formData, adjust: e.target.checked })
                    }
                    checked={formData.adjust}
                  />
                </Table.Td>
              </Table.Tr>

              <Table.Tr>
                <Table.Td>
                  <Button
                    onClick={handleRowSave}
                    className="!bg-transparent !text-btnDark hover:border-none"
                  >
                    Save
                  </Button>
                </Table.Td>

                <Table.Td>
                  <Button
                    onClick={handleRowDel}
                    className="!bg-transparent !text-btnDark hover:border-none"
                  >
                    Delete
                  </Button>
                </Table.Td>
              </Table.Tr>

              {rows}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </div>
    </div>

    


    
    
  );
};

export default PriceTableFormComponent1;
