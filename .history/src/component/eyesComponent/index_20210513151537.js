import React from 'react'
import './index.css'

export default () => {
    return (
        <div>
        {/* <!-- 血轮眼 --> */}
        <div class="zuo">
           {/*  <!-- 眼睛最中间那个黑点 --> */}
            <div class="zuoZong">
                {/* <!-- 三勾玉所在的圈 --> */}
                <div class="zuoYu">
                    {/* <!-- 三个勾玉 --> */}
                    <span class="yu"></span>
                    <span class="yu"></span>
                    <span class="yu"></span>
                </div>
            </div>
        </div>
        {/* 轮回眼 */}
        <div class="you">
            {/* 眼睛最中间那个黑点 */}
            <div class="dian"></div>
                {/* <!-- 3个轮回圈 --> */}
                <div class="youYu">                        
                    <span class="quan" style="--r:2;"></span>
                    <span class="quan" style="--r:3;"></span>
                    <span class="quan" style="--r:4;"></span>
                </div>       
        </div>
        </div>
    )
}