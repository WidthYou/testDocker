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
    let ele = document.getElementById("flagOpcity");
    ele && ele.addEventListener('transitionend', handle)
    function handle() {
      setTransitionEnd(false)
    }
    return () => { 
      ele && ele.removeEventListener('transitionend', handle);
    }
  }, []);
  const WrapEyesCom = (
    <div id="flagOpcity" style={{
      opacity: time ? 1 : 0,
      'transitionProperty': 'opacity',
      'transitionDuration': '3s'
    }}>
      <EyesComponent />
    </div>
  )
  return (
    <Fragment>
      <WrapEyesCom />
      {/* {
        transitionEnd ? <WrapEyesCom /> : <LoginCom transitionEnd={transitionEnd}/>
      } */}
    </Fragment>
  )
}