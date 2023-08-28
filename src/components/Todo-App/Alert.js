import React, { useEffect } from 'react'

const Alert = ({alert, removeShow ,list}) => {
        const{ style, message}=alert
        useEffect(()=>{
            const setTime= setTimeout(()=>{
                removeShow()
            },1000)
            return ()=> clearTimeout(setTime)
        },[list])
  return (
    <div>
        <p className={`show btn-${style}`}>{message}</p>
    </div>
  )
}

export default Alert
