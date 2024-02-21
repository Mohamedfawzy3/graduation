import React from "react";


import style from "../styles/Home.module.css";
<style></style>;
const Home = () => {
  return (
    <div>
      <div className={`${style.Box}`}>
        <div className={`${style.nav} `}>
          <div className="container d-flex justify-content-between align-items-center">
            <div className={`${style.logo} `}>
              <h3>الحياه</h3>
            </div>
            <div className={`${style.links}`}>
              <ul className="d-flex">
                <li className="ms-3">
                  <a href="#">الرئيسيه</a>
                </li>
                <li className="ms-3">
                  <a href="#">الاهداف</a>
                </li>
                <li className="ms-3">
                  <a href="#">نبذه</a>
                </li>
                <li>
                  <a href="#">تواصل معنا</a>
                </li>
              </ul>
            </div>
            <div>
              <button className="btn btn-dark btn-sm">تسجيل الدخول</button>
              <div className="btn-dark btn btn-sm">انشاء حساب</div>
            </div>
          </div>
        </div>
        <div className={`${style.box} container`}>
            <div className="text-center">
          <div>Life App</div>
          <p>علشان انت تهمنا وفرنا عليك دوشه الورق . دلوقتى كل بياناتك فى جيبك تقدر توصلها فى اى وقت وتشاركها مع طبيبك او الصيدليه واماكن تانيه</p>
          <div>
              <button className="btn btn-danger btn-sm">تسجيل الدخول</button>
              <button className="btn-dark btn btn-sm">انشاء حساب</button>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Home;
