import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmallSort({sort, setSortMethod }) {

  const handleChange = (event) => {
    setSortMethod(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="sort-by-select">Sort By</InputLabel>
      <Select
        labelId="sort-by-select-label"
        id="sort-by-select"
        value={sort}
        label="Sort by"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'price'}>Price</MenuItem>
        <MenuItem value={'asc'}>Ascending</MenuItem>
        <MenuItem value={'desc'}>Descending</MenuItem>
      </Select>
    </FormControl>
  );
}