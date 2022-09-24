import React, { useEffect, useState } from "react";

const UseSales = (sale: any) => {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    const url = `https://limitless-ridge-02858.herokuapp.com/SalesEvents/${sale}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSales(data));
  }, [sale]);
  return [sales];
};

export default UseSales;
