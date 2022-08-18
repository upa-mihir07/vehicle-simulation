import React, {useState} from 'react'
import {useSelector } from 'react-redux';

import '../Style/home.css'
import VehicleTable from '../components/vehicleTable';
import Graph from '../components/graph';

function Home() {
  
  const [status, setStatus] = useState('paused')

  const scene =  useSelector(state => state.scene)
  const [name, setName] = useState(scene.length > 0 ?  scene[0].sceneName : '')

  const index = scene.length > 0 ? scene.findIndex((s) => s.sceneName === name) : -1;

  return (
    <div className='all_veh_container'>
      <div className='select_scene'>
        <label id='label'>Select Scenario</label> <br />
        <select value={name} onChange={e => setName(e.target.value)}>
          {
              scene.map(s => {
                  return <option key={s.id} value={s.sceneName}>{s.sceneName}</option>
              })
          }
        </select>
      </div>
      {
        (index >= 0 && scene[index].vehicles.length > 0) ? 
        <VehicleTable veh={scene[index].vehicles} id={scene[index].id}/>
        :
        null
      }
      <div className='add_home_btns'>
          <div id='btn1' onClick={()=>setStatus('paused')}>Stop Simulation</div>
          <div id='restartButton' onClick={()=>setStatus('runnning')}>Start Simulation</div>
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