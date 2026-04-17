import { useEffect, useState } from "react";

export default function useToast(duration = 5000): [boolean, () => void] {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [showToast, duration]);

  // We return the state and a function to trigger it
  const triggerToast = () => setShowToast(true);

  return [showToast, triggerToast];
}
