import React, { useState } from "react";
import CalendarComponent from 'react-calendar';
import './CalendarsCss.css';

export default function Calendar() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <CalendarComponent
          onChange={onChange}
          value={value}
      />
    </div>
  );
}
