import React, { useEffect, useState } from "react";
const UseAnneyDec = (anny: any) => {
  const [annerversary, setAnnerversary] = useState([]);
  useEffect(() => {
    const url = `https://limitless-ridge-02858.herokuapp.com/anniversary/${anny}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAnnerversary(data));
  }, [anny]);
  return [annerversary];
};
export default UseAnneyDec;
