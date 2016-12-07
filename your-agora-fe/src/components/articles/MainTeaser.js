import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router';
import GetNextButton from '../reactions/GetNextButton'


function MainTeaser(props){

  let href = '/articles/random/main'

  var pattern = /(<p>)(.*?)(<\/p>)/g
  var content = props.article.content

  // TODO: Can we loop this more elegantly? 
  var par1 = pattern.exec(content)[0]
  var par2 = pattern.exec(content)[0]
  var par3 = pattern.exec(content)[0]
  var par4 = pattern.exec(content)[0]

  var preview = [par1, par2, par3, par4].join(" ")



  return(
    <div id="main-teaser">
      <img role="presentation" className="thumbnail" src={props.article.img_url} />
      <h1>{props.article.title}</h1>
      // <div id="teaser-preview" style={{"textAlign": "left"}} dangerouslySetInnerHTML={{__html:preview}} />
      <Link to={href} className="button" >Read More</Link>
      <GetNextButton text="Next Article"/>
    </div>
  )
}


function mapStateToProps(state){
  return state.mainArticle
}

export default connect(mapStateToProps)(MainTeaser)
