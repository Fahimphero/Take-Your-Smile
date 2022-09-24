import React, { useEffect, useState } from "react";

const UseNewYear = (newy: any) => {
  const [newYear, setNewYear] = useState([]);
  useEffect(() => {
    const url = `https://limitless-ridge-02858.herokuapp.com/NewYearEvents/${newy}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewYear(data));
  }, [newy]);
  return [newYear];
};

export default UseNewYear;
