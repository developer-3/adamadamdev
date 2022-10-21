import { ComponentChildren } from "preact";
import { useEffect, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface NavButtonProps {
  content: string;
  scrollMultipler: number;
}

export default function NavButton(props: NavButtonProps) {
  function handleScroll() {
    window.scroll({
      top: window.innerHeight * props.scrollMultipler,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div class="mt-3">
      <button
        onClick={handleScroll}
        class="flex-1 text-white text-2xl font-bold transition hover:text-red-400 duration-400"
      >
        {props.content}
      </button>
    </div>
  );
}
