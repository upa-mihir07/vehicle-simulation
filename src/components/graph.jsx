import React,{useState, useEffect} from 'react'
import styled, { keyframes } from 'styled-components'


const pulseD = (posY, posX)=> keyframes`
    0% {
        transform : translateY(0px) 
    }
    100% {
        top: calc(36vh);
    }
`
const pulseU = (posY, posX)=> keyframes`
    0% {
        transform : translateY(0px) 
    }
    100% {
        top: 0px
    }
`
const pulseB = (posY, posX)=> keyframes`
    0% {
        transform : translateX(0px) 
    }
    100% {
        left: 0px
    }
`
const pulseF = (posY, posX)=> keyframes`
    0% {
        transform : translateX(0px) 
    }
    100% {
        left: calc(67vw);
    }
`

const Bar = styled.div`
  height: 40px;
  width: 40px; 
  border-radius: 50%;
  background-color: ${(props) => props.colour};
  position: absolute; 
  top: ${(props) => props.posY}px;
  left: ${(props) => props.posX}px;
  display: flex; 
  justify-content: center;
  align-items: center;
  animation:  ${(props) => {
    if(props.dir === "Upward")
        return pulseU(props.posY, props.posX) 
    else if(props.dir === "Backward")
        return pulseB(props.posY, props.posX)
    else if(props.dir === "Forward")
        return pulseF(props.posY, props.posX)
    else if(props.dir === "Downward")
        return pulseD(props.posY, props.posX)
}} ${(props) => {
    if(props.dir === "Upward")
        return 80/props.speed 
    else if(props.dir === "Backward")
        return 120/props.speed
    else if(props.dir === "Forward")
        return 120/props.speed
    else if(props.dir === "Downward")
        return 80/props.speed 
}}s linear;
  animation-iteration-count: 1;
  animation-play-state: ${(props) => props.status};
  animation-fill-mode: forwards;
  z-index: ${(props) => props.z}
  color: white;
`

const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const colours = ['rebeccapurple', 'palevioletred', 'orange', 'green', 'brown', 'green']

function Graph({veh, status}) {
    const [cnt, setCnt] = useState(0)

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "./ca.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

  return (
    
    <div style={{ height:'40vh', width: '100%', backgroundColor: "bisque", boxSizing: 'border-box', marginTop: '1vh', overflow: 'hidden', position: 'relative'}} onAnimationEnd={() => setCnt(prev=>prev+1)} >  
        {
            veh.map((v, i) => {
                return <Bar key={i} posY={v.posY} posX={v.posX} dir={v.direction} speed={v.speed} status={status} z={i+1} colour={colours[i%colours.length]} cnt={cnt}>
                        <h5>{v.vehicleID}</h5>
                    </Bar>

            })
        }
        {
            num.map((n,i) => {
                return <div key={i} style={{position: 'absolute', height: '100%', width: '1px', top: '0px', left: `${n*5}vw`, backgroundColor: 'black', opacity: '0.3'}}></div>
            })
        }
        {
            num.map((n,i) => {
                return <div key={i} style={{position: 'absolute', height: '1px', width: '100%', left: '0px', top: `${n*5}vh`, backgroundColor: 'black', opacity: '0.3'}}></div>
            })
        }

    </div>
  )
}

export default Graph;