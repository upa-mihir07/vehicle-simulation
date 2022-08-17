import React, {useMemo} from 'react'
import './Scenary.css'
import { actionCreators} from '../redux/index'

import { Link} from 'react-router-dom'
import {IconContext} from "react-icons"
import { FaPlus, FaEdit, FaTrash} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'

function Scenary({id, sceneName, sceneTime, numOfVehicle}) {
  const dispatch = useDispatch()
  const scene =  useSelector(state => state.scene)
  const deleteSceneHandler = (index) =>{
    dispatch(actionCreators.removeScene({id: index}))
  }

  return (

    <div className='scenary_container'>
        <h4>{id}</h4>
        <h4>{sceneName}</h4>
        <h4>{sceneTime}</h4>
        <h4>{numOfVehicle}</h4>
        <Link to={"/vehicle/add"} state={{id: id, sceneName: sceneName}}>
          <IconContext.Provider value={{ style: {fontSize: '2vh'}}}>
            <div>
              <FaPlus />
            </div>
          </IconContext.Provider>
        </Link>
        <Link to={"/scenario/add"} state={{id: id}}>
          <IconContext.Provider value={{ style: {fontSize: '2vh'}}}>
            <div>
              <FaEdit />
            </div>
          </IconContext.Provider>
        </Link>
        {/* <Link to={"/scenario/add"} state={{id: id}}><button> EDIT </button></Link> */}
        <IconContext.Provider value={{ style: {fontSize: '2vh', cursor: 'pointer'}}}>
          <div>
            <FaTrash onClick={() => deleteSceneHandler(id)}/>
          </div>
        </IconContext.Provider>
    </div>
  )
}

export default Scenary;