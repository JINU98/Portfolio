import React from 'react'
const float={
    float:"left",
    backgroundColor:"rgba(32,18,7,0.7)",
    color:"#000",
    width:"1600px",
    height:"250px"
}
function Education() {
    return (
     <div style={float}>
        <h2 style={{fontSize:"50px",marginRight:"80%",fontFamily:"Cursive"}}>Education</h2>
        <div style={{backgroundColor:"#000",marginRight:"80%",color:"white"}}>August 2017-Present</div>
         <h3 style={{marginRight:"40%",marginTop:"2%",fontFamily:"Cursive"}}>B.Tech Computer Science and Engineering</h3>
         <h3 style={{marginRight:"40%",marginTop:"2%",fontFamily:"Cursive"}}>International Institute Of Information Technology, Naya Raipur</h3>
     </div>
    )
}

export default Education
