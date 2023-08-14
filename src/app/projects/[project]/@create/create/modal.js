"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function VersionModal({ formHandler }) {
  const router = useRouter();
  const versionRef = useRef();

  return (
    <div className="absolute right-0 z-30 box-border h-[100vh] w-[30vw] bg-neutral-100 p-10 pr-40	 text-lg font-semibold">
      <div className="mb-4 font-bold">Create</div>
      <form action={formHandler}>
        <div className="mt-2 box-border flex flex-row flex-wrap items-start justify-evenly gap-2">
          <label className="basis-0">Version: </label>
          <input
            ref={versionRef}
            min="0"
            step=".1"
            type="number"
            className="max-w-[200px] "
            name="version"
            id="version"
          />
          <button type="submit" className="button-black grow basis-0	">
            Create
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="button-black grow basis-0	 "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
