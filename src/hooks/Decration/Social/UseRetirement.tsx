import React, { useEffect, useState } from "react";

const UseRetirement = (reti: any) => {
  const [retirement, setRetirement] = useState([]);
  useEffect(() => {
    const url = `https://limitless-ridge-02858.herokuapp.com/retirement/${reti}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRetirement(data));
  }, [reti]);
  return [retirement];
};

export default UseRetirement;
