import "./Logo.css";
import LogoText from "../../assets/logo-no-background.png";

const Logo = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="logo-wrapper">
      <img src={LogoText} className="logo-text" />
      <div className="btn-tag">
        <button onClick={onNext}>Start</button>
      </div>
    </div>
  );
};

export default Logo;
