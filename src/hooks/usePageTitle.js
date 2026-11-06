import { useEffect } from "react";

// Sets document.title for the page and restores a sensible default on unmount.
export default function usePageTitle(title) {
  useEffect(() => {
    const prev = document.title;
    if (title) document.title = title;
    return () => {
      document.title = prev;
    };
  }, [title]);
}
