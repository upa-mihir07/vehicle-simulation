import React, {useMemo} from 'react'
import {useTable} from 'react-table';
import { Link} from 'react-router-dom'
import {COLUMNS} from '../data/v_column'
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaEdit, FaTrash} from "react-icons/fa"
import {IconContext} from "react-icons";
import { actionCreators } from '../redux';
import './v_table.css'

const VehicleTable = ({veh, id})=> {
  const dispatch = useDispatch()
  const scene =  useSelector(state => state.scene)

  const DeleteHandler = (vehicalIndex) => {
    console.log('Deleting Vehicle')
    dispatch(actionCreators.removeVehicle({id: id, vehicleID: vehicalIndex}))
  }

  const dat = veh.map(d => {
    return {
        ...d,
        edit: <Link to={"/vehicle/add"} state={{id: id, vehicleID: d.vehicleID, data: d}}>
              <IconContext.Provider value={{ style: {fontSize: '2vh'}}}>
                <div>
                  <FaEdit />
                </div>
              </IconContext.Provider>
            </Link>,
       delete: <IconContext.Provider value={{ style: {fontSize: '2vh', cursor: 'pointer'}}}>
                <div>
                  <FaTrash onClick={() => DeleteHandler(d.vehicleID)}/>
                </div>
              </IconContext.Provider>
    }
  })

  const data = useMemo(() => dat, [])

  console.log("Haaaatee", dat)

  const tableInstance = useTable({
    columns: COLUMNS,
    data: dat
  })

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
  } = tableInstance

  return (
    <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(col => (
                                <th {...col.getHeaderProps()}>{col.render('Header')}</th>
                            ))
                        }
                    </tr>
                ))
            }
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
            prepareRow(row);
            return (
                <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
                </tr>
            );
            })}
        </tbody>
    </table>
  )
}

export default VehicleTable