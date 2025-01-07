import { useEffect } from "react";

export function useExitForm(close, ref) {
  useEffect(() => {
    function exitFormWithEsc(e) {
      if (e.code === "Escape") close();
    }
    function exitFormWithClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) close();
    }

    document.addEventListener("click", exitFormWithClickOutside, true);
    document.addEventListener("keydown", exitFormWithEsc);

    return () => {
      document.removeEventListener("click", exitFormWithClickOutside);
      document.removeEventListener("keydown", exitFormWithEsc);
    };
  }, [close, ref]);
}
