import { useState } from "react";
import googleLogo from "./assets/google.png";
import LogButton from "./components/login/Button.tsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex bg-main-primary w-full h-full">
        <div className="p-24 w-7/12">
          <div className="flex gap-10 flex-col">
            <span className="text-3xl font-extrabold max-w-96">
              The biggest international and local film streaming
            </span>
            <p className="text-sm max-w-75">
              Semper in cursus magna et eu varius nunc adipiscing. Elementum
              justo, laoreet id sem semper parturient.
            </p>
          </div>
        </div>
        <div className="w-5/12 text-center p-5 px-24 bg-dark-background">
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
              <button className="bg-line-dark w-full p-3 rounded-2xl flex justify-center">
                <img src={googleLogo} className="w-6 relative mr-3" />
                Login with Facebook
              </button>
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
              <input
                type="text"
                id="name"
                className="bg-dark-smooth border-line-dark p-4 rounded-2xl text-grayscale-60"
                placeholder="Enter your name"
              />
              <label
                htmlFor="pass"
                className="text-grayscale-70 text-start pt-5"
              >
                Password
              </label>
              <input
                type="text"
                id="pass"
                className="bg-dark-smooth border-line-dark p-4 rounded-2xl text-grayscale-60"
                placeholder="Enter your password"
              />
              <a href="#" className="text-end text-main-primary pt-3">
                Forgot Password
              </a>
              <LogButton />
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
