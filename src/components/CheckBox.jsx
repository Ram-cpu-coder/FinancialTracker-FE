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
    <div>
      <label className="">
        <input
          type="checkbox"
          onChange={handleSelectedAll}
          checked={selectedIds.length === items.length}
        />
        &nbsp;Select All
      </label>
      <div className="flex flex-col mt-4">
        {items.map(({ id, name }) => (
          <label key={id}>
            <input
              type="checkbox"
              checked={selectedIds.includes(id)}
              onChange={() => handleCheckBoxChange(id)}
            />
            &nbsp;{name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckBox;
