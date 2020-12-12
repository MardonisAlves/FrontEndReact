import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (

    <div role='form' className="todo-form">

        <Grid cols='12 9 10'>
            <input id="descripction" className="form-control" placeholder="add tarefa"></input> 
       </Grid>


       <Grid cols='12 3 2'>
            <IconButton  style="primary" icon="plus"></IconButton>
       </Grid>
    </div>
)
