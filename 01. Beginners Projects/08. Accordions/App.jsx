import { accordionData } from "./utils/content";
import Accordion from "./Accordion";

const App = () => {
  return (
    <div className="accordion">
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  );
};

export default App;
