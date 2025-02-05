import React, { useState } from "react";

const CheckBox = ({ tranData }) => {
  const formattedTranData = tranData.map((item) => ({
    ...item,
    createdAt: new Date(item.createdAt).toLocaleDateString("en-CA"),
  }));

  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelectedAll = () => {
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
        <tr className="grid grid-cols-[60px_minmax(200px,_2fr)_1fr_1fr_1fr] text-left border-b py-2">
          <th>#</th>
          <th className="text-left">Title</th>
          <th className="text-center">Date</th>
          <th className="text-center">Out</th>
          <th className="text-center">In</th>
        </tr>
        {formattedTranData.map((item, index) => (
          <tr className="grid grid-cols-[60px_minmax(200px,_2fr)_1fr_1fr_1fr] text-left border-b py-2">
            <td className="my-auto">{index + 1}</td>
            <td className="my-auto text-left">
              <label key={item._id}>
                <input
                  key={item._id}
                  type="checkbox"
                  checked={selectedIds.includes(item._id)}
                  onChange={() => handleCheckBoxChange(item._id)}
                />
                &nbsp;{item.description}
              </label>
            </td>
            <td className="my-auto text-center">{item.createdAt}</td>
            <td className="my-auto text-center text-[red]">
              {item.type === "Expense" ? item.amount : ""}
            </td>
            <td className="my-auto text-center text-[green]">
              {item.type === "Income" ? item.amount : ""}
            </td>
          </tr>
        ))}
        <tr className="grid grid-cols-[3fr_1.5fr_1fr] text-left border-b py-2">
          <td></td>
          <th>Total Balance</th>
          <th>
            $
            {tranData.reduce((acc, item) => {
              return (acc += item.amount);
            }, 0)}
          </th>
        </tr>
      </table>
    </div>
  );
};

export default CheckBox;
