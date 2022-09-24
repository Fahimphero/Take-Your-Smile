import React, { useEffect, useState } from "react";
const UseAnniversery = (id: any) => {
  const [anniver, setAnniver] = useState([]);
  useEffect(() => {
    const url = `https://limitless-ridge-02858.herokuapp.com/wedding/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAnniver(data));
  }, [id]);
  return [anniver];
};
export default UseAnniversery;
