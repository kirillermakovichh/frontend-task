import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

/**
 * The function `getTopics` is an asynchronous function that fetches topics from an API and returns the
 * response as JSON.
 * @returns The function `getTopics` returns a promise that resolves to the JSON data fetched from the
 * specified URL.
 */
const getTopics = async () => {
  try {
    /* The code `const res = await fetch("https://frontend-task-jet.vercel.app/api/topics", { cache:
    "no-store" });` is making a network request to the specified URL
    "https://frontend-task-jet.vercel.app/api/topics" to fetch data from an API. */
    const res = await fetch("https://frontend-task-jet.vercel.app/api/topics", {
      cache: "no-store",
    });

    /* The code `if (!res.ok) { throw new Error("Failed to fetch topics"); }` is checking if the
    response from the API request is not successful. If the response is not successful (i.e., the
    HTTP status code is not in the range of 200-299), it throws an error with the message "Failed to
    fetch topics". This is a way to handle errors when fetching data from an API. */
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  /* The line `const { topics } = await getTopics();` is destructuring the response object returned by
the `getTopics()` function. */
  const { topics } = await getTopics();

  return (
    <>
      {/* The line `      {topics && topics.map((t) => (` is checking if the `topics` array exists and is not
empty. If `topics` is truthy (i.e., it exists and is not empty), it will proceed to map over each
element in the `topics` array and render the JSX code inside the parentheses for each element. This
is a common pattern in JavaScript to conditionally render elements based on the existence of data. */}
      {topics &&
        topics.map((t) => (
          <div
            key={t._id}
            className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          >
            <div>
              <h2 className="font-bold text-2xl">{t.title}</h2>
              <div>{t.description}</div>
            </div>

            <div className="flex gap-2">
              <Link className="text-yellow-500" href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
              <RemoveBtn id={t._id} />
            </div>
          </div>
        ))}
    </>
  );
}
