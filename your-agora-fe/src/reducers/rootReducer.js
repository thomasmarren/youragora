import { combineReducers } from 'redux'

// function users(state = [], action){
//   switch (action.type) {
//     case 'CREATING_USER':
//       return {...state, creatingUser}

//     case 'LOGIN_USER':
//       return state
//     case 'LOGIN_USER':
//       return state
//     default:
//       return state
//   }
// }


function mainArticle(state = [], action){
  switch (action.type) {
    case "FETCH_ARTICLE":
    debugger
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({ mainArticle })

export default rootReducer
