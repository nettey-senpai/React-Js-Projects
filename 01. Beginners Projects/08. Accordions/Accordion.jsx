import { useState } from "react";
import "./style.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordion-card" key={Math.random()}>
      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        {/* Icon changes to "-" when isActive is true and "+" when isActive is false */}
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>
      <div className="content">
        {/* Display the content when is active is set to true */}
        {isActive && <p className="card-info">{content}</p>}
      </div>
    </section>
  );
};

export default Accordion;
