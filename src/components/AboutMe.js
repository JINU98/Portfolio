import React from 'react'
const float={
    float:"right",
    backgroundColor:"rgba(255,255,255,0.1)",
}
const transform={
    transform:"perspective(500px) translate3d(0px, 80px, 10px)"
}

const font={
    fontFamily: "'Inconsolata', monospace",
    // fontFamily:"cursive",
    fontSize:"50px",
    marginTop:"5%",
    marginBottom:"5%",
    color:"white"
}
const background={
    backgroundColor:"#232323",
    height:"650px"
}
function AboutMe() {
    return (
        <div className="row" style={background}>
        <div className="col-md-6 col-lg-6 col-sm-12">
    <main role="main">
        <h4 style={font}>Hello There...</h4>
        <h4 style={font}>I am Jinendra Malekar</h4>
        <h4 style={font}>Lets build a complete website with sophisticated web technologies and the power of Data Science.</h4>
</main> 
        </div>
        <div className="col-md-6 col-lg-6 col-sm-6" style={float}><img style={transform}src="profile.png" alt="profile photo"></img></div>
        </div>
    )
}

export default AboutMe
