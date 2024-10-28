import { QuizComponent } from "~/types/quiz";

const AdminPanel = ({
  onAddComponent,
}: {
  onAddComponent: (component: QuizComponent) => void;
}) => {
  const componentsList = [
    { id: "1", type: "progressBar", content: "Progress Bar" },
    { id: "2", type: "questionNumber", content: "Question Number" },
    { id: "3", type: "timer", content: "Timer" },
    { id: "4", type: "questionText", content: "Question Text" },
    { id: "5", type: "image", content: "Image" },
    { id: "6", type: "option", content: "Option" },
  ];

  const handleDragStart = (
    event: React.DragEvent,
    component: QuizComponent
  ) => {
    // Set the component data as JSON in dataTransfer
    event.dataTransfer.setData("component", JSON.stringify(component));
  };

  return (
    <div className="p-4 space-y-4 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold">Admin Panel</h2>
      {componentsList.map((component) => (
        <div
          key={component.id}
          draggable
          onDragStart={(e) =>
            handleDragStart(e, { ...component, position: { x: 0, y: 0 } })
          }
          className="p-3 bg-white flex flex-col border rounded-lg shadow-md cursor-pointer hover:bg-gray-200"
        >
          {component.content}
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
