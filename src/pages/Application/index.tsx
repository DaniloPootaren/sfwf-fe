import { useParams } from "react-router-dom";
import DynamicForm from "../../components/DynamicForm";

const Application = () => {
  const { id } = useParams();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DynamicForm id={parseInt(id!!, 10) as number} />
    </div>
  );
};

export default Application;
