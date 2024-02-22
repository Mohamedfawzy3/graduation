import React, { useState } from "react";
import { useRef} from "react";
import { useNavigate } from "react-router-dom";

import style from "../styles/Home.module.css";

const Home = () => {
  const [flag, setflag] = useState(true);
  const spanRefs = useRef([]);
  const ulref = useRef();
  const handleIconClick = () => {
    setflag(!flag);
    if (flag) {
      console.log(ulref.current);
      ulref.current.style.display = "block";
      spanRefs.current[0].style.cssText =
        "width: 100%; transform-origin: right 0%; transform: rotate(-48deg);";
      spanRefs.current[1].style.opacity = "0";
      spanRefs.current[2].style.cssText =
        "width: 100%; transform-origin: right 0%; transform: rotate(45deg);";
    } else {
      ulref.current.style.display = "none";
      spanRefs.current[0].style.cssText =
        "width: 80%; transform-origin: right 0%; transform: rotate(0deg);";
      spanRefs.current[1].style.opacity = "1";
      spanRefs.current[2].style.cssText =
        "width: 80%; transform-origin: right 0%; transform: rotate(0deg);";
    }
  };
  let navigate = useNavigate();
  const ChangePath = (path) => {
    navigate(path);
  };
  return (
    <div>
      <div className={`${style.Box}`}>
        <div className={`${style.nav} `}>
          <div className="container d-flex justify-content-between align-items-center ">
            <div className={`${style.logo} `}>
              <h3>الحياه</h3>
            </div>
            <div>
              <div
                className={style.icon}
                onClick={(e) => {
                  handleIconClick();
                }}
              >
                <span
                  ref={(el) => (spanRefs.current[0] = el)}
                  class={style.one}
                ></span>
                <span
                  ref={(el) => (spanRefs.current[1] = el)}
                  class={style.two}
                ></span>
                <span
                  ref={(el) => (spanRefs.current[2] = el)}
                  class={style.three}
                ></span>
              </div>

              <div
                className={`${style.links} col-sm-12 text-sm-center d-sm-flex align-item-center`}
                ref={ulref}
              >
                <ul className=" flex-column flex-md-row text-sm-center">
                  <li className=" ms-sm-1 mb-1 ">
                    <a href="#">الرئيسيه</a>
                  </li>
                  <li className=" ms-sm-1 mb-1">
                    <a href="#">الاهداف</a>
                  </li>
                  <li className=" ms-sm-1 mb-1">
                    <a href="#">نبذه</a>
                  </li>
                  <li>
                    <a href="#">تواصل معنا</a>
                  </li>
                </ul>
                <div className="m-4 m-sm-1">
                  <button
                    onClick={() => ChangePath('/signin')}
                    className="btn btn-primary px-2 ms-1"
                  >
                    تسجيل الدخول
                  </button>
                  <button
                    onClick={() => ChangePath('/signup')}
                    className="btn-dark btn px-2"
                  >
                    انشاء حساب
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.box} container`}>
          <div className={`text-center ${style.homeContent}`}>
            <div>صحتك بالدنيا</div>
           
            <p>
              علشان كده وفرنا عليك دوشه الورق . دلوقتى كل بياناتك فى جيبك
              تقدر توصلها فى اى وقت وتشاركها مع طبيبك او الصيدليه واماكن تانيه
            </p>
            <div>
              <button onClick={() => ChangePath('/signin')} className="fs-6 ">
                تسجيل الدخول
              </button>
              <button onClick={() => ChangePath('/signup')} className="fs-6">
                انشاء حساب
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
