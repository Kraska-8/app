import * as actionTypes from './actions' // Importing constants of action types to avoid misspellings

const initialState ={ //Setting initial state of data
    rows:[
        {name:'Prod1', amount:10},
    ]

}
const reducer = (state = initialState, action) => {
    switch (action.type){  // Using switch/case constructor to identify actions
        case actionTypes.ADDING_ROW:
            return {
                ...state,
                rows: state.rows.concat(action.item) // adding rows immutably
            }
        case actionTypes.DELETED_ROW:
            const newRows = state.rows.filter((row,index) => index !== action.id) // delete rows immutably
            return {
                ...state,
                rows: newRows
            }
            case actionTypes.UPADATE_ROW:    // updating data in a certain row        
            const newState = state.rows.map((item, i) => {
                if (i === action.payload.id) {
                  return {...item, [action.payload.name]: action.payload.value};
                }
                return item;
              });          
            return{
                ...state,
                rows: newState
            }
        }
    return state  //deafault case returns current state
 };
    

export default reducer