import React, { useState } from "react";

const CheckBox = () => {
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
    if (selectedIds.length === items.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(items.map((item) => item.id));
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
    <div className="mt-4">
      <label>
        <input
          type="checkbox"
          onChange={handleSelectedAll}
          checked={selectedIds.length === items.length}
        />
        &nbsp;Select All
      </label>
      {/* list of transactions */}
      <table className="w-full mt-4">
        <tr className="grid grid-cols-[50px_minmax(200px,_2fr)_1fr_1fr_1fr] text-left border-b py-2">
          <th>#</th>
          <th>Title</th>
          <th>Date</th>
          <th>Out</th>
          <th>In</th>
        </tr>
        {items.map(({ id, name }) => (
          <tr className="grid grid-cols-[50px_minmax(200px,_2fr)_1fr_1fr_1fr] text-left border-b py-2">
            <td>{id}</td>
            <td>
              <label key={id}>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(id)}
                  onChange={() => handleCheckBoxChange(id)}
                />
                &nbsp;{name}
              </label>
            </td>
            <td>DATE</td>
            <td>INCOME</td>
            <td>EXPENSE</td>
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
