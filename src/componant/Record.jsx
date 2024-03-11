
import style from "../styles/record.module.css";
import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";
const Record = () => {

  return (
    <>
   
    <section className={`${style.record} `}>
      <div className="container py-4">
        <h3 className="text-center py-3">السجل الطبى</h3>
        <div className={`${style.content_Box } `}>
<div className={`${style.side_bar} text-center `}>
    <ul >
    <li>
  <Link to="rosheta">الزيارات</Link>
  <Link to="tahalil">التحاليل</Link>
  <Link to="ashea">الاشعه</Link>
</li>
    </ul>
</div>
<div className=""><Outlet/></div>
        </div>
       
      </div>
    </section>
    </>
  );
};

export default Record;
