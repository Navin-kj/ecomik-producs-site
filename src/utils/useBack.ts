import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useBackConfirmation = () => {
  const navigate = useNavigate();
  const confirmationMessage = "Are you sure you want to go back?";
  useEffect(() => {
    const handlePopState = () => {
      if (window.confirm(confirmationMessage)) {
        // User clicked "OK" - allow the default browser back navigation
      } else {
        navigate(1);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);
};

export default useBackConfirmation;
