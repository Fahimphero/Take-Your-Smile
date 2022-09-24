import React, { useEffect, useState } from "react";

const UseSocialEvents = () => {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    const url = "https://limitless-ridge-02858.herokuapp.com/social";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSocial(data));
  }, []);
  return [social];
};

export default UseSocialEvents;
