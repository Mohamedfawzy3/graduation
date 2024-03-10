import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import style from '../styles/rosheta.module.css'
const Rosheta = () => {
    const [visition_info, setVisition_info] = useState({});
    useEffect(() => {
      axios
        .get("https://fake-data-oj4s.onrender.com/patiants/0")
        .then((res) => {
          setVisition_info(res.data.visite);
        })
        .catch((err) => console.log(err));
    }, []);
    return (
        <div className={`${style.Box}`}>
        {visition_info &&Array.isArray(visition_info)&&
          visition_info.map((el, index) => {
            return (
              <div className={`${style.box}`} key={index}>
                <div className="p-3 w-fit-content">
                  <div>الدكتور</div>
                  <h3>{el.doctor}</h3>
                  <div>{el.dep}</div>
                  <div>{el.info?.phone}</div>
                </div>
                <div className={`${style.main_content} bg-white`}>
                  <h4>الروشته</h4>
                  <div>
                    {el &&
                      el.rosheta &&
                      el.rosheta.map((el, index) => {
                        return (
                          <p key={index}>
                            <div>{el.name}</div>
                            <div>{el.description}</div>
                          </p>
                        );
                      })}
                  </div>
                  <h4>التحاليل</h4>
                  <div>
                    {el &&
                      el.tahlil &&
                      el.tahlil.map((el, index) => {
                        return <p key={index}>{el}</p>;
                      })}
                  </div>
                  <h4>الاشعه</h4>
                  <div>
                    {el &&
                      el.ashea &&
                      el.ashea.map((el, index) => {
                        return <p key={index}>{el}</p>;
                      })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
};

export default Rosheta;