import ProfileImg from "./profile.png";
import "./style.css";
import { ImLocation2 } from "react-icons/im";
import { MdContactSupport, MdDescription } from "react-icons/md";
import { IoChevronBackSharp, IoWallet } from "react-icons/io5";
import { IoIosArrowForward, IoIosSettings } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";
import { useNavigate } from "react-router";

const ProjectData = [
  {
    name: "Saved Address",
    icon: <ImLocation2 />,
    link: "about",
  },
  {
    name: "My wallet",
    icon: <IoWallet />,
    link: "about",
  },
  {
    name: "Terms & Conditions",
    icon: <MdDescription />,
    link: "about",
  },
  {
    name: "Helps & Support",
    icon: <MdContactSupport />,
    link: "about",
  },
  {
    name: "Setting",
    icon: <IoIosSettings />,
    link: "about",
  },
  {
    name: "Sign-out",
    icon: <PiSignOutBold />,
    link: "landing",
  },
];
const Profile = () => {
  const navigate = useNavigate();
  const handleClick = (link?: string) => {
    if (link !== "landing") {
      navigate(`/${link}`);
    } else if (link === "landing") {
      const confirmResult = window.confirm(
        "Are you sure you want to sign-out?"
      );
      if (confirmResult) {
        navigate("/landing");
      }
    } else {
      navigate("/home");
    }
  };
  return (
    <div className="profile-page">
      <div className="back-icon" onClick={() => handleClick}>
        <IoChevronBackSharp />
      </div>
      <div className="profile-details">
        <span className="header-text">My Account</span>
        <div className="profile-img">
          <div></div>
          <img src={ProfileImg} className="img-src" />
        </div>
        <span className="contact">+91 8428214375</span>
        <span className="contact">kjnaveen2305@gmail.com</span>
      </div>
      <div className="project-lists">
        {ProjectData.map((project, index) => {
          return (
            <div
              key={index}
              className="project-details-new"
              onClick={() => handleClick(project.link)}
            >
              <div className="row-data">
                <div className="project-img-src">{project.icon}</div>
                <div className="details-proj">
                  <span className="proj-title">{project.name}</span>
                </div>
              </div>
              <div onClick={() => {}}>
                <IoIosArrowForward className="arrow-icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
