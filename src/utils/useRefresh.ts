import { useEffect } from "react";

const usePageRefresh = () => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const message = "Are you sure you want to leave?";
      if (window.confirm(message)) {
        // Delay the redirection to ensure it happens after the confirmation
        setTimeout(() => {
          window.location.href = "https://kj-naveen-portfolio.netlify.app/";
        }, 100);
      }
      event.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
};

export default usePageRefresh;
