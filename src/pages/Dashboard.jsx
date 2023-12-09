import { LiaUserCircleSolid } from "react-icons/lia";
import { HiCurrencyDollar } from "react-icons/hi2";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

const Dashboard = () => {
  return (
    <div>
      <div className="">
        <section>
          <Card className="flex justify-between items-start bg-white my-6">
            <div className="flex justify-between gap-10">
              <div>
                <p className="font-medium text-md text-gray-400">
                  Total Portfolio Value
                </p>
                <h3 className="font-medium text-2xl">₹ 112,312.24</h3>
              </div>
              <div>
                <p className="font-medium text-md text-gray-400">
                  Total Portfolio Value
                </p>
                <div className="flex gap-10">
                  <h3 className="font-medium text-2xl">₹ 112,312.24</h3>
                  <h3 className="font-medium text-2xl">₹ 112,312.24</h3>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button Icon={<LiaUserCircleSolid className="text-2xl" />}>
                Deposite
              </Button>
              <Button Icon={<LiaUserCircleSolid className="text-2xl" />}>
                Withdraw
              </Button>
            </div>
          </Card>
        </section>

        <section className="flex gap-6 my-6">
          <Card className=" bg-white  w-1/2">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-md text-gray-400">
                  Current Price
                </p>
                <h3 className="font-medium text-2xl">₹ 26670.25</h3>
              </div>
              <div className="flex items-center gap-2">
                <Button Icon={<LiaUserCircleSolid className="text-2xl" />}>
                  Buy
                </Button>
                <Button Icon={<LiaUserCircleSolid className="text-2xl" />}>
                  Sell
                </Button>
              </div>
            </div>
            <section className="flex justify-end">
              <ul className="flex gap-2 bg-main px-3 py-1 rounded-2xl">
                <li className="py-1 bg-white px-4  rounded-lg">1H</li>
                <li className="py-1 bg-white px-4  rounded-lg">1D</li>
                <li className="py-1 bg-white px-4  rounded-lg">1W</li>
                <li className="py-1 bg-white px-4  rounded-lg">1M</li>
              </ul>
            </section>
            <section>
              <div className="bg-pink-600 h-40 text-white">chart</div>
            </section>
          </Card>
          <Card className="bg-white  w-1/2">
            <p className="font-medium text-md text-gray-400">
              Recent Transaction
            </p>
            <div className="flex flex-col gap-4 h-[185px] overflow-y-auto">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-main p-2 rounded-full">
                    <HiCurrencyDollar className="text-3xl" />
                  </div>
                  <div>
                    <p className="font-medium text-xl">INR Deposite</p>
                    <small>2022-06-09 7:06 PM</small>
                  </div>
                </div>
                <h3 className="font-medium text-xl">+ ₹81,123.10</h3>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-main p-2 rounded-full">
                    <HiCurrencyDollar className="text-3xl" />
                  </div>
                  <div>
                    <p className="font-medium text-xl">INR Deposite</p>
                    <small>2022-06-09 7:06 PM</small>
                  </div>
                </div>
                <h3 className="font-medium text-xl">+ ₹81,123.10</h3>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-main p-2 rounded-full">
                    <HiCurrencyDollar className="text-3xl" />
                  </div>
                  <div>
                    <p className="font-medium text-xl">INR Deposite</p>
                    <small>2022-06-09 7:06 PM</small>
                  </div>
                </div>
                <h3 className="font-medium text-xl">+ ₹81,123.10</h3>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-main p-2 rounded-full">
                    <HiCurrencyDollar className="text-3xl" />
                  </div>
                  <div>
                    <p className="font-medium text-xl">INR Deposite</p>
                    <small>2022-06-09 7:06 PM</small>
                  </div>
                </div>
                <h3 className="font-medium text-xl">+ ₹81,123.10</h3>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-main p-2 rounded-full">
                    <HiCurrencyDollar className="text-3xl" />
                  </div>
                  <div>
                    <p className="font-medium text-xl">INR Deposite</p>
                    <small>2022-06-09 7:06 PM</small>
                  </div>
                </div>
                <h3 className="font-medium text-xl">+ ₹81,123.10</h3>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-main p-2 rounded-full">
                    <HiCurrencyDollar className="text-3xl" />
                  </div>
                  <div>
                    <p className="font-medium text-xl">INR Deposite</p>
                    <small>2022-06-09 7:06 PM</small>
                  </div>
                </div>
                <h3 className="font-medium text-xl">+ ₹81,123.10</h3>
              </div>
            </div>
            <Button bgColor="bg-main" className="w-full text-black mt-2">
              View All
            </Button>
          </Card>
        </section>

        <section className="flex gap-6 my-6">
          <Card className=" bg-white  w-1/2">
            <small className="bg-primary text-white rounded-2xl px-2 py-1 inline-block">
              Loans
            </small>
            <h3 className="font-medium mt-3 text-xl">
              Learn more about Loans – Keep your Bitcoin, access it’s value
              without selling it
            </h3>
          </Card>
          <Card className=" bg-primary  w-1/2">
            <small className="bg-main text-primary rounded-2xl px-2 py-1 inline-block">
              Contact
            </small>
            <h3 className="font-medium mt-3 text-white text-xl">
              Learn more about our real estate, mortgage, and corporate account
              services
            </h3>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
