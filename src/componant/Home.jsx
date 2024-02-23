import React, { useState } from "react";
import { useRef} from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope,faFlask,faStaffSnake,faUserDoctor,faRadiation } from '@fortawesome/free-solid-svg-icons'; 
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
    <div className={`${style.body_content}`}>
      <div className={`${style.Box}`}>
        <div className={`${style.nav} `}>
          <div className={`${style.navContainer} container d-flex justify-content-between align-items-center`}>
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
        <div className={`${style.box} container `}>
          <div className={`col-12 text-center text-sm-end col-sm-7 flex-left ${style.homeContent}`}>
            <div>صحتك بالدنيا</div>
           
            <p>
              علشان كده وفرنا عليك دوشه الورق . دلوقتى كل بياناتك فى جيبك
              تقدر توصلها فى اى وقت وتشاركها مع طبيبك او الصيدليه واماكن تانيه
            </p>
            <div>
              <button className={`${style.start_button}  ` } onClick={() => ChangePath('/signin')} >
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
<div className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}>
  <div className={`${style.image} col-2 col-lg-1 mb-3`}><FontAwesomeIcon icon={faUserDoctor} /></div>
<div>
<h3 className={style.kind}>الطبيب</h3>
  <div className={`${style.text} fs-5`}>الطبيب يقدر يطلع على ملفك الطبى ومن خلاله يقدر المعلومات الضروريه قبل اى تشخيص 
  ومن ثم الحصول على تشخيص سليم بناء ويقدر يضيفلك التحاليل والاشاعات المطلوبه وكمان يكتبلك روشته الكترونيهز</div>
</div>
</div>
<div className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}>
  <div className={`${style.image} col-2 col-lg-1 mb-3`}><FontAwesomeIcon icon={faStaffSnake} /></div>
<div>
<h3 className={style.kind}>الصيدليه</h3>
  <div className={`${style.text} fs-5`}>دلوقتى  الصيدليه تقدر تتطلع على حسابك وتشوف العلاج المطلوب ةتصرفه لك بكل سهول وبون اخطاء وكمان تقدر تتابع 
  قياس الضغط والسكر وغيره وتضيف البيانات دى لحسابك</div>
</div>
</div>
<div className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}>
  <div className={`${style.image} col-2 col-lg-1 mb-3`}><FontAwesomeIcon icon={faFlask} /></div>
<div>
<h3 className={style.kind}>معمل التحليل</h3>
  <div className={`${style.text} fs-5`}>  يقدر يطلع على التحاليل والفحوصات الموجوده فى ملفك والمصلوب اجرائها ومن ثم رفعها فى ملفك الطبى لتكون متاحه فلى وقت ويقدر طبيبك يطلع عليها </div>
</div>
</div>
<div className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}>
  <div className={`${style.image} col-2 col-lg-1 mb-3`}><FontAwesomeIcon icon={faRadiation} /></div>
<div>
<h3 className={style.kind}>معمل الاشعه</h3>
  <div className={`${style.text} fs-5`}>معمل الاشعه يقدر يشوف الفخوصات المطلوبه فى ملفك الطبى وبمجرد الانتهاء منها يتم رفع نتائج الفحوصات الى ملفك مباشره لتكون جاهزه للاطلع عليها من قبل طبيبك. </div>
</div>
</div>
        </section>
    </div>
  );
};

export default Home;
