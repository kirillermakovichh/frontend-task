"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  /* In this code, the `router` object is used to navigate to the
  home page (`router.push("/")`) and refresh the page (`router.refresh()`) after successfully
  creating a topic. */
  const router = useRouter();

  /**
   * The handleSubmit function is an asynchronous function that handles form submission by making a
   * POST request to an API endpoint and redirecting the user to the home page if the request is
   * successful.
   * @returns The function does not explicitly return anything.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      /* The code `const res = await fetch(...)` is making a POST request to the specified API endpoint
      (`https://frontend-task-jet.vercel.app/api/topics`). */
      const res = await fetch(
        "https://frontend-task-jet.vercel.app/api/topics",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        }
      );

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
