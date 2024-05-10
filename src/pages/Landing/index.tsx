import { useState } from "react";
import Logo from "../../components/Land-pages/Logo";
import Page1 from "../../components/Land-pages/Page1";
import Page2 from "../../components/Land-pages/Page2";
import Page3 from "../../components/Land-pages/Page3";
import Login from "../../components/Login/Login";
import ForgetPassword1 from "../../components/Login/ForgetPassword1";
import PassChanged from "../../components/Login/PassChanged";
import usePageRefresh from "../../utils/useRefresh";
import useBackConfirmation from "../../utils/useBack";

const Landing = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const backPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const loginPage = () => {
    setCurrentPage(5);
  };
  const forgetPassword = () => {
    setCurrentPage(6);
  };
  usePageRefresh();
  useBackConfirmation();
  return (
    <div>
      {currentPage === 1 && <Logo onNext={nextPage} />}
      {currentPage === 2 && (
        <Page1
          onNext={nextPage}
          currentPage={currentPage}
          skip={loginPage}
          onBack={backPage}
        />
      )}
      {currentPage === 3 && (
        <Page2
          onNext={nextPage}
          currentPage={currentPage}
          skip={loginPage}
          onBack={backPage}
        />
      )}
      {currentPage === 4 && (
        <Page3
          onNext={nextPage}
          currentPage={currentPage}
          skip={loginPage}
          onBack={backPage}
        />
      )}
      {currentPage === 5 && <Login forget={forgetPassword} />}
      {currentPage === 6 && (
        <ForgetPassword1 onNext={nextPage} onBack={backPage} />
      )}
      {currentPage === 7 && (
        <PassChanged onNext={loginPage} onBack={loginPage} />
      )}
    </div>
  );
};

export default Landing;
