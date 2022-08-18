import React, {useMemo} from 'react'
import {useTable} from 'react-table';
import { Link} from 'react-router-dom'
import {COLUMNS} from '../data/columns'
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaEdit, FaTrash} from "react-icons/fa"
import {IconContext} from "react-icons";
import './table.css';
import { actionCreators } from '../redux';

const SceneTable = ()=> {
  const dispatch = useDispatch()
  const scene =  useSelector(state => state.scene)
  const deleteSceneHandler = (index) =>{
    dispatch(actionCreators.removeScene({id: index}))
  }

  const dat = scene.map(d => {
    return {
        ...d,
        numOfVeh: d.vehicles ? d.vehicles.length : 0,
        add: <Link to={"/vehicle/add"} state={{id: d.id, sceneName: d.sceneName}}>
              <IconContext.Provider value={{ style: {fontSize: '2vh'}}}>
                <div>
                  <FaPlus />
                </div>
              </IconContext.Provider>
            </Link>,
        edit: <Link to={"/scenario/add"} state={{id: d.id}}>
              <IconContext.Provider value={{ style: {fontSize: '2vh'}}}>
                <div>
                  <FaEdit />
                </div>
              </IconContext.Provider>
            </Link>,
       delete: <IconContext.Provider value={{ style: {fontSize: '2vh', cursor: 'pointer'}}}>
                <div>
                  <FaTrash onClick={() => deleteSceneHandler(d.id)}/>
                </div>
              </IconContext.Provider>
    }
  })

  const data = useMemo(() => dat, [])

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

export default SceneTable