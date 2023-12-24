import React, { useState } from 'react';

const FilterNotes = ({ onFilterChange }) => {
  const [searchType, setSearchType] = useState('all');

  const handleFilterChange = (value) => {
    setSearchType(value);
    onFilterChange(value);
  };

  return (
    <div>
      <label>Filter by Type:</label>
      <select value={searchType} onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="Trabajo">Trabajo</option>
        <option value="Estudios">Estudios</option>
        <option value="Viajes">Viajes</option>
        <option value="Deportes">Deportes</option>
      </select>
    </div>
  );
};

export default FilterNotes;


