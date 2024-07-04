import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { topic } = await getData(params.id);
  const { title, description } = topic;
  return {
    title,
    description: `A Section to edit ${title} post`,
  };
};

const getData = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const EditTodo = async ({ params }) => {
  const { id } = params;
  const { topic } = await getData(id);
  const { title, description } = topic;
  return <EditTopicForm id={id} title={title} description={description} />;
};

export default EditTodo;
