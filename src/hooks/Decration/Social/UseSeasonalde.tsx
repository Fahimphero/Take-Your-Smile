import React, { useEffect, useState } from "react";

const UseSeasonalde = (sean: any) => {
  const [seasonal, setSeasonal] = useState([]);
  useEffect(() => {
    const url = `https://limitless-ridge-02858.herokuapp.com/seasonal/${sean}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSeasonal(data));
  }, [sean]);
  return [seasonal];
};

export default UseSeasonalde;
