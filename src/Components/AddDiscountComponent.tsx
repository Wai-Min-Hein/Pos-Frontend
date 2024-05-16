import {
  Accordion,
  Box,
  Button,
  Checkbox,
  Input,
  NumberInput,
  Select,
} from "@mantine/core";
import { LuMoveLeft } from "react-icons/lu";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { DateTimePicker } from "@mantine/dates";
import { useNavigate } from "react-router-dom";

const AddDiscountComponent = () => {
  const nav = useNavigate();

  return (
    <div className="w-full h-full px-8   !overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="">
          <h1>New Discount</h1>
          <p>Add new Discount</p>
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

     

      <div className="my-4 border-2 border-gray p-4 rounded-md">
        <Accordion
          defaultValue={["information", "price", "customer"]}
          multiple={true}
        >
          <Accordion.Item value="information">
            <Accordion.Control className="!bg-transparent !border-none">
              <div className="flex items-center justify-start gap-2">
                <HiOutlineInformationCircle />
                <h6>Discount Information</h6>
              </div>
            </Accordion.Control>
            <Accordion.Panel>
              <Box mx="">
                <form className=" add-fnb-form flex flex-col gap-6">
                  <div className=" flex items-end justify-start gap-x-8 w-full">
                    <Input.Wrapper
                      label="Name"
                      className="basis-1/3 !bg-transparent"
                    >
                      <Input placeholder="Name" />
                    </Input.Wrapper>

                    <Input.Wrapper
                      label="Code"
                      className="basis-1/3 !bg-transparent"
                    >
                      <Input placeholder="Code" />
                    </Input.Wrapper>

                    <Select
                      className="basis-1/3"
                      label="Status"
                      placeholder="Choose"
                      data={["React", "Angular", "Vue", "Svelte"]}
                    />
                  </div>

                  <div className=" flex items-center justify-start gap-x-8 w-full">
                    <DateTimePicker
                      label="Effective Date"
                      placeholder="Expired Date"
                      className="basis-1/3"
                    />
                    <DateTimePicker
                      label="Expired Date"
                      placeholder="Expired Date"
                      className="basis-1/3"
                    />

                    <NumberInput label="Limit" placeholder="Entr Limit" />
                    <Checkbox defaultChecked label="Unlimited" />
                  </div>

                  <div className=" flex items-center justify-start gap-x-8 w-full">
                    <Select
                      className="basis-1/3"
                      label="Branch"
                      placeholder="Choose"
                      data={["React", "Angular", "Vue", "Svelte"]}
                    />

                    <NumberInput
                      label="Discount Rate"
                      className="basis-1/3 !bg-transparent"
                      placeholder="Discount Rate"
                    />

                    <NumberInput
                      label="Discount Amount"
                      className="basis-1/3 !bg-transparent"
                      placeholder="Discount Amount"
                    />
                  </div>
                </form>
              </Box>
            </Accordion.Panel>
          </Accordion.Item>

        </Accordion>

        <div className="flex items-center justify-end my-6 gap-4">
          <Button className="!bg-btnDark !text-white">Cancle</Button>
          <Button className="!bg-btn !text-white">Save product</Button>
        </div>
      </div>
    </div>
  );
};

export default AddDiscountComponent;
