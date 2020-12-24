import React from 'react'
import {connect} from 'react-redux'


import Iconbutton from '../template/iconButton'

const  TodoList = props => { 

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
          <tr key={todo._id}>
              <td className={todo.done  ? 'markeddone' : ''}>{todo.description}</td>
              <td>
                <Iconbutton style='success' icon='check' hide={todo.done}
                  onClick={() => props.handleMarkAsDone(todo)}></Iconbutton>

                <Iconbutton style='warning' icon='undo' hide={!todo.done}
                  onClick={() => props.handleMarkAsPending(todo)}></Iconbutton>

                <Iconbutton style='danger' icon='trash-o' hide={!todo.done}
                  onClick={() => props.handleRemove(todo)}></Iconbutton>
              </td>
          </tr>  
        ))
    }

    return(
      
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>

            <tbody>
                {renderRows()}
            </tbody>
        </table>
    
    )
}


const mapStateToProps = state => ({list: state.todo.list})

export default connect(mapStateToProps)(TodoList)