import React, { useRef } from 'react'

const UncontrolledForm = () => {
    const nameRef = useRef()
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(nameRef.current.value);
    }
  return (
    <div>
        <h1>uncontrolled component form handled by DOM </h1>
        <form onSubmit={handleSubmit}>
            <label>FirstName:</label>
            <input  type="text" ref={nameRef}/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default UncontrolledForm