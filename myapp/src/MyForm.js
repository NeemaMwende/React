import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    favoriteFruit: 'apple'
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="favoriteFruit">Favorite Fruit:</label>
        <select
          id="favoriteFruit"
          name="favoriteFruit"
          value={formData.favoriteFruit}
          onChange={handleChange}
        >
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="cherry">Cherry</option>
        </select>
      </div>
      <button type="submit">Submit</button>
      </fieldset>
    </form>

    //uncontrolled form in react

  );
}

export default MyForm;
