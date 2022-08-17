import React from 'react'
import { useDispatch } from 'react-redux'
import './Scenary.css'
import { actionCreators} from '../redux/index'
import { Link} from 'react-router-dom'

function Scenary_V({id, vehicleID, vehicleName, posX, posY, speed, direction}) {
    const dispatch = useDispatch()

    const DeleteHandler = () => {
        console.log('Deleting Vehicle')
        dispatch(actionCreators.removeVehicle({id: 2, vehicleID: 2}))
    }

  return (
    <div className='scenary_container'>
        <h4>{vehicleID}</h4>
        <h4>{vehicleName}</h4>
        <h4>{posX}</h4>
        <h4>{posY}</h4>
        <h4>{speed}</h4>
        <h4>{direction}</h4>
        <Link to={"/vehicle/add"} state={{id: id, vehicleID: vehicleID}}><button> EDIT </button></Link>
        <button onClick={DeleteHandler}> DELETE </button>
    </div>
  )
}

export default Scenary_V