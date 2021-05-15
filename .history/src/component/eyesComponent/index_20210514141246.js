import React from 'react'
import './index.css'

// eslint-disable-next-line 
export default (props) => {
    return (
        <div className="container">
        {/* <!-- 写轮眼 --> */}
        <div className="zuo">
           {/*  <!-- 眼睛最中间那个黑点 --> */}
            <div className="zuoZong">
                {/* <!-- 三勾玉所在的圈 --> */}
                <div className="zuoYu">
                    {/* <!-- 三个勾玉 --> */}
                    <span className="yu"></span>
                    <span className="yu"></span>
                    <span className="yu"></span>
                </div>
            </div>
        </div>
        {/* 轮回眼 */}
        <div className="you">
            {/* 眼睛最中间那个黑点 */}
            <div className="dian"></div>
                {/* <!-- 3个轮回圈 --> */}
                <div className="youYu">                        
                    <span
                        className="quan"
                        style={{'--r': 2}}
                    ></span>
                    <span
                        className="quan"
                        style={{'--r': 3}}
                    ></span>
                    <span
                        className="quan"
                        style={{'--r': 4}}
                    ></span>
                </div>       
        </div>
        </div>
    )
}