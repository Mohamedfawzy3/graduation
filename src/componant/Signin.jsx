import React from "react";
import style from "../styles/sign.module.css";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div>
      <div className={`${style.body} d-flex align-center `}>
        <div
          className="container p-4 d-flex align-items-center"
          style={{ height: "100vh" }}
        >
          <div
            className={`${style.box} container col-lg-6 col-md-10 col-12 py-3 bg-white rounded-4 `}
          >
            <h2 className="text-center mb-4">تسجيل الدخول</h2>

            <form class="row g-3 col-md-10 mx-auto">
              <div class="col-12">
                <label for="UserName" class="form-label">
                  اسم الستخدم
                </label>
                <input
                  type="text"
                  class={`form-control ${style.inputChange}`}
                  placeholder="الرقم القومى او رقم الهاتف"
                  id="UserName"
                  onInvalid={(e) =>
                    e.target.setCustomValidity("برجاء ادخال اسم مستخدم صحيح")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
              </div>

              <div class="col-md-12">
                <label for="password" class="form-label">
                  الباسورد
                </label>

                <input
                  type="password"
                  class={`form-control ${style.inputChange}`}
                  name="password"
                  id="password"
                  placeholder=""
                  aria-describedby="inputGroupPrepend2"
                  required
                />
              </div>

              <div class="col-12 text-center">
                <button class="btn btn-dark " type="submit">
                  تسجيل الدخول
                </button>
              </div>
              <div className="text-center">
                ليس لديك حساب؟{" "}
                <span>
                  <Link to="/signup">انشاء حساب</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
