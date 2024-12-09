import { useEffect, useRef } from 'react';
import '../../components/top/top.css';

const Top = _ => {
    const upRef = useRef(null);
   const handleUp = ()=>{
    if(window.scrollY >= 1000){
        upRef.current.style.display = "block";
    }else{
        upRef.current.style.display = "none"
    }
   }
  useEffect( _ => {
    window.addEventListener("scroll", handleUp);
    return () => {
        window.removeEventListener("scroll", handleUp); // Delete Event
    }
  },[]);
    return ( 
        <>
      <button className='up' ref={upRef} onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}>
      <i className="fa-solid fa-chevron-up"></i>
      </button>
        </>
     );
}
 
export default Top;