import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Scenary from '../components/Scenary';

import '../Style/allScenario.css'
import { actionCreators } from '../redux';
import SceneTable from '../components/sceneTable';

function AllScenarios() {
  const dispatch = useDispatch()
  const scene =  useSelector(state => state.scene)
  const navigate = useNavigate()
  // return (
  //   <div className='all_scene_container'>
  //     <div className='all_scene_container_nav'>
  //       <h1>All Scenario</h1>
  //       <div className='all_scenario_btns'>
  //           <div className='all_scene_container_btn' id='btn3' onClick={() => {navigate("/scenario/add")}}>New Scenario</div>
  //           <div className='all_scene_container_btn' id='btn1' onClick={() => {navigate("/vehicle/add")}}>Add Vehicle</div>
  //           <div className='all_scene_container_btn' id='btn2' onClick={() => {dispatch(actionCreators.removeAll())}}>Delete All</div>
  //       </div>
  //     </div>
  //     <div>
  //       {
  //         scene.map(obj => {
  //           return <Scenary id={obj.id} sceneName={obj.sceneName} sceneTime={obj.sceneTime} numOfVehicle={obj.vehicles.length}/>
  //         })
  //       }
  //     </div>
  //   </div>
  // )

  return (
    <div className='all_scene_container'>
      <div className='all_scene_container_nav'>
         <h1>All Scenario</h1>
         <div className='all_scenario_btns'>
             <div className='all_scene_container_btn' id='btn3' onClick={() => {navigate("/scenario/add")}}>New Scenario</div>
             <div className='all_scene_container_btn' id='btn1' onClick={() => {navigate("/vehicle/add")}}>Add Vehicle</div>
             <div className='all_scene_container_btn' id='btn2' onClick={() => {dispatch(actionCreators.removeAll())}}>Delete All</div>
         </div>
       </div>
      <SceneTable />
    </div>
  )
}

export default AllScenarios