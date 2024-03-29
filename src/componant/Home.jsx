import React, { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faFlask,
  faStaffSnake,
  faUserDoctor,
  faRadiation,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import style from "../styles/Home.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Home = () => {
  let navigate = useNavigate();
  const ChangePath = (path) => {
    navigate(path);
  };
  return (
    <div className={`${style.body_content}`}>
      <Navbar />
      <div className={`${style.Box}`}>
        <div className={`${style.box} container `}>
          <div
            className={`col-12 text-center text-sm-end col-sm-7 flex-left ${style.homeContent}`}
          >
            <div>صحتك بالدنيا</div>

            <p>
              علشان كده وفرنا عليك دوشه الورق . دلوقتى كل بياناتك فى جيبك تقدر
              توصلها فى اى وقت وتشاركها مع طبيبك او الصيدليه واماكن تانيه
            </p>
            <div>
              <button
                className={`${style.start_button}`}
                onClick={() => ChangePath("/signup")}
              >
                ابدأ الان
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.info}`}>
        <div className="container py-5 d-flex justify-content-between flex-column flex-sm-row">
          <div className="text-center mb-5 m-sm-2 ">
            <span className="fs-1 fw-bold">+10,000</span>
            <h3>طبيب</h3>
          </div>
          <div className="text-center mb-5 m-sm-2 ">
            <span className="fs-1 fw-bold">+9000</span>
            <h3>صيدليه</h3>
          </div>
          <div className="text-center mb-5 m-sm-2 ">
            <span className="fs-1 fw-bold">+4000</span>
            <h3>معمل تحليل</h3>
          </div>
          <div className="text-center ">
            <span className="fs-1 fw-bold">+5500</span>
            <h3>معمل اشعه</h3>
          </div>
        </div>
      </div>
      <section className={`${style.members} container py-4`}>
        <h2 className="text-center mb-5 fs-1 fw-bold">الكيانات</h2>
        <div
          className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}
        >
          <div className={`${style.image} col-2 col-lg-1 mb-3`}>
            <FontAwesomeIcon icon={faUserDoctor} />
          </div>
          <div>
            <h3 className={style.kind}>الطبيب</h3>
            <div className={`${style.text} fs-5`}>
              الطبيب يقدر يطلع على ملفك الطبى ومن خلاله يقدر المعلومات الضروريه
              قبل اى تشخيص ومن ثم الحصول على تشخيص سليم بناء ويقدر يضيفلك
              التحاليل والاشاعات المطلوبه وكمان يكتبلك روشته الكترونيهز
            </div>
          </div>
        </div>
        <div
          className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}
        >
          <div className={`${style.image} col-2 col-lg-1 mb-3`}>
            <FontAwesomeIcon icon={faStaffSnake} />
          </div>
          <div>
            <h3 className={style.kind}>الصيدليه</h3>
            <div className={`${style.text} fs-5`}>
              دلوقتى الصيدليه تقدر تتطلع على حسابك وتشوف العلاج المطلوب ةتصرفه
              لك بكل سهول وبون اخطاء وكمان تقدر تتابع قياس الضغط والسكر وغيره
              وتضيف البيانات دى لحسابك
            </div>
          </div>
        </div>
        <div
          className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}
        >
          <div className={`${style.image} col-2 col-lg-1 mb-3`}>
            <FontAwesomeIcon icon={faFlask} />
          </div>
          <div>
            <h3 className={style.kind}>معمل التحليل</h3>
            <div className={`${style.text} fs-5`}>
              {" "}
              يقدر يطلع على التحاليل والفحوصات الموجوده فى ملفك والمصلوب اجرائها
              ومن ثم رفعها فى ملفك الطبى لتكون متاحه فلى وقت ويقدر طبيبك يطلع
              عليها{" "}
            </div>
          </div>
        </div>
        <div
          className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}
        >
          <div className={`${style.image} col-2 col-lg-1 mb-3`}>
            <FontAwesomeIcon icon={faRadiation} />
          </div>
          <div>
            <h3 className={style.kind}>معمل الاشعه</h3>
            <div className={`${style.text} fs-5`}>
              معمل الاشعه يقدر يشوف الفخوصات المطلوبه فى ملفك الطبى وبمجرد
              الانتهاء منها يتم رفع نتائج الفحوصات الى ملفك مباشره لتكون جاهزه
              للاطلع عليها من قبل طبيبك.{" "}
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.why_us} py-5`}>
        <h2 className="text-center mb-5 fs-1 fw-bold">لماذا نحن</h2>
        <div className=" d-flex flex-column-reverse flex-md-row">
          <div className={`${style.text} col-12 col-sm-6 p-4`}>
            <ul>
              <li className="mb-3  fs-5 fw-medium">
                <FontAwesomeIcon className="text-success ms-1" icon={faCheck} />{" "}
                بياناتك كلها فى امان
              </li>
              <li className="mb-3  fs-5 fw-medium">
                <FontAwesomeIcon className="text-success ms-1" icon={faCheck} />{" "}
                اكتر من 60.000 طبيب
              </li>
              <li className="mb-3  fs-5 fw-medium">
                <FontAwesomeIcon className="text-success ms-1" icon={faCheck} />{" "}
                اكتر من 30.000 معمل
              </li>
              <li className="mb-3  fs-5 fw-medium">
                <FontAwesomeIcon className="text-success ms-1" icon={faCheck} />{" "}
                اكتر من 25.000 مركز اشعه
              </li>
              <li className="mb-3  fs-5 fw-medium">
                <FontAwesomeIcon className="text-success ms-1" icon={faCheck} />{" "}
                بياناتك كلها فى مكان واحد
              </li>
              <li className="mb-3  fs-5 fw-medium">
                <FontAwesomeIcon className="text-success ms-1" icon={faCheck} />{" "}
                توفير الوقت والجهد{" "}
              </li>
              <li className="mb-3  fs-5 fw-medium">
                <FontAwesomeIcon className="text-success ms-1" icon={faCheck} />{" "}
                تحسين تجربه المريض
              </li>
              <li className="mb-3  fs-5 fw-medium">
                <FontAwesomeIcon className="text-success ms-1" icon={faCheck} />{" "}
                تحسين جوده الرعايه
              </li>
              <li className="mb-3  fs-5 fw-medium">
                <FontAwesomeIcon className="text-success ms-1" icon={faCheck} />{" "}
                الحد من اخطاء الروشته الورقيه
              </li>
              <li className="mb-3  fs-5 fw-medium">
                <FontAwesomeIcon className="text-success ms-1" icon={faCheck} />
                التطبيق مجانى تماما
              </li>
            </ul>
          </div>
          <div className={`${style.image} col-12 col-sm-6`}>
            <img src={require("../images/pg25.jpg")} alt="Thinking_img" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
