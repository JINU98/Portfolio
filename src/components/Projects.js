import React from 'react'

const fit={
    height:"300px",
    width:"600px",
}

function Projects() {
    return (
        <div style={{color:"white",marginLeft:"7%"}}>
        <h2>Projects</h2>
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
                    <img style={fit} src="demo3.gif" alt="hello4" />
                    <h5>Precision Based Agriculture and Horticulture</h5>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <img style={fit} src="demo.gif" alt="hello1" />
                  <h5>Facial Keypoints Detection </h5> 
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <img style={fit} src="demo1.gif" alt="hello2" />
                    <h5>  Data-Dashboard Using Streamlit</h5>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <img style={fit} src="demo2.gif" alt="hello3" />
                    <h5> Neural Network Visualizer</h5>
                </div>
                 
            </div>
        </div>
    )
}

export default Projects
