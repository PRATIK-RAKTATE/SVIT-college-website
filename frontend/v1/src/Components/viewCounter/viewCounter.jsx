import React, { useEffect, useState } from "react";

export default function ViewCounter() {
  const [count, setCount] = useState(0);

  // update it in version 2
  // useEffect(() => {
  //   fetch("https://api.countapi.xyz/hit/mywebsite/homepage")
  //     .then((res) => res.json())
  //     .then((res) => setCount(res.value))
  //     .catch(() => setCount("Error"));
  // }, []);

  return (
    <div className="mt-1 inline-flex items-center gap-2 rounded-sm bg-black-100 px-2 py-1 shadow">
      <span className="text-blue-600 text-lg"></span>
      <span className="text-gray-700 font-medium">
        {/* Views: <span className="text-green-600 font-bold">{count}</span> */}
      </span>
    </div>
  );
}
