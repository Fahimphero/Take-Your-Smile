import React, { useEffect, useState } from "react";

const UseFashionDe = (fas: any) => {
  const [FashionDe, setFashionDe] = useState([]);
  useEffect(() => {
    const url = `https://limitless-ridge-02858.herokuapp.com/FashionCarnival/${fas}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFashionDe(data));
  }, [fas]);
  return [FashionDe];
};

export default UseFashionDe;
