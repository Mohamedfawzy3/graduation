import React, { useEffect, useState } from "react";
import style from "../../styles/sign.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUP = () => {
  const [gov, setGov] = useState("");
  const [index, setIndex] = useState();
  let [flag, setFlag] = useState(false);
  let Navigate = useNavigate();
  const handleCity = (e) => {
    console.log(e.target.value);
    setGov(e.target.value);
    setFlag(true);
    const selectedOption = e.target.options[e.target.selectedIndex];
    setIndex(selectedOption.getAttribute("index"));
    console.log("Index of selected option:", index);
  };
  const Government = () => {
    axios
      .get("https://atfawry.fawrystaging.com/ECommerceWeb/api/lookups/govs")
      .then((res) => {
        console.log(res.data[0].cityDataModels);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    Government();
  }, []);
  const [city, setCity] = useState([
    [1],
    [10, 30],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
    [10],
    [
      "شبين الكوم",
      "الباجور",
      "الشهداء",
      "قويسنا",
      "منوف",
      "سرس الليان",
      "بركه السبع",
      "تلا",
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

 
  let [user_info, setUser_info] = useState({
    email: "",
    phone: "",
    gov: "",
    city: "",
    street: "",
    password: "",
  });
  const HandleSumbit = (e) => {
    
    if (e.target.name === gov) {
      setGov(e.target.value);
      setFlag(true);
      const selectedOption = e.target.options[e.target.selectedIndex];
      setIndex(selectedOption.getAttribute("index"));
      console.log("Index of selected option:", index);
    }
    const { name, value } = e.target;
    setUser_info((old) => ({
      ...old,
      [name]: value,
    }));
    console.log(user_info);
  };
  let goToNextPage = (e) => {
    e.preventDefault();
    if (user_info.password === user_info.RePassword) {
      Navigate(`/signup/${user_info.user}`);
    } else {
      console.log("password not the smae");
    }
  };
  return (
    <div className={`${style.body}`}>
      <div className={`container p-4`}>
        <div
          className={`${style.foir} container col-lg-8 col-sm-12 py-3 bg-white rounded-4 `}
        >
          <h2 className="text-center mb-4">انشاء حساب</h2>
          <div className={`text-center`}>
            <span></span>
            <span></span>
          </div>
          <form class="row g-3 col-md-10 mx-auto" onSubmit={goToNextPage}>
            {/* <div class="col-md-6">
              <label for="validationDefault01" class="form-label">
                الاسم الاول
              </label>
              <input
                type="text"
                class={`form-control ${style.inputChange}`}
                placeholder="الاسم الاول"
                id="validationDefault01"
                onInvalid={(e) =>
                  e.target.setCustomValidity("برجاء ادخال اسم صحيح")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
              />
            </div>
            <div class="col-md-6">
              <label for="validationDefault02" class="form-label">
                اسم العائله
              </label>
              <input
                type="text"
                class={`form-control ${style.inputChange}`}
                id="validationDefault02"
                placeholder="اسم العائله"
                required
              />
            </div> */}
            <div class="col-md-12">
              <label for="email" class="form-label">
                البريد الالكترونى
              </label>

              <input
                type="email"
                class={`form-control ${style.inputChange}`}
                name="email"
                id="email"
                placeholder="Example@gmail.com"
                aria-describedby="inputGroupPrepend2"
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity("برجاء ادخال بريد الكترونى صحيح")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                value={user_info.email}
                onChange={HandleSumbit}
              />
            </div>
            {/* <div class="col-md-12">
              <label for="id" class="form-label">
                الرقم القومى
              </label>
              <input
                type="number"
                class={`form-control ${style.inputChange}`}
                id="id"
                name="id"
                placeholder="ادخل 14 رقم"
                required
              />
            </div> */}
            <div class="col-md-12">
              <label for="phone" class="form-label">
                الهاتف
              </label>
              <input
                type="tel"
                class={`form-control ${style.inputChange}`}
                name="phone"
                id="phone"
                placeholder="ادخل رقم الهاتف المحمول"
                required
                value={user_info.phone}
                onChange={HandleSumbit}
              />
            </div>
            <div class="col-6">
              <label for="gov" class="form-label">
                المحافظه
              </label>
              <select
                class="form-select"
                id="gov"
                onChange={(e) => {
                  HandleSumbit(e);
                  handleCity(e);
                }}
                required
                name="gov"
                value={user_info.gov}
              >
                <option selected disabled value="">
                  اختر المحافظه
                </option>
                <option value="القاهرة" index={0}>
                  القاهرة
                </option>
                <option value="الإسكندرية" index={1}>
                  الإسكندرية
                </option>
                <option value="الجيزة" index={2}>
                  الجيزة
                </option>
                <option value="الشرقية" index={3}>
                  الشرقية
                </option>
                <option value="الدقهلية" index={4}>
                  الدقهلية
                </option>
                <option value="البحر الأحمر" index={5}>
                  البحر الأحمر
                </option>
                <option value="الغربية" index={6}>
                  الغربية
                </option>
                <option value="الفيوم" index={7}>
                  الفيوم
                </option>
                <option value="الإسماعيلية" index={8}>
                  الإسماعيلية
                </option>
                <option value="كفر الشيخ" index={9}>
                  كفر الشيخ
                </option>
                <option value="مطروح" index={10}>
                  مطروح
                </option>
                <option value="المنوفية" index={11}>
                  المنوفية
                </option>
                <option value="قنا" index={12}>
                  قنا
                </option>
                <option value="الأقصر" index={13}>
                  الأقصر
                </option>
                <option value="أسوان" index={14}>
                  أسوان
                </option>
                <option value="سوهاج" index={15}>
                  سوهاج
                </option>
                <option value="بني سويف" index={16}>
                  بني سويف
                </option>
                <option value="الوادي الجديد" index={17}>
                  الوادي الجديد
                </option>
                <option value="البحيرة" index={18}>
                  البحيرة
                </option>
                <option value="شمال سيناء" index={19}>
                  شمال سيناء
                </option>
                <option value="جنوب سيناء" index={20}>
                  جنوب سيناء
                </option>
                <option value="السويس" index={21}>
                  السويس
                </option>
                <option value="المنيا" index={22}>
                  المنيا
                </option>
                <option value="دمياط" index={23}>
                  دمياط
                </option>
                <option value="الشرقية" index={24}>
                  الشرقية
                </option>
                <option value="البحر الأحمر" index={25}>
                  البحر الأحمر
                </option>
                <option value="الوادي الجديد" index={26}>
                  الوادي الجديد
                </option>
              </select>
            </div>
            <div class="col-6">
              <label for="city" class="form-label">
                المدينه
              </label>
              <select
                class="form-select"
                id="city"
                disabled={!flag}
                required
                name="city"
                value={user_info.city}
                onChange={HandleSumbit}
              >
                <option selected disabled value="">
                  اختر مدينه
                </option>
                {flag
                  ? city[index].map((el) => {
                      return <option value={el}>{el}</option>;
                    })
                  : null}
              </select>
            </div>
            <div class="col-sm-12">
              <label for="validationDefault03" class="form-label">
                اسم الشارع
              </label>
              <input
                type="text"
                class={`form-control round-1 ${style.inputChange}`}
                id="validationDefault03"
                placeholder="اسم الشارع"
                required
                name="street"
                value={user_info.street}
                onChange={HandleSumbit}
              />
            </div>

            <div class="col-md-12 ">
              <label for="users" class="form-label">
                هل انت؟
              </label>
              <div className="d-sm-flex justify-content-between">
                <div class={`${style.users}`}>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="user"
                    value="patient"
                     onChange={HandleSumbit}
                    id="patient"
                  />
                  <label class="form-check-label me-1" for="patient">
                    مريض
                  </label>
                </div>
                <div class={`${style.users}`}>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="user"
                     value="doctor"
                     onChange={HandleSumbit}
                    id="doctor"
                  />
                  <label class="form-check-label me-1" for="doctor">
                    طبيب
                  </label>
                </div>
                <div class={`${style.users}`}>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="user"
                    value="Pharmacy"
                     onChange={HandleSumbit}

                    id="pharmacy"
                  />
                  <label class="form-check-label me-1" for="pharmacy">
                    صيدليه
                  </label>
                </div>
                <div class={`${style.users}`}>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="user"
                    value="lab"
                     onChange={HandleSumbit}
                    id="laboratory"
                  />
                  <label class="form-check-label me-1" for="laboratory">
                    معمل تحاليل
                  </label>
                </div>
                <div class={`${style.users}`}>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="user"
                    value="x-ray"
                     onChange={HandleSumbit}
              
                    id="x-ray"
                  />
                  <label class="form-check-label me-1" for="x-ray">
                    معمل اشعه
                  </label>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <label for="pass" class="form-label">
                الباسورد
              </label>
              <input
                type="password"
                class={`form-control ${style.inputChange}`}
                id="pass"
                placeholder="ادخل باسورد"
                required
                name="password"
                value={user_info.password}
                onChange={HandleSumbit}
              />
            </div>

            <div class="col-md-6">
              <label for="pass2" class="form-label">
                اعد الباسورد
              </label>
              <input
                type="password"
                class={`form-control ${style.inputChange}`}
                id="pass2"
                placeholder="اعد كتابه الباسورد"
                required
                name="RePassword"
                onChange={HandleSumbit}
              />
            </div>
            {/* <input type="date" name="date" onChange={HandleSumbit} /> */}
            <div class="col-12  text-center">
              <button class="btn btn-dark">التالى</button>
            </div>
            <div className="text-center">
              لديك حساب بالفعل؟{" "}
              <span>
                <Link to="/signin">تسجيل الدخول</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
