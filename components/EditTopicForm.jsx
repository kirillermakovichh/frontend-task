"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  /**
   * The `handleSubmit` function is an asynchronous function that handles form submission by making a
   * PUT request to update a topic and then refreshing the page.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      /* The code `const res = await fetch(`https://frontend-task-jet.vercel.app/api/topics/`, {
      method: "PUT", headers: { "Content-type": "application/json", },` is making a PUT request to
      update a topic. */
      const res = await fetch(
        `https://frontend-task-jet.vercel.app/api/topics/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          /* The `body: JSON.stringify({ newTitle, newDescription })` is converting the `newTitle` and
`newDescription` values into a JSON string. This JSON string is then sent as the body of the PUT
request to update the topic. */
          body: JSON.stringify({ newTitle, newDescription }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      /* The `router.refresh()` function is used to refresh the current page. In this code, it is called
after the topic is successfully updated to ensure that the page reflects the updated data. */
      router.refresh();
      /* The `router.push("/")` statement is used to navigate to the specified route ("/" in this case) after
the topic is successfully updated. It redirects the user to the homepage ("/") of the application. */
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
}
