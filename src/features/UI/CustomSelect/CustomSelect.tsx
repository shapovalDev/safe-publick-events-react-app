import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const CustomSelect = ({
  mapArray,
  label,
  style,
  value,
  onChange,
}: {
  mapArray: string[];
  label: string;
  // eslint-disable-next-line react/require-default-props
  style?: any;
  value: string;
  onChange: any;
}): JSX.Element => {
  return (
    <FormControl style={style}>
      <InputLabel id="demo-simple-select-required-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        value={value}
        label={label}
        onChange={onChange}
      >
        {mapArray.map((item) => {
          return (
            <MenuItem key={item} value={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
