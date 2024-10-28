// import { useActionData, useFetcher, json } from "remix";
import { ActionFunction } from "@remix-run/node";
import { json, redirect, useFetcher } from "@remix-run/react";
import { useState } from "react";
// import { useFetcher } from "react-router-dom";
import AdminPanel from "~/components/AdminPanel";
import QuizGrid from "~/components/QuizGrid";
import { QuizComponent } from "~/types/quiz";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const configData = JSON.parse(formData.get("config") as string);

  // Here you can log or save `configData` to some temporary storage or just simulate the action.
  console.log("Saving quiz configuration:", configData);

  return redirect("/quiz"); // Redirect to quiz page after simulated save
};

export default function AdminPage() {
  const fetcher = useFetcher();
  const [components, setComponents] = useState<QuizComponent[]>([]);

  const addComponent = (component: QuizComponent) => {
    setComponents([...components, component]);
  };

  const saveConfiguration = () => {
    fetcher.submit(
      { components: JSON.stringify(components) },
      { method: "post", action: "/admin" }
    );
  };

  return (
    <div className="flex">
      <div className="flex flex-col md:flex-row">
        <AdminPanel onAddComponent={addComponent} />
        <QuizGrid components={components} onDropComponent={addComponent} />
      </div>

      <button
        onClick={saveConfiguration}
        className="m-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 h-[40px] px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Save Configuration
      </button>
    </div>
  );
}
