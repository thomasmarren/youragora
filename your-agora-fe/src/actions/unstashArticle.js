import $ from 'jquery'

export default function unstashArticle(stashId){
  return function(dispatch){
    $.ajax({
      url: `https://youragora-api-prod.herokuapp.com/stashes/`+stashId,
      type: "DELETE",
      headers: {authorization: localStorage.getItem('jwt')},
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({stash: stashId}),
      dataType: 'json'
    }).done(function(data){
      dispatch({type: 'UNSTASH_ARTICLE', payload: data})
    })
  }
}
