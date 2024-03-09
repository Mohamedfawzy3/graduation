import React from 'react';
import style from '../styles/record.module.css'
const Record = () => {
    return (
        <section className={`${style.record} `}>
            <div className='container py-4'>

            <h3 className='text-center py-3'>السجل الطبى</h3>
            <div className={`${style.Box}`}>
                <div className={`${style.box}`}>
 <div className='p-3 w-fit-content'>
 <div>الدكتور</div>
                    <h3>امير مكرم المرزوقى</h3>
                    <div>اخصائى الباطنه وامراض القلب</div>
 </div>
                    <div className={`${style.main_content} bg-white`}>
                        <h4>الروشته</h4>
                        <div>
                            <ul>
                                <li>Pandol extra <br /> <span>كبسوله بعد الفطار والعشاء</span></li>
                                <li>Lorazepam<br /><span>كبسوله قبل الغداء</span></li>
                                <li>Levothyroxine<br /><span> كبسوله قبل العشاء</span></li>
                                <li>Centrum<br /><span>كبسوله يوميا بعد الغداء</span></li>
                                <li>Glucose Solution 5%<br /><span>كل 24 ساعه</span></li>
                                <li>Cyanocobalamin<br /><span>حقنه كل 12 ساعه</span></li>
                                
                            </ul>
                        </div>
                        <h4>التحاليل</h4>
                        <div>
<div>Liver Function Tests</div>
<div>Urine Glucose Test</div>
                        </div>
                        <h4>الاشعه</h4>
                        <div>
                            <div>Abdominal X-ray</div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </section>
    );
};

export default Record;