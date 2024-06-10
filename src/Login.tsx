import { useState } from "react";
import { TextInput, Button, Group, Box, PasswordInput, Notification } from "@mantine/core";
import { useForm, UseFormReturnType } from "@mantine/form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "./slice/currentUser";
import { useNavigate } from "react-router-dom";
import login from "/images/login.svg";
import fav from "/images/favicon.png";

interface FormValues {
  email: string;
  password: string;
}

interface NotificationState {
  show: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [notification, setNotification] = useState<NotificationState>({ show: false, message: '', type: 'success' });

  const form: UseFormReturnType<FormValues> = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Password must have at least 6 letters" : null,
    },
  });

  const handleLogin = async (values: FormValues) => {
    dispatch(signInStart());
    try {
      const response = await axios.post("https://pos-t6g7.onrender.com/auth/signIn", values);
      // console.log(response);
      

      localStorage.setItem('token', response.data.token);
      // localStorage.setItem('user', JSON.stringify(response.data.user));

      showNotification('Login successful!', 'success');
      dispatch(signInSuccess(response.data.token));
      navigate("/");
    } catch (error) {
      if(axios.isAxiosError(error)){
        showNotification('Login failed!', 'error');
        dispatch(signInFailure(error.message));
      }
      
    }
  };

  const handleSubmit = (values: FormValues) => {
    handleLogin(values);
  };

  const showNotification = (message: string, type: 'success' | 'error' | 'info') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'success' });
    }, 1000);
  };

  return (
    <div className="w-screen h-screen max-h-screen pt-9 bg-blue-500 grid place-items-center">
      {notification.show && (
        <div className="absolute top-4 right-4">
          <Notification color={notification.type === 'success' ? 'green' : notification.type === 'error' ? 'red' : 'blue'}>
            {notification.message}
          </Notification>
        </div>
      )}
      <div className="w-3/4 h-4/5 border-4 border-gray rounded-xl flex items-start justify-between px-4 py-6 gap-12">
        <div className="basis-1/2 w-full h-full object-contain">
          <img src={login} alt="login svg avatar" />
        </div>
        <div className="basis-1/2 flex items-center flex-col h-full bg-white rounded-lg text-black py-6 px-4">
          <div className="flex items-center justify-start gap-2">
            <div className="w-8 h-8">
              <img src={fav} className="w-full h-full object-cover" alt="" />
            </div>
            <h6>Ali Pos</h6>
          </div>
          <h6>Login to your account</h6>
          <Box className="!w-full flex-1" maw={340} mx="auto">
            <form onSubmit={form.onSubmit(handleSubmit)}>
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
                  Login
                </Button>
              </Group>
            </form>
            <p className="mt-4">
              By logging in you agree to Ali Pos's{" "}
              <span className="text-green-500 cursor-pointer">Terms and Services</span> and{" "}
              <span className="text-green-500 cursor-pointer">privacy policy</span>.
            </p>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login;
