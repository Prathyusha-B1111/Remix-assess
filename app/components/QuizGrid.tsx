import { QuizComponent } from "~/types/quiz";

const QuizGrid = ({
  components,
  onDropComponent,
}: {
  components: QuizComponent[];
  onDropComponent: (component: QuizComponent) => void;
}) => {
  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("component");
    const component = JSON.parse(data);
    component.position = { x: event.clientX, y: event.clientY };
    onDropComponent(component);
  };

  console.log("comp", components);

  return (
    <div
      className="relative w-full h-screen bg-gray-50 border-l border-gray-200 flex flex-col p-2 justify-center items-start"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {components.map((component, index) => (
        <div
          key={index}
          // style={{
          //   left: component.position.x,
          //   top: component.position.y,
          // }}
        >
          {component.type === "option" ? (
            <div className="p-4 hover:cursor-pointer w-[200px] m-2 bg-blue-200 border border-blue-400 rounded-lg shadow-md text-center">
              {component?.text}
            </div>
          ) : (
            <div className="p-4 w-[200px] m-2 text-center">
              {component?.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuizGrid;
