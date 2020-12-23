import { combineReducers } from 'redux'

const rootReducers = combineReducers ({
    todo: () => ({
        description : 'Ler livro',
        list:[{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done : true
        },
        {
            id: 2,
            description: 'Reunião com equipe as 10 horas',
            done : false
        },
        {
            id: 3,
            description: 'Consulta com medico',
            done : false
        }
    
    ]
    })
})

export default rootReducers