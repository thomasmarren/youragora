import $ from 'jquery'

export default function fetchReactions(){
  return function(dispatch){
    dispatch({type: 'FETCHING_REACTIONS'})
    $.ajax({
      url: `http://localhost:3000/reactions`,
      type: "GET",
      headers: {authorization: localStorage.getItem('jwt')},
      contentType: 'application/json; charset=utf-8',
    }).done(function(data){
      dispatch({type: 'FETCH_REACTIONS', payload: data})
    })
  }
}