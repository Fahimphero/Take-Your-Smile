import React, { useEffect, useState } from "react";

const UseFundarationde = (fund: any) => {
  const [fundrasing, setFundrasing] = useState([]);
  useEffect(() => {
    const url = `https://limitless-ridge-02858.herokuapp.com/Fundraising/${fund}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFundrasing(data));
  }, [fund]);
  return [fundrasing];
};
export default UseFundarationde;
