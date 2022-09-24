import React, { useEffect, useState } from "react";

const UseNonProfit = (id: any) => {
  const [nonProfit, setNonProfit] = useState([]);

  useEffect(() => {
    const url = `https://limitless-ridge-02858.herokuapp.com/nonprofit/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNonProfit(data));
  }, [id]);
  return [nonProfit];
};

export default UseNonProfit;
