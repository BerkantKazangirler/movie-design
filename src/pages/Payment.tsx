import paypal from "../../public/assets/paypal.png";
import applepay from "../../public/assets/applepay.png";
import { Button, Input } from "../components";
import "../App.css";

const Payment = ({}) => {
  return (
    <>
      <div className="flex w-full flex-col bg-payment-bg h-screen overflow-y-hidden">
        <div className="flex justify-center w-full p-4 h-fit border-b border-line-dark">
          <span className="font-bold">CineMax</span>
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
              <span className="font-bold text-xl">Payment Method</span>
              <div className="flex flex-col gap-5 pt-5">
                <label className="flex-row flex w-full border p-3 p rounded-3xl border-main-primary">
                  <input
                    type="radio"
                    name="method"
                    id="paypal"
                    className="w-4 accent-main-primary"
                  />
                  <img src={paypal} className="h-6 ml-3" />
                  <span className="font-bold italic ml-2">Paypal</span>
                </label>
                <label className="flex-row flex w-full border p-3 p rounded-3xl border-main-primary">
                  <input
                    type="radio"
                    name="method"
                    id="applepay"
                    className="w-4 accent-main-primary"
                  />
                  <img src={applepay} className="h-6 ml-3" />
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
                        pattern="[A-Za-z]{3}"
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
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-screen bg-dark-smooth w-128 flex">
              <div className="p-16 w-full flex gap-5 flex-col max-h-75">
                <div className="justify-between flex">
                  <span className="text-grayscale-60">Subtotal</span>
                  <span>$4.99</span>
                </div>
                <div className="justify-between flex">
                  <span className="text-grayscale-60">Plan type</span>
                  <span>Monthly</span>
                </div>
                <div className="justify-between flex">
                  <span className="text-grayscale-60">
                    Monthly plan discount
                  </span>
                  <span>-$5</span>
                </div>
                <hr className="border-line-dark" />
                <div className="justify-between flex">
                  <span className="text-grayscale-60">Billed Now</span>
                  <span className="text-main-primary">$35</span>
                </div>
                <p className="text-xs text-grayscale-70">
                  You will be charged $5 every yearly thereafter while the
                  subscription is active. Cancel any time.
                </p>
                <Button size="large" type="submit">
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
