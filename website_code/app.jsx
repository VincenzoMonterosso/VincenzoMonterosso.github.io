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

function Profile() {
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
        <div id="useless"></div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (

  );
}

function App() {
  const [activeTab, setActiveTab] = React.useState("Home");
  const currentYear = new Date().getFullYear();

  return (
    <>
      <TopNav activeTab={activeTab} onSelect={setActiveTab} />
      <Profile />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
