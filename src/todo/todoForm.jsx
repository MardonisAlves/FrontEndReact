import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

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
            value={props.description} 
            onChange={props.handleChange} 
            onKeyUp={keyHandler}></input> 
       </Grid>


       <Grid cols='2 2 2'>
            <IconButton  style="primary" icon="plus" onClick={props.handleAdd}></IconButton>
            <IconButton style="info" icon="search" onClick={props.handleSearch}></IconButton>
            <IconButton style="secondary" icon="close" onClick={props.handleClear}></IconButton>
       </Grid>
     
    </div>
    )
}