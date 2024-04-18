import Banner from "./SubHome/Banner";
import TimeLine from "./SubHome/TimeLine";
import NewsLetter from "./SubHome/NewsLetter";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <TimeLine />
      <NewsLetter />
    </React.Fragment>
  );
};

export default Home;
