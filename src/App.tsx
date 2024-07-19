import { useState } from "react";
import googleLogo from "./assets/google.png";
import mac from "./assets/mac.png";
import { Button, Input } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex bg-main-primary w-full h-screen">
        <div className="p-24 w-8/12">
          <div className="flex gap-10 flex-col">
            <span className="text-4xl font-extrabold max-w-100">
              The biggest international and local film streaming
            </span>
            <p className="max-w-96">
              Semper in cursus magna et eu varius nunc adipiscing. Elementum
              justo, laoreet id sem semper parturient.
            </p>
            {/*<img src={mac} className="" />*/}
          </div>
        </div>
        <div className="w-4/12 text-center p-5 px-24 bg-dark-background">
          <span className="font-extrabold">CineMax</span>
          <div className="pt-14">
            <p className="text-3xl font-bold max-w-56 m-auto">
              Hey there, welcome back
            </p>
            <div className="pt-5 gap-5 flex flex-col">
              <button className="bg-line-dark w-full p-3 rounded-2xl flex justify-center">
                <img src={googleLogo} className="w-6 relative mr-3" />
                Login with Google
              </button>
              <Button withIcon variant="line-dark" padding="3">
                <img src={googleLogo} className="w-6 relative mr-3" />
                Login with Facebook
              </Button>

              <button className="bg-line-dark w-full p-3 rounded-2xl flex justify-center"></button>
            </div>
            <div className="flex flex-row pt-5 gap-3">
              <hr className="w-full h-1 border-line-dark relative mt-2" />
              <span className="text-grayscale-70 w-52 text-sm">
                Or login with
              </span>
              <hr className="w-full h-1 border-line-dark relative mt-2" />
            </div>
            <div className="flex flex-col pt-8">
              <label htmlFor="name" className="text-grayscale-70 text-start">
                Full Name
              </label>
              <Input placeholder="Enter Your Name" />
              <label
                htmlFor="pass"
                className="text-grayscale-70 text-start pt-5"
              >
                Password
              </label>
              <Input placeholder="Enter Your Password" />
              <a href="#" className="text-end text-main-primary pt-3">
                Forgot Password
              </a>
              <Button padding="4">Login</Button>
              <span className="mt-3 text-grayscale-60">
                Don't have an account?
                <a href="#" className="text-main-primary ml-1">
                  Register
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
