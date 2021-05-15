import React, { Fragment, useEffect, useState } from 'react'
import EyesComponent from './component/eyesComponent'
import LoginCom from './component/formLogin'


// eslint-disable-next-line 
export default () => {
  const [time, setTime] = useState(true);
  const [transitionEnd, setTransitionEnd] = useState(true)
  useEffect(() => {
    let timer = setTimeout(() => {
      setTime(false)
    }, 5000)
    return () => {
      timer = null
    }
  }, [])
  useEffect(() => {
    let el = document.getElementById("flagOpcity");
    el && el.addEventListener('transitionend', handle)
    function handle() {
      setTransitionEnd(false)
    }
    return () => { 
      ele && ele.removeEventListener('transitionend', handle);
    }
  }, []);
  return (
    <Fragment>
      {
        transitionEnd ? (
          <div id="flagOpcity" style={{
            opacity: time ? 1 : 0,
            'transitionProperty': 'opacity',
            'transitionDuration': '3s'
          }}>
            <EyesComponent />
          </div>
        ) : <LoginCom transitionEnd={transitionEnd}/>
      }
    </Fragment>
  )
}