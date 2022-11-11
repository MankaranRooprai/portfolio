// import { useEffect, useState } from "react";
// import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
// import {
//   featuredPortfolio,
//   webPortfolio,
//   mobilePortfolio,
//   designPortfolio,
//   contentPortfolio,
// } from "../../data";

export default function Portfolio() {
  // const [selected, setSelected] = useState("featured");
  // const [data, setData] = useState([]);
  // const list = [
  //   {
  //     id: "featured",
  //     title: "Featured",
  //   },
  // ];

  // useEffect(() => {
  //   switch (selected) {
  //     case "featured":
  //       setData(featuredPortfolio);
  //       break;
  //     case "web":
  //       setData(webPortfolio);
  //       break;
  //     case "mobile":
  //       setData(mobilePortfolio);
  //       break;
  //     case "design":
  //       setData(designPortfolio);
  //       break;
  //     case "content":
  //       setData(contentPortfolio);
  //       break;
  //     default:
  //       setData(featuredPortfolio);
  //   }
  // }, [selected]);

  return (
    <div className="h1align" id="h1align">
      <h1>About Me</h1>
      <div className="portfolio" id="portfolio">
        <div className="left">
          <div className="wrapper">
            <p>I'm a student studying Software Engineering at McMaster University in Ontario, Canada who has immense passion for programming and basically anything related to new technologies. <br></br><br></br>

First and foremost, I love writing code. Throughout middle and high school, I latched on to any ideas for projects I could get. I moved from "Hello World" all the way to a stock market investment simulator built with Java, with dozens of projects in between. I learned Java, then Python, tearing through any books I could find on anything remotely related to software development. <br></br><br></br>

I have a variety of skills to offer ranging from technologies such as Python, Java, React.js to Flutter and Dart for mobile application development. But, my biggest skill would be my passion ability to learn new technologies/languages quickly and then using them to make applications.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="imgContainer">
            <img src="assets/outside.jpg " alt="" />
          </div>
        </div>
      </div>


      {/* <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div> */}
    </div>
  );
}