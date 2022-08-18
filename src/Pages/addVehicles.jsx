import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import '../Style/addVehicles.css'
import { actionCreators} from '../redux/index'


function AddVehicles() {

    // usestate 
    const [veh, setVeh] = useState({sceneName: '', vehicleName: '', speed: 0, posX: 0, posY: 0, direction: ''})
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
            dispatch(actionCreators.editVehicle({id: location.state.id, vehicleID: location.state.vehicleID, data: veh}))
        }
        else {
            console.log("Add ADD");
            dispatch(actionCreators.addVehicle({sceneName: veh.sceneName, vehicleName: veh.vehicleName, speed: veh.speed, posX: veh.posX, posY: veh.posY, direction: veh.direction}))
        }
        ResetHandler()
    }

    const addhandler = () => {
        return (veh.speed <0 || veh.posX <0 || veh.posY<0 || veh.sceneName==='') ? alert("Please Enter Correct Input") : AddHandler()
    }

    const ResetHandler = () => {
        setVeh({sceneName: '', vehicleName: '', speed: 0, posX: 0, posY: 0, direction: ''})
    }

    // prefill input field with existing data when editing the vehicle
    if(location.state?.id && !edit) {
        scene.map(sc => {
            if(sc.id === location.state.id) {
                let vehicle = sc.vehicles;
                vehicle.map(v => {
                    if(v.vehicleID === location.state.vehicleID) {
                        setEdit(true)
                        setVeh({sceneName: sc.sceneName, vehicleName: v.vehicleName, speed: v.speed, posX: v.posX, posY: v.posY, direction: v.direction})
                    }
                    return v;
                })
            }
            return sc;
        })
    }

  return (
    <div className='add_scenario'>
        <h1>Add Vehicle</h1>
        <div className='add_vehicle_input'>
                <div className='add_veh_input'>
                    <label>Scenario Name</label>
                    <br />
                    <select style={{fontSize: 'large'}} value={veh.sceneName} onChange={e => {setVeh((prev) => {
                        console.log("Hello luv", e.target.value)
                        return ({...prev,sceneName: e.target.value})})}}>
                        <option>Select Scenario</option>
                        {
                            scene.map((s,i) => {
                                return <option key={i} value={s.sceneName} defaultValue>{s.sceneName}</option>
                            })
                        }
                    </select>
                    
                </div>
                <div className='add_veh_input'>
                    <label>Vehicle Name</label>
                    <br />
                    <input type="text" placeholder='Target ABC' value={veh.vehicleName} onChange={e => {setVeh((prev) => ({...prev,vehicleName: e.target.value}))}}></input>
                </div>
                <div className='add_veh_input'>
                    <label>Speed</label>
                    <br />
                    <input type="number" placeholder='2'  value={veh.speed} onChange={e => {setVeh((prev) => ({...prev,speed: e.target.value}))}}></input>
                    {
                        veh.speed < 0 ?  <div className='warning'><p>Speed should be greater than 0!!</p></div>:  null
                    }
                </div>
                <div className='add_veh_input'>
                    <label>PositionX</label>
                    <br />
                    <input type="number" placeholder='1000' value={veh.posX} onChange={e => {setVeh((prev) => ({...prev,posX: e.target.value}))}}></input>
                    {
                        veh.posX < 0 ?  <div className='warning'><p>Position should be greater than 0!!</p></div>:  null
                    }
                </div>
                <div className='add_veh_input'>
                    <label>PositionY</label>
                    <br />
                    <input type="number" placeholder='20' value={veh.posY} onChange={e => {setVeh((prev) => ({...prev,posY: e.target.value}))}}></input>
                    {
                        veh.posY < 0 ?  <div className='warning'><p>Position should be greater than 0!!</p></div>:  null
                    }
                </div>
                <div className='add_veh_input'>
                    <label>Direction</label>
                    <br />
                    <select style={{fontSize: 'large'}} value={veh.direction} onChange={e => {setVeh((prev) => ({...prev,direction: e.target.value}))}}>
                        <option>Direction</option>
                        <option value="Forward">Forward</option>
                        <option value="Backward">Backward</option>
                        <option value="Upward">Upward</option>
                        <option value="Downward">Downward</option>
                    </select>
                </div>

        </div>
        <div className='add_scenario_btns'>
            <div id='btn1' onClick={addhandler}>Add</div>
            <div id='btn2' onClick={ResetHandler}>Reset</div>
            <div id='btn3' onClick={() => navigate(-1)}>Go Back</div>
        </div>
    </div>
  )
}

export default AddVehicles