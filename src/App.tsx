import { useState } from "react";
import googleLogo from "./assets/google.png";
import facebookLogo from "./assets/facebook.png";
import mac from "./assets/mac.png";
import { Button, Input } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex bg-main-primary w-full h-screen">
        <div className="p-24 w-7/12">
          <div className="flex gap-10 flex-col">
            <span className="text-4xl font-extrabold max-w-100">
              The biggest international and local film streaming
            </span>
            <p className="max-w-96">
              Semper in cursus magna et eu varius nunc adipiscing. Elementum
              justo, laoreet id sem semper parturient.
            </p>
            <img
              src={mac}
              className="w-max flex self-end relative left-24 top-1"
            />
          </div>
        </div>
        <div className="w-5/12 text-center p-5 px-24 bg-dark-background">
          <span className="font-extrabold">CineMax</span>
          <div className="pt-14">
            <p className="text-3xl font-bold max-w-56 m-auto">
              Hey there, welcome back
            </p>
            <div className="pt-5 gap-5 flex flex-col">
              <Button withIcon variant="line-dark" padding="normal">
                <img src={googleLogo} className="w-6 relative mr-3" />
                Login with Google
              </Button>
              <Button withIcon variant="line-dark" padding="normal">
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
              <Button padding="large" margin="8">
                Login
              </Button>
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
