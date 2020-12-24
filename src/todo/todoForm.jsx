import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription } from './totoActions'

const TodoForm  = props => {

    const keyHandler = (e) => {
        if(e.key === "Enter"){
            props.handleAdd()
        }else if (e.key === "Escape"){
            props.handleClear()
        }else if (e.key === "Shift"){
             props.handleSearch()   
        }
    }

    return(
        <div role='form' className="todoForm">
        <Grid cols='8 8 8'>
            <input id="descripction" className="form-control" placeholder="add tarefa" 
            onChange={props.changeDescription} 
            onKeyUp={keyHandler}
            value={props.description}></input> 
       </Grid>


       <Grid cols='2 2 2'>
            <IconButton  style="primary" icon="plus" onClick={props.handleAdd}></IconButton>
            <IconButton style="info" icon="search" onClick={props.handleSearch}></IconButton>
            <IconButton style="secondary" icon="close" onClick={props.handleClear}></IconButton>
       </Grid>
     
    </div>
    )
}

const mapStateToprops = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription} , dispatch)


export default connect(mapStateToprops , mapDispatchToProps)(TodoForm)