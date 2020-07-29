import React from 'react'

function Contact() {
    return (
        <div style={{marginTop:"3%",backgroundColor:"#232323"}}>
            <h2 style={{fontSize:"50px",fontFamily:"cursive",marginRight:"80%",color:"white"}}>Contact Me</h2>
    <form style={{width:"20%",marginLeft:"40%"}}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <textarea cols="40" rows="5" placeholder="Your Message"></textarea>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
 </div>
    )
}

export default Contact
