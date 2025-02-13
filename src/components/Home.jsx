import React from "react";

const Home = ({ language }) => {
  const texts = {
    en: {
      title: "Shree Krishna Goshala:\nA Beacon of Hope for Cows",
      description: "Help us protect lives, promote kindness, and build a sustainable future.\nYour kindness keeps them safe. Donate now!",
    },
    hi: {
      title: "श्री कृष्ण गोशाला:\nगायों के लिए आशा की किरण",
      description: "हमें जीवन की रक्षा करने, दया को बढ़ावा देने और एक स्थायी भविष्य बनाने में मदद करें।\nआपकी दया उन्हें सुरक्षित रखती है। अभी दान करें!",
    },
  };

  return (
    <section id="home" className="home-section">
      <div className="overlay">
        <h1>
          {texts[language].title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h1>

        <p>
          {texts[language].description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Home;