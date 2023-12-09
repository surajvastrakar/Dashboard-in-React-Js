import Card from "../components/UI/Card";
import { IoMail } from "react-icons/io5";
import { IoChatbubbleSharp } from "react-icons/io5";
import Button from "../components/UI/Button";

const Support = () => {
  return (
    <>
      <div className="my-6">
        <div className="flex gap-6">
          <div className="w-[45%]">
            <IoMail className="text-primary text-4xl" />
            <h2 className="font-semibold my-3 text-4xl">Contact Us</h2>
            <p>
              Have a question or just want to know more? Feel free to reach out
              to us.
            </p>
          </div>
          <div className="w-[55%]">
            <Card className="bg-white">
              <p className="font-bold">
                You will receive response within 24 hours of time of submit.
              </p>
              <form className="my-6">
                <div className="my-4 flex gap-6">
                  <div className="w-1/2">
                    <label className="mb-2 block" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="border block w-full rounded-lg p-3"
                      type="text"
                      placeholder="James"
                      id="name"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="mb-2 block" htmlFor="surname">
                      Surname
                    </label>
                    <input
                      className="border block w-full rounded-lg p-3"
                      type="text"
                      placeholder="Arthur"
                      id="surname"
                    />
                  </div>
                </div>

                <div className="my-4">
                  <label className="mb-2 block" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="border block w-full rounded-lg p-3"
                    type="email"
                    placeholder="name@mail.com"
                    id="email"
                  />
                </div>

                <div className="my-4">
                  <label className="mb-2 block" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="border block w-full rounded-lg p-3"
                    type="text"
                    placeholder="Your message"
                    id="message"
                  />
                </div>

                <div className="my-4">
                  <label htmlFor="checkbox">
                    <input id="checkbox" type="checkbox" />
                    &nbsp;I agree with
                    <span className="text-primary"> Terms & Conditions</span>.
                  </label>
                </div>
                <div>
                  <Button
                    className="block w-full my-2"
                    bgColor="bg-main"
                    disabled
                  >
                    Send a Message
                  </Button>
                  <Button className="block w-full my-2" bgColor="bg-main">
                    Book a Meeting
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
      <div className="my-6">
        <div className="flex gap-6">
          <div className="w-[45%]">
            <IoChatbubbleSharp className="text-primary text-4xl" />
            <h2 className="font-semibold my-3 text-4xl">Live Chat</h2>
            <p>Don’t have time to wait for the answer? Chat with us now.</p>
          </div>
          <div className="w-[55%]">
            <Card className=" bg-primary">
              <small className="bg-main text-primary rounded-2xl px-2 py-1 inline-block">
                Contact
              </small>
              <h3 className="font-medium mt-3 text-white text-xl mb-10">
                Chat with us now
              </h3>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
