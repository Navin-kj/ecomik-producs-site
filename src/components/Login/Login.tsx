import { FaXTwitter } from "react-icons/fa6";
import "../style.css";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Video from "../../assets/Video2.mp4";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../data/actions";

const Login = ({ forget }: { forget: () => void }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoading(false);
    setShowVideo(true);
  };
  const handleClick = () => {
    setShowVideo(true);
    setTimeout(() => {
      setFadeOut(true);
    }, 6000);
    setTimeout(() => {
      setShowVideo(false);
      navigate("/home");
      setFadeOut(false);
    }, 7000);
  };

  useEffect(() => {
    if (videoLoading && showVideo) {
      if (videoLoading) {
        dispatch(startLoading());
      }
    } else {
      dispatch(stopLoading());
    }
  }, [dispatch, showVideo, videoLoading]);

  return (
    <>
      {showVideo && (
        <div className={`video-container ${fadeOut ? "fade-out" : ""}`}>
          <video
            autoPlay
            muted
            className="responsive-video"
            onLoadedData={handleVideoLoaded}
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {!showVideo && (
        <div className="login-page">
          <div className="login-header">
            <span className="login-title">Welcome to Ecomik</span>
            <span className="login-desc">Hello there, sign-in to continue</span>
          </div>
          <div className="login-tab">
            <div className="login-inputs">
              <span>Email Address</span>
              <div className="group">
                <svg
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter a mail"
                  value={"mock@gmail.com"}
                />
              </div>
            </div>
            <div className="login-inputs">
              <span>Password</span>
              <div className="group">
                <svg
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <input
                  className="input"
                  type="password"
                  placeholder="password"
                  value={"password"}
                />
              </div>
            </div>
            <div className="login-forgt">
              <div className="remember">
                <input className="switch" type="checkbox" />
                <span>Remember Me</span>
              </div>
              <span className="forget" onClick={forget}>
                Forgot Password?
              </span>
            </div>
          </div>
          <div className="btn-tags-login">
            <button onClick={handleClick}>Sign-in</button>
          </div>
          <div className="sigin-with">
            <span>Or Sign in with Social Accounts</span>
            <div className="social-icons">
              <FcGoogle />
              <ImAppleinc />
              <FaXTwitter />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
