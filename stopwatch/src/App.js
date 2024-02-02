import React, { useEffect, useState } from 'react'

const App = () => {
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [hour, setHour] = useState(0)
  const [run, setRun] = useState(false)
  // const increment = ()=>{
  //   
  // }

  // 
  useEffect(() => {
    let seconds = null;
   if(run){
     seconds= setInterval(() => {
      setSec((prevSecond)=>{
      if(prevSecond ===59){
       setMin((prevMin)=>{
         if(prevMin ===59){
           setHour((prevHour)=>prevHour+1)
           return 0
         }
         else{
           return prevMin+1
         }
       })
       return 0
      }
      else{
       return prevSecond+1
      }
      })
    }, 200);

   }
       return ()=> clearInterval(seconds)
  }, [run])


  const handleStart = ()=>{
    console.log("start")
setRun(true)
  }
  const handleStop = ()=>{
    console.log("stopped");
   setRun(false)
  }
  function handleReset() {
    console.log("reset")
    setHour(0)
    setMin(0)
    setSec(0)
  }
  
  return (
    <div>
      <p style={{fontSize:"50px"}}>{hour<10?"0"+hour:hour}:{min<10?"0"+min:min}:{sec<10?"0"+sec:sec}</p>
      <button onClick={handleStart} style={{margin:"10px",fontSize:"30px",color:"white", padding:"20px",backgroundColor:"green"}} >Start</button>
      <button onClick={handleStop} style={{margin:"10px",fontSize:"30px",color:"white", padding:"20px",backgroundColor:"red"}}>Stop</button>
      <button onClick={handleReset} style={{margin:"10px",fontSize:"30px",color:"white", padding:"20px",backgroundColor:"blue"}}>Reset</button>
    </div>
  )
}

export default App