import React from 'react'

const Count = ({count,text}) => {
    console.log(`rendering ${text}`)
  return (
    <div>
        {text} - {count}
    </div>
  )
}

export default React.memo(Count)