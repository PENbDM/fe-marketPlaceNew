import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmallCategory({ setSortCategory }) {
  const [category, setCategory] = React.useState('');
  const [itemCategories, setItemCategories] = React.useState([]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await axios.get(
        "https://nc-marketplace-sem-1.onrender.com/api/categories"
      );
      const { categories } = data.data;
      setItemCategories(categories);
    };
    fetchCategories();
  }, [])

  return (
    <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
      <InputLabel id="category-select">Category</InputLabel>
      <Select
        labelId="category-select-label"
        id="category-select"
        value={category}
        label="Sort by"
        onChange={handleChange}
        onClick={setSortCategory(category)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {itemCategories.map((category, i) => (
          <MenuItem key={i} value={category.category_name}>{category.category_name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}