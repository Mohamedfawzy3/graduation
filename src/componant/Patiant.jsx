import React, { useEffect, useState } from "react";
import style from "../styles/Patiant.module.css";
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faPhone,
  faTriangleExclamation
  
} from "@fortawesome/free-solid-svg-icons";

const Patiant = () => {
  let [important_issues,setImportant_issues]=useState([])
  const [patient,setPatient]=useState({})
  const [issues,setIssues]=useState([])
  const [contact_info,setContact_info]=useState({})
 
  useEffect(()=>{
    const getPatiantInfo=()=>{
      axios.get("https://fake-data-oj4s.onrender.com/patiants/0")
      .then(res=>{setPatient(res.data)
        setImportant_issues(res.data.important_medical_issues)
        setContact_info(res.data.contact_info)
      })
      .catch(err=>console.log(err))
    }
  getPatiantInfo();
 
  },[])
 
 
  return (
    <div className={`${style.info_page}`}>
        <div className="container">
      <div className="d-flex justify-content-between gap-2 flex-column flex-sm-row ">
        <div className={`${style.main_info} d-flex flex-wrap col-12 col-sm-8 p-3 m-0`}>
          <p className="border-bottom text-center fw-bold pb-2 col-12">البيانات الاساسيه</p>
          <div className="col-12 pb-4">
            الاسم <br />
            <span className="fw-medium">{patient.name}</span>
          </div>
          <div className="col-3">
            {" "}
            <div>
              العمر
              <br /> <span>{patient.age}</span>
            </div>
            <div>
              النوع
              <br />
              <span>{patient.gender==1?"ذكر":"انثى"}</span>
            </div>
            <div>
              تاريخ الميلاد
              <br />
              <span>{patient.birth_date}</span>
            </div>
            <div>
              فصيله الدم
              <br />
              <span>{patient.blood_type}</span>
            </div>
          </div>
          <div className="col-9">
            <div>
              <FontAwesomeIcon icon={faPhone} />
             
              <span className="me-2">{contact_info.phone}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="me-2">
                <a href={`mailto:${contact_info.email}`}>
                 {contact_info.email}
                </a>
              </span>
            </div>
            <div>
              <FontAwesomeIcon icon={faHouse} />
              <span className="me-2">{contact_info.adress?.govern }-{contact_info.adress?.city}-{contact_info.adress?.street}</span>
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
        <div className={`${style.important_info} container d-flex flex-wrap flex-column flex-sm-row` }  >
    
{important_issues.map((el,index)=>{
  return(
    <div key={index} className="bg-light p-2">
    <p className="fw-bold"><span className="text-danger"><FontAwesomeIcon icon={faTriangleExclamation} /></span> {el.issue}</p>
   {
    el.facts.map((el)=>{
      return(
        <p  className=""> <div className=" ">{el}</div></p>
      )
    })
   }
    </div>
  )
 })
}
        </div>
      </section>
      </div>
    </div>
  );
};

export default Patiant;
