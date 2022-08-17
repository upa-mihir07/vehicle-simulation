import React,{useState} from 'react'
import styled, { keyframes, css } from 'styled-components'

// const pulseD = (posY, posX)=> keyframes`
//     0% {
//         transform : translateY(0px) 
//     }
//     100% {
//         transform : translateY(${posY}px) 
//     }
// `
// const pulseU = (posY, posX)=> keyframes`
//     0% {
//         transform : translateY(0px) 
//     }
//     100% {
//         transform : translateY(-${posY}px) 
//     }
// `
// const pulseB = (posY, posX)=> keyframes`
//     0% {
//         transform-box: border-box;
//         transform : translateX(0px) 
//     }
//     100% {
//         transform-box: border-box;
//         transform : translateX(-${posX}px) 
//     }
// `
// const pulseF = (posY, posX)=> keyframes`
//     0% {
//         transform-box: border-box;
//         transform : translateX(0px) 
//     }
//     100% {
//         transform-box: border-box;
//         transform : translateX(${posX}px)
//     }
// `


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
  animation: ${(props) => {
    if(props.dir === "Upward")
        return pulseU(props.posY, props.posX)
    else if(props.dir === "Backward")
        return pulseB(props.posY, props.posX)
    else if(props.dir === "Forward")
        return pulseF(props.posY, props.posX)
    else if(props.dir === "Downward")
        return pulseD(props.posY, props.posX)
}} ${(props) => 100/props.speed}s linear;
  animation-iteration-count: 1;
  animation-play-state: ${(props) => props.status};
  animation-fill-mode: forwards;
  z-index: ${(props) => props.z}
  color: white;
`

const Arrow = ({ posY, posX, dir, speed, status, z, colour, children }) => {
    return <Bar posY={posY} posX={posX} dir={dir} speed={speed} status={status} z={z} colour={colour}>{children}</Bar>;
};

const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const colours = ['rebeccapurple', 'aqua', 'orange', 'green', 'brown', 'green']

function Graph({veh, status}) {

  return (

    <div style={{ height:'40vh', width: '100%', backgroundColor: "bisque", boxSizing: 'border-box', marginTop: '1vh', overflow: 'hidden', position: 'relative'}}>
        {/* {
            veh.map((v, i) => {
                return <div style={{height: '20px', width: '20px', borderRadius:'50%', backgroundColor: 'rebeccapurple', position: 'relative', top: `${v.posY}px`, left: `${v.posX}px`, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h6>{v.vehicleID}</h6>
                </div>
            })
        } */}
        
        {
            veh.map((v, i) => {
                return <Arrow posY={v.posY} posX={v.posX} dir={v.direction} speed={v.speed} status={status} z={i+1} colour={colours[i%colours.length]}>
                        <h5>{v.vehicleID}</h5>
                    </Arrow>

            })
        }

        {
            num.map(n => {
                return <div style={{position: 'absolute', height: '100%', width: '1px', top: '0px', left: `${n*75}px`, backgroundColor: 'black', opacity: '0.3'}}></div>
            })
        }
        {
            num.map(n => {
                return <div style={{position: 'absolute', height: '1px', width: '100%', left: '0px', top: `${n*50}px`, backgroundColor: 'black', opacity: '0.3'}}></div>
            })
        }

    </div>
  )
}

export default Graph