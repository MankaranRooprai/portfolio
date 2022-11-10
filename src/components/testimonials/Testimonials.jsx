import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Stock Market Investment Simulator",
      title: "Personal Project",
      img:
        "assets/stock.jpg",
      icon: "assets/git.png",
      link: "https://github.com/MankaranRooprai/StockMarketInvestmentSimulation",
      desc:
        "Paper-trading Java application that utilizes YahooFinance API to fetch real-time stock market data to users to buy/sell shares based on live bid/ask prices.",
    },
    {
      id: 2,
      name: "Weather Comparison Application",
      title: "Personal Project",
      img:
        "assets/weather.jpg",
      icon: "assets/git.png",
      link: "https://github.com/MankaranRooprai/weather-app",
      desc:
        "Weather comparison application built in python that allows users to compare temperatures across different cities by utilizing the OpenWeatherMap API to fetch live temperature data, and display results on a scatter plot used python's Matplotlib library.",
      featured: true,
    },
    {
      id: 3,
      name: "Plutus",
      title: "Hack the North",
      img:
        "assets/plutus.jpg",
      icon: "assets/git.png",
      link: "https://github.com/MankaranRooprai/plutus",
      desc:
        "Adaptive, responsive, and modern single-page budget tracker webapp built in react.js to allow students to track their expenses.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Projects</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <a href={d.link} target="_blank" rel="noreferrer">
                <img src="assets/right-arrow.png" className="left" alt="" />
                <img
                  className="user"
                  src={d.img}
                  alt=""
                />
                <img className="right" src={d.icon} alt="" />
              </a>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}