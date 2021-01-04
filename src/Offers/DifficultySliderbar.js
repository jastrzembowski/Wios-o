import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import "./offers.css";

export default function RangeSlider({handleChange}) {
  const marks = [
    {
      value: 1,
      label: 'łatwy',
    },
    {
      value: 3,
      label: 'średni',
    },
    {
      value: 5,
      label: 'trudny',
    },
  ];

  return (

    <div
    style={{
      textAlign: "center",
    }}
    >
      <Typography id="range-slider" gutterBottom>
        Poziom trudności
      </Typography>
      <Slider
        defaultValue={[1,5]}
        onChange={handleChange}
        valueLabelDisplay="off"
        aria-labelledby="discrete-slider"
        marks={marks}
        step={2}
        min={1}
        max={5}
      />
    </div>
  );
}