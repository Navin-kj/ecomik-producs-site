import { IoChevronBackSharp } from "react-icons/io5";
import "../style.css";
import { PageProps } from "./interface";

export const HeaderTag = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="header-tag">
      <span className="header-text">{title}</span>
      <span className="header-desc">{desc}</span>
    </div>
  );
};

export const PageComponent = ({
  currentPage,
  onNext,
  SvgImage,
  title,
  desc,
  skip,
  changed,
  onBack,
}: PageProps) => {
  return (
    <div className="page1">
      <div className="back-img1">
        {SvgImage}
        <HeaderTag title={title} desc={desc} />
      </div>
      <div className="back-icon" onClick={onBack}>
        <IoChevronBackSharp />
      </div>

      {skip && (
        <div className="btn-tags">
          {currentPage && (
            <div className="dots">
              <span
                className={`dot ${currentPage >= 2 ? "active" : ""}`}
              ></span>
              <span
                className={`dot ${currentPage >= 3 ? "active" : ""}`}
              ></span>
              <span
                className={`dot ${currentPage >= 4 ? "active" : ""}`}
              ></span>
            </div>
          )}
          <button onClick={onNext}>Next</button>
          <div className="skip-text" onClick={skip}>
            Skip
          </div>
        </div>
      )}
      {changed && (
        <div className="btn-tags-changes">
          <button onClick={onNext}>Back to login</button>
        </div>
      )}
    </div>
  );
};
