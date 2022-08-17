import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Scenary_V from '../components/Scenary_V';

import '../Style/home.css'


import VehicleTable from '../components/vehicleTable';
import Graph from '../components/graph';

function Home() {
  const scene =  useSelector(state => state.scene)
  let dummyName = scene.length > 0 ?  scene[0].sceneName : ''
  const [name, setName] = useState(dummyName)
  const index = scene.length > 0 ? scene.findIndex((s) => s.sceneName === name) : -1;

  const [status, setStatus] = useState('paused')

  console.log("Home", name, index)
  // return (
  //   <div style={{width: '100%'}}>
  //     <label>Select Scnario</label> <br />
  //     <select value={name} onChange={e => setName(e.target.value)}>
  //       {
  //           scene.map(s => {
  //               return <option value={s.sceneName}>{s.sceneName}</option>
  //           })
  //       }
  //     </select>
  //     {
  //       (index >= 0 && scene[index].vehicles.length > 0) ? 
  //       scene[index].vehicles.map(obj => {
  //         return <Scenary_V id={scene[index].id} vehicleID={obj.vehicleID} vehicleName={obj.vehicleName} posX={obj.posX} posY={obj.posY} speed={obj.speed} direction={obj.direction}/>
  //       }) : 
  //       <h1>No Vehicles listed yet</h1>
  //     }
  //   </div>
  // )

  return (
    <div className='all_veh_container'>
      <div className='select_scene'>
        <label id='label'>Select Scenario</label> <br />
        <select value={name} onChange={e => setName(e.target.value)}>
          {
              scene.map(s => {
                  return <option value={s.sceneName}>{s.sceneName}</option>
              })
          }
        </select>
      </div>
      {
        (index >= 0 && scene[index].vehicles.length > 0) ? 
        <VehicleTable veh={scene[index].vehicles} id={scene[index].id}/>
        :
        null
          // <VehicleTable veh={scene[index].vehicles} id={scene[index].id}/>
      }
      <div className='add_home_btns'>
          <div id='btn1' onClick={()=>setStatus('paused')}>Stop Simulation</div>
          <div id='btn2' onClick={()=>setStatus('runnning')}>Start Simulation</div>
      </div>
      {
        (index >= 0 && scene[index].vehicles.length > 0) ? 
        <Graph veh={scene[index].vehicles} status={status}/>
        :
        <div style={{ height:'50vh', width: '100%', backgroundColor: "bisque", boxSizing: 'border-box', marginTop: '1vh'}}></div>
      }
    </div>
  )
}

export default Home