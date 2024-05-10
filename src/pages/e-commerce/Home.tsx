/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ImLocation2 } from "react-icons/im";
import { MdNotificationAdd } from "react-icons/md";
import "./home.css";
import { FaFilter } from "react-icons/fa6";
import { HomePageData } from "./datas";

const Home = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [searchInput, setSearchInput] = useState<string>("");
  const colors = [
    "rgb(212, 233, 245)",
    "rgb(255, 234, 167)",
    "rgb(249, 224, 255)",
    "rgb(213, 251, 188)",
  ];
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="home-page">
      <div className="main-head">
        <div className="home-head">
          <div className="head-icon">
            <div className="page-icon">
              <ImLocation2 />
            </div>
            <div className="select">
              <select value={selectedValue} onChange={handleChange}>
                <option value="">Home</option>
                <option value="value1">Office</option>
                <option value="value2">Appartment</option>
                <option value="value3">Work</option>
              </select>
            </div>
          </div>
          <div className="page-icon">
            <MdNotificationAdd />
          </div>
        </div>
        <div className="search-bar">
          <div className="form">
            <label htmlFor="search">
              <input
                required={true}
                autoComplete="off"
                placeholder="Search products"
                type="text"
                value={searchInput}
                onChange={handleInputChange}
              />
              <div className="icon">
                <svg
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="swap-on"
                >
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <svg
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="swap-off"
                >
                  <path
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
              <button
                type="reset"
                className="close-btn"
                onClick={() => setSearchInput("")}
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </label>
          </div>
          <button className="filter-btn">
            <FaFilter />
          </button>
        </div>
      </div>
      <div className="product-card-lists">
        {HomePageData.map((products, index) => {
          const backgroundColor = colors[index % colors.length];
          return (
            <div className="product-card" key={index}>
              <img
                className="product-image"
                src={products.productImage}
                style={{ backgroundColor: backgroundColor }}
                alt="image-not-found"
              />
              <strong className="product-name">{products.productName}</strong>
              <div className="product-items">{products.productItems} items</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
