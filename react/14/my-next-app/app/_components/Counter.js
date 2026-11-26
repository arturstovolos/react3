"use client";

import { useState } from "react";

export default function Counter({ usersCount = 0 }) {
  const [count, setCount] = useState(0);

  return (
    <div className="my-6 flex items-center gap-4">
      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-accent-500 px-4 py-2 text-primary-950 font-semibold rounded"
      >
        Counter: {count}
      </button>
      <span className="text-primary-200">Users loaded: {usersCount}</span>
    </div>
  );
}
