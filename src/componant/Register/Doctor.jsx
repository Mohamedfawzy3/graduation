import React, { useState } from 'react';
import style from '../../styles/sign.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Doctor = () => {
  let [user_info,setUser_info]=useState({})
  const HandleSumbit = (e) => {

    const { name, value } = e.target;
    setUser_info((old) => ({
      ...old,
      [name]: value,
    }));
    console.log(user_info);
  };
  let creat_user = (e) => {
    e.preventDefault();
   axios.post("https://fake-data-oj4s.onrender.com/users",user_info)
   .then(res=>{
    console.log(res)
   })
   .catch(err=>console.log(err))
    };
    return (
        <div>
          
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
          <form class="row g-3 col-md-10 mx-auto" onSubmit={creat_user}>
            <div class="col-md-6">
              <label for="validationDefault01" class="form-label">
              الاسم
              </label>
              <input
                type="text"
                class={`form-control ${style.inputChange}`}
                placeholder="ادخل الاسم كاملا"
                id="validationDefault01"
                onInvalid={(e) =>
                  e.target.setCustomValidity("برجاء ادخال اسم صحيح")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
                name='name'
                onChange={HandleSumbit}
              />
            </div>
            <div class="col-md-6">
              <label for="validationDefault02" class="form-label">
              اسم المستخدم
              </label>
              <input
                type="text"
                class={`form-control ${style.inputChange}`}
                id="validationDefault02"
                placeholder="ادخل اللقب او اسم المستخدم"
                required
                name='userName'
                onChange={HandleSumbit}
              />
            </div>
            
            <div class="col-md-12">
              <label for="id" class="form-label">
                الرقم القومى
              </label>
              <input
                type="number"
                class={`form-control ${style.inputChange}`}
                id="id"
                
                placeholder="ادخل 14 رقم"
                required
               name='idNumber'
                onChange={HandleSumbit}
              />
            </div>
            <div class="col-md-12">
              <label for="department" class="form-label">
             التخصص
              </label>
              <input
                type="text"
                class={`form-control ${style.inputChange}`}
                placeholder="ادخل التخصص"
                id="department"
                onInvalid={(e) =>
                  e.target.setCustomValidity("برجاء ادخل التخصص")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
                name='department'
                onChange={HandleSumbit}
              />
            </div>
                       <div class="col-md-12" >
              <label for="gender" class="form-label d-block">
                النوع
              </label>
              <div class={`${style.users}`}>
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  value='male'
                  id="gender1"
                  onChange={HandleSumbit}
                />
                <label class="form-check-label me-1" for="gender1">
                  ذكر
                </label>
              </div>
              <div class={` ${style.users}`}>
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  value='female'
                  id="gender2"
                  onChange={HandleSumbit}
                />
                <label class="form-check-label me-1" for="gender2">
                  انثى
                </label>
              </div>
            </div>


          
            <div class="col-12  text-center">
              <button class="btn btn-dark" type="submit">
                انشاء حساب
              </button>
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
        </div>
    );
};

export default Doctor;