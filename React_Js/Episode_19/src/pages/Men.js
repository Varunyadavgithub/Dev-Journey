import { useState } from "react";
import Accordian from "../components/Accordian";

export const Men = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="font-bold text-xl mb-5">Filter Products</h1>
      {["Brand", "Mens", "Gender", "Kids"].map((title, idx) => (
        // This is controlled component
        <Accordian
          title={title}
          key={idx}
          open={idx === open ? true : false}
          setOpen={() => setOpen(idx)}
        />
      ))}
    </div>
  );
};
