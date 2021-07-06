import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react"

function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current,{
            backDelay:1500,
            backSpeed:10,
            showCursor:true,

            strings:["An UnderGrad from IIIT-Hyderabad","Pursuing Research in Computational Humanities","Also I am a Developer"]
        })




    },[]);
    return (
        <div className="intro" id="intro">

            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>

            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm </h2>
                    <h1>Swamy Naidu</h1>
                    <h3>  <span ref={textRef}></span></h3>
                </div>

                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>



            </div>
        
        </div>
    )
}

export default Intro
