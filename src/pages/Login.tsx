import { useState, useEffect } from "react";
import { Button, Input } from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

enum LoginLang {
  WrongLogin = "Yanlış İsim / Şifre",
}

const Login = ({}) => {
  let local = localStorage.getItem("darkMode");

  useEffect(() => {
    if (local == "on") {
      document.body.classList.toggle("dark");
      return;
    }
  }, []);

  const [name, SetName] = useState("");

  if (localStorage.getItem("login") == null) {
    localStorage.setItem("login", "berkant");
  }

  if (localStorage.getItem("darkMode") == null) {
    localStorage.setItem("darkMode", "false");
  }

  function onLogin() {
    if (localStorage.getItem("login") == "") {
      console.log("Boş");
      toast.error(LoginLang.WrongLogin);
      return;
    }

    console.log(name);

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
            <img
              src={`./assets/${local ? "mac" : "mac-white"}.svg`}
              className="w-full"
            />
          </div>
        </div>
        <div className="w-1/2 text-center p-5 px-24 dark:bg-dark-background bg-light-background">
          <span className="font-extrabold dark:text-white text-black">
            CineMax
          </span>
          <div className="pt-14">
            <p className="text-3xl font-bold max-w-56 m-auto dark:text-white text-black">
              Hey there, welcome back
            </p>
            <div className="pt-5 gap-5 flex flex-col">
              <Button
                withIcon
                variant="line-dark"
                buttonstyle="secondary"
                size="large"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 relative mr-3"
                >
                  <g clip-path="url(#clip0_2218_187)">
                    <g clip-path="url(#clip1_2218_187)">
                      <path
                        d="M23.8072 10.141C23.9139 10.141 24.0003 10.2275 24.0003 10.3342V12.3623C24.0003 13.1214 23.9298 13.8636 23.7946 14.5836C22.7485 20.1762 17.8215 24.4027 11.9157 24.362C5.28907 24.3163 -0.0142753 18.962 0.00039658 12.3353C0.0149747 5.7204 5.38207 0.362305 12.0003 0.362305C15.2428 0.362305 18.1848 1.64865 20.3448 3.73815C20.4228 3.81357 20.4248 3.93788 20.348 4.01457L17.4788 6.88384C17.4049 6.95771 17.2856 6.95963 17.2098 6.88759C15.8542 5.59716 14.02 4.80493 12.0003 4.80493C7.82983 4.80493 4.47147 8.13943 4.44316 12.3099C4.41471 16.5076 7.80921 19.9196 12.0003 19.9196C15.4009 19.9196 18.2771 17.6732 19.2255 14.5836H12.1935C12.0868 14.5836 12.0003 14.4971 12.0003 14.3904V10.3341C12.0003 10.2274 12.0868 10.1409 12.1935 10.1409H23.8072V10.141Z"
                        fill="#2196F3"
                      />
                      <path
                        d="M23.8066 10.141H22.3579C22.4646 10.141 22.5511 10.2275 22.5511 10.3342V12.3623C22.5511 13.1214 22.4806 13.8636 22.3454 14.5836C21.3473 19.919 16.8171 24.011 11.2747 24.3406C11.4867 24.3532 11.7002 24.3605 11.9152 24.362C17.8209 24.4027 22.7479 20.1762 23.794 14.5836C23.9293 13.8636 23.9998 13.1214 23.9998 12.3623V10.3341C23.9998 10.2275 23.9133 10.141 23.8066 10.141Z"
                        fill="#1E88E5"
                      />
                      <path
                        d="M5.13614 9.1974L1.4917 6.56415C3.53629 2.86613 7.47623 0.362305 12.0005 0.362305C15.243 0.362305 18.185 1.64865 20.3449 3.73815C20.4229 3.81357 20.4249 3.93788 20.3482 4.01457L17.4789 6.88384C17.4052 6.95757 17.2859 6.95987 17.2103 6.88796C15.8547 5.5973 14.0203 4.80498 12.0005 4.80498C8.95682 4.80498 6.33323 6.60423 5.13614 9.1974Z"
                        fill="#F44336"
                      />
                      <path
                        d="M4.08325 8.43725L5.13536 9.19742C6.22802 6.83051 8.50933 5.12585 11.2135 4.84624C11.2339 4.84404 11.2534 4.84137 11.2742 4.8394C11.0362 4.81681 10.795 4.80499 10.5511 4.80499C7.80152 4.80499 5.40527 6.25451 4.08325 8.43725Z"
                        fill="#E53935"
                      />
                      <path
                        d="M18.8958 3.73815C18.9738 3.81357 18.9758 3.93788 18.8991 4.01462L16.5702 6.34351C16.7933 6.5132 17.0069 6.6947 17.2096 6.88763C17.2852 6.95968 17.4046 6.95776 17.4785 6.88388L20.3478 4.01462C20.4245 3.93788 20.4224 3.81362 20.3445 3.73815C18.1845 1.64865 15.2426 0.362305 12.0001 0.362305C11.7568 0.362305 11.5154 0.370414 11.2756 0.384711C14.2306 0.560727 16.8979 1.8054 18.8958 3.73815Z"
                        fill="#E53935"
                      />
                      <path
                        d="M20.8023 20.5175C18.6109 22.8822 15.4779 24.3623 11.9996 24.3623C7.3015 24.3623 3.23406 21.6625 1.26428 17.7292L4.98499 15.1795C6.1015 17.9576 8.82166 19.9196 11.9996 19.9196C13.9939 19.9196 15.8077 19.147 17.1579 17.8847L20.8023 20.5175Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M4.98522 15.1796L3.88806 15.9314C5.16236 18.3053 7.66825 19.9197 10.5511 19.9197C10.7949 19.9197 11.0359 19.9077 11.2738 19.8852C8.41211 19.6123 6.01562 17.7436 4.98522 15.1796Z"
                        fill="#43A047"
                      />
                      <path
                        d="M12.0001 24.3623C15.4784 24.3623 18.6115 22.8822 20.8029 20.5175L19.9102 19.8726C17.8526 22.4334 14.7659 24.1322 11.2776 24.3405C11.5167 24.3547 11.7575 24.3623 12.0001 24.3623Z"
                        fill="#43A047"
                      />
                      <path
                        d="M4.44267 12.3623C4.44267 13.358 4.63533 14.3089 4.98544 15.1795L1.26469 17.7292C0.455391 16.1144 0 14.2915 0 12.3623C0 10.2593 0.540844 8.28277 1.49119 6.56415L5.13562 9.1974C4.69088 10.1598 4.44267 11.2323 4.44267 12.3623Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M3.88834 15.9314L4.98549 15.1795C4.63538 14.3089 4.44273 13.358 4.44273 12.3623C4.44273 11.2323 4.69093 10.1598 5.13568 9.19737L4.08357 8.43719C3.40037 9.56524 3.00385 10.8889 2.9942 12.3099C2.98529 13.6202 3.30999 14.854 3.88834 15.9314Z"
                        fill="#FFB300"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_2218_187">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_2218_187">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.362305)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Login with Google
              </Button>
              <Button
                withIcon
                variant="line-dark"
                buttonstyle="secondary"
                size="large"
              >
                <svg
                  width="11"
                  height="25"
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative mr-3"
                >
                  <path
                    d="M3.20491 11.2398C3.12955 11.2398 1.54867 11.2403 0.819549 11.2396C0.444189 11.2394 0.310269 11.1045 0.310269 10.7267C0.309789 9.75639 0.309549 8.78607 0.310269 7.81575C0.310509 7.44279 0.452109 7.30047 0.822669 7.30023C1.55179 7.29975 3.12403 7.29999 3.20491 7.29999C3.20491 7.23351 3.20467 5.83263 3.20491 5.18751C3.20539 4.23375 3.37555 3.32079 3.86011 2.48487C4.35619 1.62927 5.07811 1.04319 6.00331 0.704309C6.59587 0.487109 7.21099 0.400469 7.83979 0.399989C8.62651 0.399509 9.41323 0.400229 10.2002 0.401669C10.5383 0.402149 10.6883 0.551669 10.6891 0.892229C10.6905 1.80495 10.6905 2.71767 10.6891 3.63015C10.6886 3.97431 10.5448 4.11255 10.199 4.11639C9.55411 4.12335 8.90875 4.11903 8.26459 4.14495C7.61395 4.14495 7.27171 4.46271 7.27171 5.13615C7.25611 5.84847 7.26523 6.56151 7.26523 7.29975C7.32619 7.29975 9.17779 7.29951 10.0432 7.29975C10.4363 7.29975 10.5707 7.43487 10.5707 7.83015C10.5707 8.79519 10.5705 9.76047 10.5698 10.7255C10.5695 11.115 10.4433 11.2394 10.0478 11.2396C9.18235 11.2401 7.33795 11.2398 7.25731 11.2398V19.0506C7.25731 19.467 7.12627 19.5998 6.71539 19.5998C5.71363 19.5998 4.71163 19.6 3.70987 19.5998C3.34675 19.5998 3.20515 19.4586 3.20515 19.0955C3.20491 16.5518 3.20491 11.3291 3.20491 11.2398Z"
                    fill="#3D6AD6"
                  />
                </svg>
                Login with Facebook
              </Button>
            </div>
            <div className="flex flex-row pt-5 gap-3">
              <hr className="w-full h-1 dark:border-line-dark border-line-light relative mt-2" />
              <span className="text-grayscale-70 w-72 text-sm">
                Or login with
              </span>
              <hr className="w-full h-1 dark:border-line-dark border-line-light relative mt-2" />
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
                  onChange={(e) => SetName(e.currentTarget.value)}
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
