import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB"
  }
];
function App() {
  return (
    <div className="card">
      <Avatar photo="personalimage.jpg" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.photo} alt="personal"></img>
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <p>
        {" "}
        Hi I am Yaseen Ali, Computer Science Student currently studying in 7th
        semester Final Year at Sukkur IBA University. I am skilled in Front-end
        web development, hands on practice with HTML5, CSS3 and JavaScript.
        Apart from that I have also worked on React JS. In my profession I have
        added values to Machine Learning by having some projects. I am currently
        with team working in FYP as 'Intelligent Multiple Disease Prediction
        System{" "}
      </p>
    </div>
  );
}

function SkillList() {
  const skilllist = skills;
  return (
    <div className="skill-list">
      {skilllist.map((data) => {
        return <Skill skillObj={data} key={data.skill} />;
      })}
      {/* <Skill name="React" emoji="✌️" color="blue" />
      <Skill name="JavaScript" emoji="💪" color="cyan" />
      <Skill name="HTML + CSS" emoji="💪" color="orange" /> */}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      {skillObj.level === "advanced"
        ? skillObj.skill + " 💪"
        : skillObj.level === "intermediate"
        ? skillObj.skill + " 👍"
        : skillObj.skill + " 😊"}
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
