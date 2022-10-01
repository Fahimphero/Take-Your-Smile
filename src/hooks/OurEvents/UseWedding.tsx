import React, { useEffect, useState } from 'react';

const UseWedding = () => {
  const [wedding, setWedding] = useState([]);

  useEffect(() => {
    const url = "https://take-your-smile-server.onrender.com/wedding";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWedding(data));
  }, []);
  return [wedding]
};

export default UseWedding;