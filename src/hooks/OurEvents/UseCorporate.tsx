import React, { useEffect, useState } from "react";

const UseCorporate = () => {
  const [corporate, setCorporat] = useState([]);
  useEffect(() => {
    const url = "https://limitless-ridge-02858.herokuapp.com/corporate";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCorporat(data));
  }, []);
  return [corporate];
};
export default UseCorporate;
