import React, { useEffect, useState } from 'react';

const UsePack = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    const url = "https://limitless-ridge-02858.herokuapp.com/package";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return [packages]
};

export default UsePack;