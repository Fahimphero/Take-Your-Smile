import React, { useEffect, useState } from "react";

const UseWeddingDec = (wedd: any) => {
  const [weddings, setWedding] = useState([]);
  useEffect(() => {
    const url = `https://limitless-ridge-02858.herokuapp.com/weddingceremony/${wedd}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWedding(data));
  }, [wedd]);
  return [weddings];
};

export default UseWeddingDec;