import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const Parent = () => {
    const [age, setage] = useState(25)
    const [salary, setsalary] = useState(5000)

    const incremntAge = useCallback(()=>{
setage(age+1)
    },[age])
    const incrementSalary = useCallback(() => {
      setsalary(salary + 1000)
    },[salary])
  return (
    <div>
        <Title/>
        <Count text = "Age" count = {age}/>
        <Button handleClick= {incremntAge}>increment Age</Button>
        <Count text= "Salary" count={salary}/>
        <Button handleClick={incrementSalary}>increment Salary</Button>
    </div>
  )
}

export default Parent