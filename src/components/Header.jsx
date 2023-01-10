import Timer from "./Timer";

const Header = () => {
  return (
    <header id="header-app">
      <div className="title-container">
        <h1>PIXEL WAR</h1>
        <h2>Rejoins la Pixel War et prépare toi</h2>
      </div>
      <div className="timer-container">
        <p className="title-timer">La prochaine partie commence dans</p>
        <Timer/>
        <button>Rejoindre</button>
      </div>
    </header>
  );
};

export default Header;
