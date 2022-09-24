import React, { useEffect, useState } from "react";

const UseReligiousDe = (reli: any) => {
  const [religious, setReligious] = useState([]);
  useEffect(() => {
    const url = `https://limitless-ridge-02858.herokuapp.com/holiday/${reli}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReligious(data));
  }, [reli]);
  return [religious];
};

export default UseReligiousDe;
