import React, { useState } from "react";

export default function DropdownSearchFilter() {
  const [selectedOption, setSelectedOption] = useState("Todos");
  const handleDropdown = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown"></label>
      <select id="dropdown" value={selectedOption} onChange={handleDropdown}>
        <option value="Todos">Todos</option>
        <option value="Bazares">Bazares</option>
        <option value="Marcas">Marcas</option>
        <option value="Productos">Productos</option>
      </select>
    </div>
  );
}
