import React, { useState } from "react";

const CheckBox = ({ tranData }) => {
  console.log("POP", tranData);
  const items = [
    {
      id: 1,
      name: "Salary",
    },
    {
      id: 2,
      name: "Sell",
    },
    {
      id: 3,
      name: "Salary",
    },
  ];
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelectedAll = (e) => {
    if (selectedIds.length === tranData.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(tranData.map((item) => item._id));
    }
  };

  const handleCheckBoxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selectedIds) => selectedIds !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="mt-4 overflow-x-scroll">
      <label>
        <input
          type="checkbox"
          onChange={handleSelectedAll}
          checked={selectedIds.length === tranData.length}
        />
        &nbsp;Select All
      </label>
      {/* list of transactions */}
      <table className="min-w-[1050px] mt-4">
        <tr className="grid grid-cols-[50px_minmax(200px,_2fr)_1fr_1fr_1fr] text-left border-b py-2">
          <th>#</th>
          <th>Title</th>
          <th>Date</th>
          <th>Out</th>
          <th>In</th>
        </tr>
        {tranData.map((item) => (
          <tr className="grid grid-cols-[50px_minmax(200px,_2fr)_1fr_1fr_1fr] text-left border-b py-2">
            <td className="my-auto">{item._id}</td>
            <td className="my-auto">
              <label key={item._id}>
                <input
                  key={item._id}
                  type="checkbox"
                  checked={selectedIds.includes(item._id)}
                  onChange={() => handleCheckBoxChange(item._id)}
                />
                &nbsp;{item.name}
              </label>
            </td>
            <td className="my-auto">DATE</td>
            <td className="my-auto">INCOME</td>
            <td className="my-auto">EXPENSE</td>
          </tr>
        ))}
        <tr className="grid grid-cols-[3fr_1.5fr_1fr] text-left border-b py-2">
          <td></td>
          <th>Total Balance</th>
          <th>$2345</th>
        </tr>
      </table>
    </div>
  );
};

export default CheckBox;
