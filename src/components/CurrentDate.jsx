import React from "react";

const CurrentDate = () => {
  const date = new Date();
  const currentDate = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  return (
    <>
      <p>
        Today is the <span className="font-bold">{currentDate}'st</span> of the
        month of <span className="font-bold">{currentMonth} year </span>
        <span className="font-bold">{currentYear}</span>
      </p>
    </>
  );
};

export default CurrentDate;
