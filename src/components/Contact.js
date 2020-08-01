import React from 'react'

function Contact() {
    return (
        <div>
            <h2 style={{color:"white"}}>Contact Me</h2>
    <form style={{color:"white"}}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <textarea cols="40" rows="5" placeholder="Your Message"></textarea><br></br>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
 </div>
    )
}

export default Contact
