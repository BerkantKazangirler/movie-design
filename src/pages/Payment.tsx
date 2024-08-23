import { Button, Input } from "../components";
import { useEffect } from "react";
import cn from "classnames";

enum ErrorLangs {
  CardNumber = "11 Haneli Kart Numarası",
  Date = "YY/MM",
  cvv = "CVV Hanesi",
  PostalCode = "Bölge Kodu",
}

const Payment = ({}) => {
  let local = localStorage.getItem("darkMode");

  useEffect(() => {
    if (local == "on") {
      document.body.classList.toggle("dark");
      return;
    }
    console.log(local);
  }, []);

  return (
    <>
      <div className="flex w-full flex-col dark:bg-payment-bg bg-light-background h-screen overflow-y-hidden">
        <div className="flex justify-center w-full p-4 h-fit border-b dark:border-line-dark border-line-light">
          <span className="font-semibold text-grayscale-100 dark:text-white">
            CineMax
          </span>
        </div>
        <form
          action=""
          onSubmit={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <div className="flex justify-between pl-75">
            <div className="w-full max-w-128 pt-14">
              <span className="font-bold text-xl dark:text-white text-black">
                Payment Method
              </span>
              <div className="flex flex-col gap-5 pt-5">
                <label className="flex-row flex w-full border p-3 p rounded-3xl border-main-primary">
                  <input
                    type="radio"
                    name="method"
                    id="paypal"
                    className="w-4 accent-main-primary"
                  />
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 ml-3"
                  >
                    <path
                      d="M4.80086 19.3582L5.12091 17.1122H4.3741H0.640015L3.20054 0.748552C3.20054 0.748552 3.20053 0.641602 3.30722 0.641602H3.41391H9.7085C11.7356 0.641602 13.2292 1.06941 13.976 1.92503C14.2961 2.35284 14.5095 2.78065 14.6162 3.20846C14.7229 3.74322 14.7229 4.27797 14.6162 5.02664V5.45445L14.9362 5.66836C15.2563 5.77531 15.4697 5.98921 15.683 6.20312C16.0031 6.52397 16.2165 6.95178 16.2165 7.48654C16.3232 8.02131 16.3232 8.66302 16.1098 9.41168C15.8964 10.2673 15.683 10.909 15.363 11.5507C15.0429 12.0855 14.6162 12.5133 14.1894 12.9411C13.7626 13.262 13.1225 13.4759 12.5891 13.6898C11.949 13.7967 11.3088 13.9037 10.562 13.9037H10.0286C9.70851 13.9037 9.38845 14.0106 9.06839 14.2245C8.85501 14.4384 8.64163 14.7593 8.53494 15.0801V15.2941L7.89481 19.2513V19.3582V19.4652C7.89481 19.4652 7.8948 19.4652 7.78811 19.4652H4.80086V19.3582Z"
                      fill="#263577"
                    />
                    <path
                      d="M15.3619 5.02661C15.3619 5.13356 15.3619 5.24052 15.2552 5.34747C14.4017 9.62556 11.6278 11.0159 8.00045 11.0159H6.18674C5.75998 11.0159 5.33324 11.3368 5.33324 11.7646L4.37304 17.7539L4.15967 19.4652C4.15967 19.786 4.37304 19.9999 4.58641 19.9999H7.89375C8.3205 19.9999 8.64057 19.6791 8.64057 19.3582V19.1443L9.2807 15.294V15.0801C9.38739 14.6523 9.70745 14.4384 10.0275 14.4384H10.561C13.7616 14.4384 16.2154 13.155 16.8555 9.41165C17.1756 7.80737 16.9622 6.52394 16.2154 5.66833C16.0021 5.45442 15.682 5.24052 15.3619 5.02661Z"
                      fill="#2199D6"
                    />
                    <path
                      d="M14.5087 4.70587C14.402 4.70587 14.2953 4.59891 14.0819 4.59891C13.9752 4.59891 13.7618 4.49196 13.6552 4.49196C13.1217 4.38501 12.5883 4.38501 12.0548 4.38501H7.14719C7.0405 4.38501 6.93381 4.38501 6.82712 4.49196C6.61375 4.59891 6.40038 4.81282 6.40038 5.02672L5.3335 11.6578V11.8717C5.44018 11.4439 5.76024 11.123 6.18699 11.123H8.0007C11.6281 11.123 14.402 9.62567 15.2555 5.45453C15.2555 5.34758 15.2555 5.24063 15.3622 5.13368C15.1488 5.02672 14.9354 4.91977 14.722 4.81282C14.6153 4.70587 14.5087 4.70587 14.5087 4.70587Z"
                      fill="#252C5E"
                    />
                    <path
                      d="M6.40129 5.02675C6.40129 4.81285 6.61466 4.59894 6.82803 4.49199C6.93472 4.49199 7.04141 4.38504 7.1481 4.38504H12.0557C12.5892 4.38504 13.2293 4.38504 13.6561 4.49199C13.7628 4.49199 13.9761 4.49199 14.0828 4.59894C14.1895 4.59894 14.2962 4.70589 14.5096 4.70589C14.6163 4.70589 14.6163 4.7059 14.7229 4.81285C14.9363 4.9198 15.1497 5.02675 15.3631 5.1337C15.5765 3.52942 15.3631 2.4599 14.5096 1.49733C13.5494 0.427806 11.8424 0 9.70861 0H3.41402C2.98726 0 2.56051 0.320853 2.56051 0.748662L0 17.2193C0 17.5402 0.213376 17.861 0.533441 17.861H4.3742L5.33441 11.6578L6.40129 5.02675Z"
                      fill="#263577"
                    />
                  </svg>

                  <span className="font-bold italic ml-2 dark:text-white text-black">
                    Paypal
                  </span>
                </label>
                <label className="flex-row gap-2 flex w-full border p-3 p rounded-3xl border-main-primary">
                  <input
                    type="radio"
                    name="method"
                    id="applepay"
                    className="w-4 accent-main-primary"
                  />
                  <svg
                    width="55"
                    height="24"
                    viewBox="0 0 54 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.86689 3.0942C9.23401 3.90486 8.2214 4.54425 7.20878 4.45291C7.08221 3.35681 7.57796 2.1922 8.15811 1.47289C8.79099 0.639392 9.89854 0.0456709 10.7951 0C10.9006 1.14177 10.4892 2.26071 9.86689 3.0942ZM10.7845 4.66978C9.89238 4.61421 9.07839 4.96019 8.4209 5.23965C7.99779 5.41949 7.63949 5.57178 7.36691 5.57178C7.06101 5.57178 6.68792 5.41135 6.26903 5.23122C5.72014 4.99519 5.09261 4.72534 4.43455 4.73829C2.92617 4.76113 1.52328 5.68596 0.753273 7.15884C-0.828936 10.1046 0.341899 14.4662 1.87137 16.8639C2.62028 18.0513 3.51686 19.353 4.69825 19.3073C5.21799 19.2861 5.59185 19.1143 5.97877 18.9366C6.42422 18.732 6.88697 18.5195 7.60951 18.5195C8.30701 18.5195 8.74952 18.7265 9.1743 18.9252C9.5782 19.1141 9.96607 19.2956 10.5419 19.2845C11.7654 19.2616 12.5355 18.097 13.2844 16.9096C14.0926 15.6351 14.4477 14.3913 14.5016 14.2026L14.5079 14.1807C14.5079 14.1807 14.4967 14.1744 14.4791 14.1657C14.2089 14.0318 12.1439 13.0085 12.1241 10.2645C12.1042 7.96126 13.762 6.79431 14.0229 6.61061C14.0388 6.59943 14.0495 6.59189 14.0544 6.58796C12.9996 4.89814 11.3541 4.71546 10.7845 4.66978ZM19.2547 19.1589V1.35867H25.4253C28.6108 1.35867 30.8364 3.73355 30.8364 7.20453C30.8364 10.6755 28.5686 13.0732 25.3409 13.0732H21.8073V19.1589H19.2547ZM21.807 3.688H24.75C26.965 3.688 28.2308 4.96678 28.2308 7.21607C28.2308 9.46536 26.965 10.7556 24.7394 10.7556H21.807V3.688ZM39.2645 17.0237C38.5894 18.4167 37.1021 19.2958 35.4988 19.2958C33.1255 19.2958 31.4694 17.7659 31.4694 15.4595C31.4694 13.176 33.0727 11.8629 36.0367 11.6688L39.2223 11.4633V10.4814C39.2223 9.03132 38.3468 8.2435 36.7857 8.2435C35.4988 8.2435 34.56 8.96282 34.3701 10.0589H32.0707C32.1445 7.75254 34.1486 6.07414 36.8595 6.07414C39.7813 6.07414 41.68 7.72971 41.68 10.2987V19.1588H39.3172V17.0237H39.2645ZM36.1843 17.1837C34.8236 17.1837 33.9586 16.4758 33.9586 15.3911C33.9586 14.2722 34.7919 13.6214 36.3847 13.5186L39.2221 13.3245V14.3293C39.2221 15.9963 37.9142 17.1837 36.1843 17.1837ZM49.5171 19.8554C48.4939 22.9724 47.3231 24 44.8337 24C44.6439 24 44.011 23.9772 43.8633 23.9315V21.7964C44.0215 21.8192 44.4118 21.8421 44.6122 21.8421C45.7409 21.8421 46.3737 21.3283 46.764 19.9924L46.9961 19.2046L42.6714 6.24547H45.34L48.3462 16.7612H48.399L51.4052 6.24547H54L49.5171 19.8554Z"
                      fill="#F9F9F9"
                      className={cn({
                        "fill-white": local == "on",
                        "fill-black": local == "off",
                      })}
                    />
                  </svg>
                </label>
                <span className="text-grayscale-70 text-sm">
                  Or checkout using a credit card
                </span>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="cardholdername"
                    className="text-xs text-grayscale-70"
                  >
                    Cardholder Name
                  </label>
                  <Input
                    rounded="3xl"
                    maxlength={32}
                    minlength={1}
                    id="cardholdername"
                  />
                  <div className="flex flex-row gap-3">
                    <div className="flex flex-col w-80 gap-2">
                      <label
                        htmlFor="cardnumber"
                        className="text-xs text-grayscale-70"
                      >
                        Card Number
                      </label>
                      <Input
                        placeholder="Ex:  31111 1111 1111 1111"
                        rounded="3xl"
                        maxlength={16}
                        minlength={16}
                        id="cardnumber"
                        pattern="[0-9]{13,16}"
                        title={ErrorLangs.CardNumber}
                      />
                    </div>
                    <div className="flex flex-col w-28 gap-2">
                      <label
                        htmlFor="expiration"
                        className="text-xs text-grayscale-70"
                      >
                        Expiration
                      </label>
                      <Input
                        placeholder="MM/YY"
                        rounded="3xl"
                        id="expiration"
                        pattern="[0-9]{4}"
                        title={ErrorLangs.Date}
                        maxlength={4}
                      />
                    </div>
                    <div className="flex flex-col w-28 gap-2">
                      <label
                        htmlFor="cvv"
                        className="text-xs text-grayscale-70"
                      >
                        CVV
                      </label>
                      <Input
                        id="cvv"
                        rounded="3xl"
                        maxlength={3}
                        minlength={3}
                        pattern="[0-9]{3}"
                        title={ErrorLangs.cvv}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-52 gap-2">
                    <label
                      htmlFor="postalcode"
                      className="text-xs text-grayscale-70"
                    >
                      Postal Code
                    </label>
                    <Input
                      placeholder="Postal Or Zip Code"
                      rounded="3xl"
                      id="postalcode"
                      pattern="(\d{5}([\-]\d{4})?)"
                      title={ErrorLangs.PostalCode}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-screen dark:bg-dark-smooth bg-grayscale-10 w-128 flex">
              <div className="p-16 w-full flex gap-5 flex-col max-h-75">
                <div className="justify-between flex">
                  <span className="text-grayscale-60">Subtotal</span>
                  <span className="dark:text-white text-grayscale-100">
                    $4.99
                  </span>
                </div>
                <div className="justify-between flex">
                  <span className="text-grayscale-60">Plan type</span>
                  <span className="dark:text-white text-grayscale-100">
                    Monthly
                  </span>
                </div>
                <div className="justify-between flex">
                  <span className="text-grayscale-60">
                    Monthly plan discount
                  </span>
                  <span className="dark:text-white text-grayscale-100">
                    -$5
                  </span>
                </div>
                <hr className="dark:border-line-dark bg-line-light" />
                <div className="justify-between flex">
                  <span className="text-grayscale-60">Billed Now</span>
                  <span className="text-main-primary">$35</span>
                </div>
                <p className="text-xs text-grayscale-70">
                  You will be charged $5 every yearly thereafter while the
                  subscription is active. Cancel any time.
                </p>
                <Button size="large" buttonstyle="primary" type="submit">
                  Pay
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Payment;
