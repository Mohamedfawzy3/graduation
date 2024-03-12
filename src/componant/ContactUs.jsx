import React from "react";
import style from "../styles/contactus.module.css";
const ContactUs = () => {
  return (
    <div>
      <section className={`${style.contact_us} text-center py-4`}>
        <h2 className="fs-2 fw-bold mb-5">تواصل معنا</h2>

        <div
          className={`${style.box} container d-flex  justify-content-between flex-column flex-lg-row`}
        >
          <div
            className={`${style.contact_info}  p-3 mb-5 mb-lg-0 ms-0 ms-lg-4 `}
          >
            <div className={`${style.phone} mb-3 py-3`}>
              <h4>التليفون</h4>
              <div className="fs-6 fw-medium">02-2274184</div>
            </div>
            <div className={`${style.email} mb-3 py-3`}>
              <h4>الايميل</h4>
              <div className="fs-6 fw-medium">Life@gmail.com</div>
            </div>
            <div className={`${style.adress} mb-3 py-3 `}>
              <h4>العنوان</h4>
              <div className="fs-6 fw-medium">
                كليه العلوم-جمال عبدالناصر-شبين الكوم-منوفيه
              </div>
            </div>
            <div className={`${style.whatsapp} py-3`}>
              <h4>واتساب</h4>
              <div className="fs-6 fw-medium">01033595533</div>
            </div>
          </div>
          <div className={`${style.contact_form} col-12 col-lg-8 p-4 `}>
            <form action="">
              <p className="border-bottom text-end fw-medium">
                دعنا نستقبل استفساراتك بكل سرور
              </p>
              <div className="d-flex mb-3 flex-column flex-lg-row ">
                <input
                  className="mb-3 mb-lg-0 ms-lg-3"
                  type="text"
                  placeholder="كتب اسمك"
                  name="name"
                />
                <input
                  className="mb-3 mb-lg-0 ms-lg-3"
                  type="email"
                  placeholder="ادخل الايميل"
                  name="email"
                />
                <input
                  className="  "
                  type="number "
                  placeholder="ادخل رقم الهاتف"
                  name="phone"
                />
              </div>
              <div>
                <textarea
                  name="subject"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="اكتب هنا الاستفسار او المشكله او المقترح"
                ></textarea>
              </div>
              <button className="btn btn-success mt-4 " type="submit">
                ارسل الان
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
