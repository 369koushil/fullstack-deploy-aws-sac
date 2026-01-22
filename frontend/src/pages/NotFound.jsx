import React from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className=" pl-4 border-8 border-dashed  flex flex-col justify-start pt-48 gap-y-2 w-screen h-screen">
      <div className="font-semibold text-indigo-700 text-sm">404</div>
      <div className="flex  flex-col gap-y-8">
        <div className="flex flex-col gap-y-6">
          <div className="text-8xl font-semibold">Page not found</div>
          <div className="font-normal text-lg">
            Sorry, we couldn’t find the page you’re looking for.
          </div>
        </div>
        <Link
          to="/dashboard"
          className="flex gap-x-2 font-semibold text-indigo-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          go back to home
        </Link>
      </div>
    </div>
  );
}
