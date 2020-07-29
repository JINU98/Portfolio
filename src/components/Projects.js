import React from 'react'

const fit={
    height:"225px",
    width:"450px",
}

function Projects() {
    return (
        <div style={{backgroundColor:"rgb(192,192,192)"}}>
        <h2 style={{fontSize:"50px",marginTop:"10px",marginBottom:"20px",marginRight:"82%",fontFamily:"Cursive"}}>Projects</h2>
            <div className="row" style={{marginLeft:"10px"}}>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <img style={fit} src="demo.gif" alt="hello1" />
                  <h5>Facial Keypoints Detection </h5> 
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <img style={fit} src="demo1.gif" alt="hello2" />
                    <h5>  Data-Dashboard Using Streamlit</h5>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <img style={fit} src="demo2.gif" alt="hello3" />
                    <h5> Neural Network Visualizer</h5>
                </div>
            </div>
        </div>
    )
}

export default Projects
