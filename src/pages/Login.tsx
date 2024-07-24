import googleLogo from "../../public/assets/google.png";
import facebookLogo from "../../public/assets/facebook.png";
import mac from "../../public/assets/mac.png";
import { Button, Input } from "../components";
import "../App.css";

const Login = ({}) => {
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
            <img src={mac} className="w-full" />
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
                <img src={googleLogo} className="w-6 relative mr-3" />
                Login with Google
              </Button>
              <Button
                withIcon
                variant="line-dark"
                buttonstyle="secondary"
                size="large"
              >
                <img src={facebookLogo} className="w-3 relative mr-3" />
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
                />
                <a href="#" className="text-end text-main-primary pt-3">
                  Forgot Password
                </a>
                <Button size="large" buttonstyle="primary">
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
      </div>
    </>
  );
};

export default Login;
