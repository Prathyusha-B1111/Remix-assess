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

    // Get the data from dataTransfer
    const data = event.dataTransfer.getData("component");

    // Check if data is available before parsing
    if (!data) {
      console.error("No data found in dataTransfer");
      return;
    }

    try {
      const component = JSON.parse(data);
      component.position = { x: event.clientX, y: event.clientY };
      onDropComponent(component);
    } catch (error) {
      console.error("Error parsing JSON data:", error);
    }
  };

  console.log("componnt", components);

  return (
    <div
      className="relative w-full h-screen bg-gray-50 border-l border-gray-200 flex flex-col p-2 justify-center items-start"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {components.map((component) => (
        <div
          key={component.id}
          style={{
            left: component.position?.x || 0,
            top: component.position?.y || 0,
          }}
        >
          <div
            className={`p-4 w-[200px] m-2 ${
              component.type !== "question"
                ? "bg-blue-200 border border-blue-400 rounded-lg"
                : ""
            } shadow-md text-center`}
          >
            {component?.content ? component.content : component.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizGrid;
