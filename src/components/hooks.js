import {useState,useEffect} from 'react';

export function useSessionStorage() {
  const [current,setCurrent] = useState(0);
  
  useEffect(()=>{
    let saved = sessionStorage.getItem('currentQuestion');
    if (saved) {
      setCurrent(parseInt(saved));
    } else {
      sessionStorage.setItem('currentQuestion','0');
      setCurrent(0);
    }
  },[]);
  
  function previos() {
    setCurrent(old=>{
      let update = old===0?old:old-1;
      sessionStorage.setItem('currentQuestion',update.toString());
      return update;
    });
  }
  
  function next(last) {
    setCurrent(old=>{
      let update = old===last?old:old+1;
      sessionStorage.setItem('currentQuestion',update.toString());
      return update;
    });
  }
  
  return [current,previos,next];
}