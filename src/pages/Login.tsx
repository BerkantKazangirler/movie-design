import { Button, Input } from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

enum LoginLang {
  WrongLogin = "Yanlış İsim / Şifre",
}

const Login = ({}) => {
  if (localStorage.getItem("login") == null) {
    localStorage.setItem("login", "berkant , 12345678");
  }
  function onLogin() {
    if (localStorage.getItem("login") == "") {
      console.log("Boş");
      toast.error(LoginLang.WrongLogin);
      return;
    }
    console.log("Giriş Değerleri " + localStorage.getItem("login"));
  }
  function forgotPassword() {}
  return (
    <>
      <div className="flex bg-main-primary w-full h-screen overflow-y-hidden">
        <div className=" w-1/2">
          <div className="flex flex-col">
            <div className="flex flex-col gap-10 px-24 pt-24">
              <span className="text-4xl font-extrabold max-w-100">
                The biggest international and local film streaming
              </span>
              <p className="max-w-96">
                Semper in cursus magna et eu varius nunc adipiscing. Elementum
                justo, laoreet id sem semper parturient.
              </p>
            </div>
            <img src={"./assets/mac.png"} className="w-full" />
          </div>
        </div>
        <div className="w-1/2 text-center p-5 px-24 bg-dark-background">
          <span className="font-extrabold">CineMax</span>
          <div className="pt-14">
            <p className="text-3xl font-bold max-w-56 m-auto">
              Hey there, welcome back
            </p>
            <div className="pt-5 gap-5 flex flex-col">
              <Button
                withIcon
                variant="line-dark"
                buttonstyle="secondary"
                size="large"
              >
                <img
                  src={"./assets/google.png"}
                  className="w-6 relative mr-3"
                />
                Login with Google
              </Button>
              <Button
                withIcon
                variant="line-dark"
                buttonstyle="secondary"
                size="large"
              >
                <img
                  src={"./assets/facebook.png"}
                  className="w-3 relative mr-3"
                />
                Login with Facebook
              </Button>
            </div>
            <div className="flex flex-row pt-5 gap-3">
              <hr className="w-full h-1 border-line-dark relative mt-2" />
              <span className="text-grayscale-70 w-72 text-sm">
                Or login with
              </span>
              <hr className="w-full h-1 border-line-dark relative mt-2" />
            </div>
            <form
              action=""
              onSubmit={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onLogin();
              }}
            >
              <div className="flex flex-col pt-8">
                <label htmlFor="name" className="text-grayscale-70 text-start">
                  Full Name
                </label>
                <Input
                  placeholder="Enter Your Name"
                  rounded="2xl"
                  maxlength={32}
                  minlength={5}
                  id="name"
                  fontsize="sm"
                />
                <label
                  htmlFor="pass"
                  className="text-grayscale-70 text-start pt-5"
                >
                  Password
                </label>
                <Input
                  id="pass"
                  placeholder="Enter Your Password"
                  rounded="2xl"
                  minlength={5}
                  type="password"
                  fontsize="sm"
                />
                <span
                  className="self-end w-fit text-main-primary pt-3 mb-8 hover:cursor-pointer"
                  onClick={() => forgotPassword()}
                >
                  Forgot Password
                </span>
                <Button size="large" type="submit" buttonstyle="primary">
                  Login
                </Button>
                <span className="mt-3 text-grayscale-60">
                  Don't have an account?
                  <a href="#" className="text-main-primary ml-1">
                    Register
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
