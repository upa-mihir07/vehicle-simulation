import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import '../Style/addScenarios.css'
import { actionCreators} from '../redux/index'

function AddScenarios() {

    const [sceneName, setSceneName] = useState('')
    const [sceneTime, setSceneTime] = useState(0)
    const [edit, setEdit] = useState(false)

    // Redux, fetching store data/ dispatching actions
    const scene =  useSelector(state => state.scene)
    const dispatch = useDispatch()

    // Navigation specific
    const navigate = useNavigate();
    let location = useLocation()
    
    // Handlers of Add and reset button
    const AddHandler = () => {
        console.log("Add pressed");
        if(edit) {
            console.log("Add EDIT", location.state.id);
            dispatch(actionCreators.editScene({id: location.state.id, data: {sceneName: sceneName, sceneTime: sceneTime}}))
        }
        else 
            dispatch(actionCreators.addScene({sceneName: sceneName, sceneTime: sceneTime}))
        ResetHandler();
    }
    const ResetHandler = () => {
        setSceneName('')
        setSceneTime('')
    }

    // prefill input field with existing data when editing the scenario
    if(location.state?.id && !edit) {
        scene.map(sc => {
            if(sc.id === location.state.id) {
                setEdit(true)
                setSceneName(sc.sceneName)
                setSceneTime(sc.sceneTime)
            }
            return sc
        })
    }

  return (
    <div className='add_scenario'>
        <h1>Add Scenario</h1>
        <div className='add_scenario_input'>
            <div className='add_scenario_input_container'>
                <div className='add_scenario_input1'>
                    <label>Scenario Name</label>
                    <br />
                    <input type="text" placeholder='Test Scenario' value={sceneName} onChange={(e) => setSceneName(e.target.value)}></input>
                </div>
                <div className='add_scenario_input2'>
                    <label>Scenario Time (seconds)</label>
                    <br />
                    <input type="number" placeholder='10' value={sceneTime} onChange={(e) => setSceneTime(e.target.value)}></input>
                    {
                        sceneTime < 0 ?  <div className='warning'><p>Time should be greater than 0!!</p></div>:  null
                    }
                </div>                
            </div>
        </div>
        <div className='add_scenario_btns'>
            <div id='btn1' onClick={ (sceneTime < 0 || sceneName === '')  ? () => alert("Please Enter Correct Input") : AddHandler}>Add</div>
            <div id='btn2' onClick={ResetHandler}>Reset</div>
            <div id='btn3' onClick={() => navigate(-1)}>Go Back {scene.sceneID}</div>
        </div>
    </div>
  )
}

export default AddScenarios