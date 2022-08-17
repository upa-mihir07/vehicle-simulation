import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import '../Style/addScenarios.css'

import { actionCreators} from '../redux/index'
import { useLocation } from 'react-router-dom';

function AddScenarios() {

    const [sceneName, setSceneName] = useState('')
    const [sceneTime, setSceneTime] = useState(0)

    const [edit, setEdit] = useState(false)

    const scene =  useSelector(state => state.scene)
    const dispatch = useDispatch()

    let location = useLocation()

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
        console.log("Reset Handler pressed");
        setSceneName('')
        setSceneTime('')
    }
    const RemoveScenario = () => {
        dispatch(actionCreators.removeScene({id: 1}))
    }

    if(location.state?.id && !edit) {
        console.log("Vehicle AB")
        scene.map(sc => {
            if(sc.id === location.state.id) {
                console.log("Vehicle ABCD")
                setEdit(true)
                setSceneName(sc.sceneName)
                setSceneTime(sc.sceneTime)
            }
            return sc
        })
    }

  console.table(scene)
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
            <div id='btn3' onClick={RemoveScenario}>Go Back {scene.sceneID}</div>
        </div>
    </div>
  )
}

export default AddScenarios