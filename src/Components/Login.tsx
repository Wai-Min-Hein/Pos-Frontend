import React from "react";
import login from "/images/login.svg";
import fav from "/images/favicon.png";

import {
  TextInput,
  Button,
  Group,
  Box,
  PasswordInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const Login = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Password must have at least 6 letters" : null,
    },
  });

  return (
    <div className="container mx-auto w-screen h-screen bg-green-600 grid place-items-center">
      <div className="w-3/4 h-4/5 border-8 border-black rounded-xl flex items-start justify-between px-4 py-6 gap-12">
        <div className=" basis-1/2 w-full h-full object-contain  ">
          <img src={login} alt="login svg avator" />
        </div>

        <div className="basis-1/2 flex items-center flex-col h-full   bg-white rounded-lg text-black py-6 px-4">
          <div className="flex items-center justify-start gap-2">
            <div className="w-8 h-8">
              <img src={fav} className="w-full h-full object-cover" alt="" />
            </div>
            <h6>Ali Pos</h6>
          </div>

          <h6>Login to your account</h6>

          <Box className="!w-full flex-1" maw={340} mx="auto">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                key={form.key("email")}
                {...form.getInputProps("email")}
              />

              <PasswordInput
                label="Password"
                placeholder="Password"
                key={form.key("password")}
                {...form.getInputProps("password")}
              />

              <Group justify="flex-end" mt="md">
                <Button className="!w-full" type="submit">
                  Submit
                </Button>
              </Group>
            </form>
          </Box>

          <p className="">By loggin to our system you agree to Alipos's <span className="text- text-green-500 cursor-pointer">Term and Services</span>  and <span className="text-green-500 cursor-pointer ">privacy policy</span> .</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
