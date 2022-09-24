import React, { useEffect, useState } from "react";

const UseFairsde = (fair: any) => {
  const [fairs, setFairs] = useState([]);
  useEffect(() => {
    const url = `https://limitless-ridge-02858.herokuapp.com/fairsExpos/${fair}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFairs(data));
  }, [fair]);
  return [fairs];
};

export default UseFairsde;
