import Button from "../components/UI/Button";
import { RiDownload2Line } from "react-icons/ri";
import Card from "../components/UI/Card";
import { useState } from "react";

const tabs = [
  {
    label: "All",
    tableData: [
      {
        id: "All Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "All Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "All Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "All Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "All Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "All Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "All Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "All Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
    ],
    count: 349,
  },
  {
    label: "Deposit",
    tableData: [
      {
        id: "Deposit Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "Deposit Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "Deposit Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "Deposit Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "Deposit Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "Deposit Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
    ],
    count: 114,
  },
  {
    label: "Witdraw",
    tableData: [
      {
        id: "Withdraw Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "Withdraw Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "Withdraw Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "Withdraw Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
    ],
    count: 213,
  },
  {
    label: "Trade",
    tableData: [
      {
        id: "Trade Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "Trade Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
      {
        id: "Trade Data",
        date: "11-10-22",
        type: "Credited",
        amount: "1961",
        status: "pending",
      },
    ],
    count: 22,
  },
];

const Transactions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="my-6">
      <div className="flex justify-end">
        <Button Icon={<RiDownload2Line />}>Export CSV</Button>
      </div>
      {/* tabs */}
      <Card className="bg-white my-3">
        <div className="flex justify-between  my-3 border-b-main border-b-2">
          <div className="flex font-medium">
            {tabs.map((tab, index) => (
              <div
                className={`border-b-2 px-3 ${
                  activeIndex === index
                    ? "border-b-primary"
                    : "border-b-transparent"
                }`}
                key={tab.label}
                onClick={() => setActiveIndex(index)}
              >
                <h4>
                  {tab.label}
                  <span className="px-2 py-1  rounded-xl ms-2 bg-main">
                    {tab.count}
                  </span>
                </h4>
              </div>
            ))}
          </div>
          <div>
            <input
              className="px-4 py-1 rounded-2xl"
              type="search"
              placeholder="Search by ID or destination"
            />
          </div>
        </div>

        {activeIndex >= 0 && (
          <table className="table-fixed w-full">
            <thead>
              <tr className="text-left">
                <th>ID</th>
                <th>Date & Time</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tabs[activeIndex].tableData.map(
                ({ id, date, type, amount, status }, index) => (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{date}</td>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{status}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  );
};
export default Transactions;
