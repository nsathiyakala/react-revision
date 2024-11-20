import React, { useState } from 'react';

const FilterSearch = () => {
  const data = [
    { id: 1, name: 'React', category: 'Frontend', level: 'Intermediate' },
    { id: 2, name: 'Node.js', category: 'Backend', level: 'Advanced' },
    { id: 3, name: 'MongoDB', category: 'Database', level: 'Beginner' },
    { id: 4, name: 'Express', category: 'Backend', level: 'Intermediate' },
    { id: 5, name: 'HTML', category: 'Frontend', level: 'Beginner' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || item.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div>
      <h2>Filter and Search</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Category Filter */}
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="All">All Categories</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Database">Database</option>
      </select>

      {/* Level Filter */}
      <select onChange={(e) => setSelectedLevel(e.target.value)} value={selectedLevel}>
        <option value="All">All Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      {/* Display Filtered Data */}
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <li key={item.id}>
              {item.name} - {item.category} - {item.level}
            </li>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </ul>
    </div>
  );
};

export default FilterSearch;
