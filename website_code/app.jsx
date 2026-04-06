const NAV_ITEMS = ["Home", "Projects", "Education"];

function TopNav({ activeTab, onSelect }) {
  return (
    <div id="top">
      {NAV_ITEMS.map((item) => (
        <h3
          key={item}
          className={`h ${activeTab === item ? "active" : ""}`}
          onClick={() => onSelect(item)}
        >
          {item}
        </h3>
      ))}
    </div>
  );
}

function Home() {
  return (
    <div id="all">
      <div id="iden">
        <h1 id="name">
          <b>Vincenzo Monterosso</b>
        </h1>
        <h3 className="uni" id="uni">
          <b>Hunter College</b>
        </h3>
        <h3 className="uni">Computer Science, Bachelor of Arts</h3>
        <h3 className="uni">Class of 2027</h3>
        <div id="imp">
          <a href="https://github.com/VincenzoMonterosso">
            <img src="github.png" id="linked" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/vincenzo-monterosso-03266828a/">
            <img src="linked.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div id="aboutMe">
    <h3>About Me</h3>
      <div>
        <p>Hi, I am Vincenzo Monterosso. A Computer Science student at Hunter College who's an aspiring Fullstack Software Engineer.<br /></p>
        
        <h3>Why Do I Study Computer Science?</h3>
        <p>
          As a kid I was always obsessed with games on Cool Math Games, espescially the run series. Due to this obsession I had always wanted to create a videogame of some sorts.
          Then during the COVID-19 pandemic. In what was nothing more then an experiment at the time I grouped up with some friends and begin creating a Roblox Train Simulator.
          As development progressed, we began adding more and more features which geared the game for release, so suddenly the game opening up to the public became a possibility.
          Now after Schools had reopened I found out about my schools Software Engineering Program (SEP). I signed up for this program, and due to the classes being geared towards web development, I fell in love with fullstack development.
          Thus, Computer Science chose me once I got to college.
        </p>

      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = React.useState("Home");

  return (
    <>
      <TopNav activeTab={activeTab} onSelect={setActiveTab} />
      {activeTab === "Home" && <Home />}
      {activeTab === "Home" && <AboutMe />}
      {activeTab === "Projects" && <Projects />}
      {activeTab === "Education" && <AboutMe />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
