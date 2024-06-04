"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center flex-col gap-3 items-center">
      <h2 className="text-2xl mt-12 text-red-500">
        Something went wrong in home page!
      </h2>
      <button className="text-xl text-green-600" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
