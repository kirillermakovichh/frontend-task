"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

/* The `export default function RemoveBtn({ id })` is a React functional component that takes an `id`
prop as input. */
export default function RemoveBtn({ id }) {
  /* The line `const router = useRouter();` is importing the `useRouter` hook from the `next/navigation`
module. */
  const router = useRouter();
  /**
   * The function `removeTopic` is an asynchronous function that prompts the user for confirmation,
   * sends a DELETE request to a specified API endpoint, and refreshes the router if the request is
   * successful.
   */
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(
        `https://frontend-task-jet.vercel.app/api/topics?id=${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
