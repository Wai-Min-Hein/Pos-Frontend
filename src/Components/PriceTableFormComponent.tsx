import {
  Autocomplete,
  Button,
  NumberInput,
  Select,
  Switch,
  Table,
  TextInput,
} from "@mantine/core";
import { HiOutlinePrinter } from "react-icons/hi2";
import { IoMdAddCircleOutline } from "react-icons/io";
import { LuMoveLeft, LuSave } from "react-icons/lu";

import excel from "/images/iconsImage/excel.png";
import details from "/images/iconsImage/details.svg";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "@mantine/form";
import { DateTimePicker } from "@mantine/dates";
import axios from "axios";

const PriceTableFormComponent = () => {
  //all interfaces//

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

  interface areaInterface {
    _id: string;
    name: string;
    code: string;
  }

  interface branchInterface  extends fnbInterface {
    phone: string;
    address: string;
  }

  interface menuPriceInterface {
    menuId: string;
    category: string;
    name: string;
    price: number;
    vat: string;
    disPercent: number;
    disAmount: number;
    adjust: boolean;
  }

  interface priceTableDataInterface {
    name: string;
    code: string;
    area: string;
    branch: string;
    startDate: Date;
    endDate: Date;
    menus: menuPriceInterface[];
  }

  //all interfaces//

  const nav = useNavigate();

  const { id: priceTableId } = useParams();


  //file change frontend state start//

  const [applyPolicy, setApplyPolicy] = useState(true);
  const [detailInfo, setDetailInfo] = useState(false);

  //file change frontend state end//

  //price table form data //

  const [priceTableData, setPriceTableData] =
    useState<priceTableDataInterface>();

  //price table form data //

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      code: "",
      name: "",
      branch: "",
      area: "",
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  //current menu price form data //

  const [menus, setMenus] = useState<menuPriceInterface[]>([]);

  const onFormSubmit = async (values: typeof form.values) => {
    try {
      if (priceTableId != 'new') {
        const { data } = await axios.post(
          `https://pos-t6g7.onrender.com/pricetable/${priceTableId}`,
          {
            ...values,
            menus,
          }
        );

        console.log(data);
      } else {
        const { data } = await axios.post("https://pos-t6g7.onrender.com/pricetable", {
          ...values,
          menus,
        });
        console.log(data);
      }

      toast("Data created successfully");
    } catch (error) {
      toast.error("Cannot create new data");

      console.log(error);
    }
  };

  const getPriceTableData = async () => {
    try {
      const { data } = await axios.get(
        `https://pos-t6g7.onrender.com/pricetable/${priceTableId}`
      );

      setPriceTableData(data.datas);
    } catch (error) {
      toast.error("Cannot get price table data");
    }
  };

  const menuPriceForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      price: 0,
      vat: "0",
      disPercent: 0,
      disAmount: 0,
      adjust: false,
    },
  });

  const [selectedMenu, setSelectedMenu] = useState<fnbInterface | null>();



  const onMenuPriceFormSubmit = (values: typeof menuPriceForm.values) => {
    const isMenuExisted = menus.filter((menu) => menu.name == values.name)[0];
    const otherMenus = menus.filter((menu) => menu.name != values.name);
    if (values.price > 0) {
      if (!isMenuExisted) {
        selectedMenu && setMenus([{...values, menuId: selectedMenu?._id, category: selectedMenu?.category}, ...menus]);

        menuPriceForm.reset();


       


      } else {
        selectedMenu &&  setMenus([{...values,  menuId: selectedMenu?._id, category: selectedMenu?.category}, ...otherMenus]);
        menuPriceForm.reset();
      }
    } else {
      toast.error("Price must be greater than 0");
    }
  };

  const onUpdateMenuPrice = (data: typeof menuPriceForm.values) => {
    menuPriceForm.setValues(data);
  };

  const onDeleteMenuPrice = () => {
    const data = menuPriceForm.getValues();

    const isDataExist = menus.filter((menu) => menu.name == data.name)[0];

    if (isDataExist) {
      const restMenus = menus.filter((menu) => menu.name != data.name);

      setMenus(restMenus);

      menuPriceForm.reset();
    } else {
      toast.error("Data not found to delete");
    }
  };


  //current menu price form data //

  //get all menus datas from backend//

  

  const [fnbMenus, setFnbMenus] = useState<fnbInterface[] | null>();

  const [areas, setAreas] = useState<areaInterface[] | null>()
  const [branches, setBranches] = useState<branchInterface[] | null>()






  const fnbMenusName = fnbMenus?.map((fnb) => fnb.name);
  const areasName = areas?.map((area) => area.name);
  const branchesName = branches?.map((branch) => branch.name);



  

  //   console.log(selectedMenus, 'selected menus');

  const getAllFnbMenus = async () => {
    try {
      const { data } = await axios.get("https://pos-t6g7.onrender.com/fnb");

      setFnbMenus(data.datas);
    } catch (error) {
      toast.error("Cannot get menus data from backend");
    }
  };

  const getAllAreas = async () => {
    try {
      const { data } = await axios.get("https://pos-t6g7.onrender.com/csa");

      setAreas(data.datas);
    } catch (error) {
      toast.error("Cannot get menus data from backend");
    }
  };

  const getAllBranches = async () => {
    try {
      const { data } = await axios.get("https://pos-t6g7.onrender.com/branch");

      setBranches(data.datas);
    } catch (error) {
      toast.error("Cannot get menus data from backend");
    }
  };
  //get all menus datas from backend//

  //useeffects statement//

  useEffect(() => {
    getAllFnbMenus();
    getAllAreas()

    getAllBranches()

   priceTableId!= 'new' && getPriceTableData();
  }, []);

  useEffect(() => {
    priceTableData && setMenus(priceTableData?.menus);
  }, [priceTableData]);

  useMemo(() => {
    //replace form value with pricetable data
    priceTableData && form.setValues(priceTableData);

  }, [priceTableData]);

  //useeffects statement//

  const rows = menus.map((data) => (
    <Table.Tr key={data.name}>
      {/* <Table.Td>{data.category}</Table.Td>
      <Table.Td>{data.code}</Table.Td> */}
      <Table.Td
        onClick={() => onUpdateMenuPrice(data)}
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
    <div className="w-full h-full mt-4 px-6 py-4 overflow-auto">
      <ToastContainer />

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
            type="submit"
            form="price-data-form"
            className="!bg-btn !text-white"
            leftSection={<LuSave size={18} />}
          >
            Save
          </Button>
        </div>
      </div>
      <div className="bg-white py-2 flex items-center justify-start gap-4 px-4">
        <p
          onClick={() => (setDetailInfo(false), setApplyPolicy(true))}
          className={`!bg-transparent !text-darkText  focus:border-none visited:border-none hover:border-none !transition-none cursor-pointer pb-1 ${
            applyPolicy
              ? "!border-b-2 !border-b-btn "
              : "!border-b-2 !border-b-transparent  "
          }`}
        >
          Apply Policy
        </p>
        <p
          onClick={() => (setDetailInfo(true), setApplyPolicy(false))}
          className={`!bg-transparent !text-darkText  focus:border-none hover:border-none !transition-none cursor-pointer pb-1 ${
            detailInfo
              ? "!border-b-2 !border-b-btn "
              : "!border-b-2 !border-b-transparent  "
          }`}
        >
          Products Details Information
        </p>
      </div>

      <div className={`py-2 mt-4 apply-policy ${applyPolicy ? "" : "hidden"}`}>
        <form
          id="price-data-form"
          onSubmit={form.onSubmit((values) => onFormSubmit(values))}
          className="price-table-form"
        >
          <div className="bg-white px-4 py-3 rounded-md">
            <h6>Price Table Informations</h6>
            <div className="flex items-center justify-start gap-4">
              <TextInput
                {...form.getInputProps("code")}
                className={`!border-b-2 border-b-gray !bg-transparent basis-1/4 ${
                  priceTableData?.code ? "" : ""
                }`}
                label="Price table code"
                placeholder=""
              />
              <TextInput
                {...form.getInputProps("name")}
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
                {...form.getInputProps("branch")}
                label="Choose Branch"
                className="basis-1/3"
                placeholder="Choose Branch"
                data={branchesName}
              />

              <Select
                label="Choose Area"
                {...form.getInputProps("area")}
                className="basis-1/3"
                placeholder="Choose Area"
                data={areasName}
              />
            </div>
          </div>

          <div className="my-6 bg-white px-4 py-3 rounded-md">
            <h6>Time of Application</h6>
            <div className="flex items-center justify-start gap-4">
              <DateTimePicker
                {...form.getInputProps("startDate")}
                label="Effective time from"
                className="basis-1/2"
                placeholder="Choose Date"
              />

              <DateTimePicker
                label="Effective time to"
                {...form.getInputProps("endDate")}
                className="basis-1/2"
                placeholder="Choose Date"
              />
            </div>
          </div>
        </form>
      </div>

      <div
        className={`py-2 mt-4 apply-policy overflow-auto w-full bg-white px-4  price-table-form ${
          detailInfo ? "" : "hidden"
        }`}
      >
        <form
          id="menu-price-form"
          action=""
          onSubmit={menuPriceForm.onSubmit((values) =>
            onMenuPriceFormSubmit(values)
          )}
        >
          <Table.ScrollContainer minWidth={500} className="w-[90rem]">
            <Table className="">
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
                      {...menuPriceForm.getInputProps("name")}
                      key={menuPriceForm.key("name")}
                      data={fnbMenusName}

                      onChange={e => {
                        const currentMenu = fnbMenus?.filter(menu => menu.name == e)[0]
                        
                        setSelectedMenu(currentMenu);
                        menuPriceForm.setValues({name: e})
                      }}

                      placeholder="Name"
                    />
                  </Table.Td>

                  <Table.Td>
                    <NumberInput
                      placeholder="Price"
                      {...menuPriceForm.getInputProps("price")}
                      key={menuPriceForm.key("price")}
                      className=""
                    />
                  </Table.Td>

                  <Table.Td>
                    <Select
                      {...menuPriceForm.getInputProps("vat")}
                      key={menuPriceForm.key("vat")}
                      placeholder="VAT"
                      defaultValue={"0"}
                      data={["0", "5", "10", "15", "20"]}
                    />
                  </Table.Td>

                  <Table.Td>
                    <NumberInput
                      {...menuPriceForm.getInputProps("discountPercent")}
                      key={menuPriceForm.key("discountPercent")}
                      placeholder="Discount"
                      className=""
                    />
                  </Table.Td>

                  <Table.Td>
                    <NumberInput
                      {...menuPriceForm.getInputProps("discountAmount")}
                      key={menuPriceForm.key("discountAmount")}
                      placeholder="Discount Amount"
                      className=""
                    />
                  </Table.Td>

                  <Table.Td>
                    <Switch
                      {...menuPriceForm.getInputProps("adjust")}
                      key={menuPriceForm.key("adjust")}
                    />
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Button
                      type="submit"
                      className="!bg-transparent !text-btnDark "
                    >
                      Save
                    </Button>
                  </Table.Td>

                  <Table.Td>
                    <Button
                      onClick={onDeleteMenuPrice}
                      className="!bg-transparent !text-btnDark "
                    >
                      Delete
                    </Button>
                  </Table.Td>
                </Table.Tr>

                {rows}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </form>
      </div>
    </div>
  );
};

export default PriceTableFormComponent;
