import EditTopicForm from "@/components/EditTopicForm";

/**
 * The function `getTopicById` is an asynchronous function that fetches a topic by its ID from a
 * specified API endpoint and returns the response as JSON.
 * @returns The function `getTopicById` returns a Promise that resolves to the JSON data of the fetched
 * topic.
 */
const getTopicById = async (id) => {
  try {
    /* The code `const res = await fetch(`https://frontend-task-jet.vercel.app/api/topics/`, {
    cache: "no-store" });` is making an HTTP request to the specified API endpoint to fetch a topic
    by its ID. */
    const res = await fetch(`https://frontend-task-jet.vercel.app/api/topics/${id}`, {
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

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
