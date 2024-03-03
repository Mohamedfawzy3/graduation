import React, { useEffect, useState } from "react";
import style from "../styles/Patiant.module.css";
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faPhone,

  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";

const Patiant = () => {
  const [patiant,setPatiant]=useState({})
  const [issues,setIssues]=useState([])
  const getPatiantInfo=()=>{
    axios.get('http://localhost:5000/patiants/0')
    .then(res=>{setPatiant(res.data)
    console.log(res)})
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
  getPatiantInfo();
  
  },[])
  setIssues(patiant)
  console.log(patiant)
  return (
    <div className={`${style.info_page}`}>
        <div className="container">
      <div className="d-flex justify-content-between gap-2 flex-column flex-sm-row ">
        <div className={`${style.main_info} d-flex flex-wrap col-12 col-sm-8 p-3 m-0`}>
          <p className="border-bottom text-center fw-bold pb-2 col-12">البيانات الاساسيه</p>
          <div className="col-12 pb-4">
            الاسم <br />
            <span className="fw-medium">محمد فوزى ابوالعينين</span>
          </div>
          <div className="col-3">
            {" "}
            <div>
              العمر
              <br /> <span>22</span>
            </div>
            <div>
              النوع
              <br />
              <span>ذكر</span>
            </div>
            <div>
              تاريخ الميلاد
              <br />
              <span>9/4/2002</span>
            </div>
            <div>
              فصيله الدم
              <br />
              <span>O</span>
            </div>
          </div>
          <div className="col-9">
            <div>
              <FontAwesomeIcon icon={faPhone} />{" "}
              <span className="me-2">01024869884</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <span className="me-2">
                <a href="mailto:mohameedromail94@gmail.com">
                  mohammedromail@gmail.com
                </a>
              </span>
            </div>
            <div>
              <FontAwesomeIcon icon={faHouse} />{" "}
              <span className="me-2">ابوسنيطه-الباجور-منوفيه</span>
            </div>
          </div>
        </div>
        <div className={`${style.var_info} col-12 col-sm-4 p-3`}>
          <p className="text-center fw-bold pb-2 border-bottom">معلومات اخرى</p>
          <div style={{direction:"ltr"}} className="mb-3"><img src={require('../images/blood-presure3.png')} alt="blood_presusre_icon" style={{width:"30px"}}/><span className="ms-2">120/80 mm</span></div>
          <div style={{direction:"ltr"}} className="mb-3"><img src={require('../images/height.png')} alt="height_icon" style={{width:"30px"}}/><span className="ms-2">165 cm</span></div>
          <div style={{direction:"ltr"}} className="mb-3"><img src={require('../images/weight.png')} alt="weight_icon" style={{width:"30px"}}/><span className="ms-2">70 kg</span></div>
        </div>
      </div>
      {/* Create the section of the important info about patiant  */}
      <section className="my-5 bg-white rounded-4">
        <h2 className="text-center py-4 ">معلومات هامه</h2>
        <div className={`${style.important_info} container ` }  >
        <p className="d-flex align-items-center"> <span className="text-primary"><FontAwesomeIcon icon={faCircleCheck} /></span> <div className="ms-2 fw-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatum animi laudantium fuga ad ea expedita, pariatur nisi sapiente. Ullam ex unde dolore</div></p>
       

        </div>
      </section>
      </div>
    </div>
  );
};

export default Patiant;
