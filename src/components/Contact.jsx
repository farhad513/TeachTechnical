import React from 'react'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
    <main>
    <h1>Contact Us</h1>
        <form>
            <div>
            <label>Name</label>
            <input type="text" required placeholder='ABC'/>
            </div>
            <div>
            <label>Email</label>
            <input type="email" required placeholder='ABC@xyz.com'/>
            </div>
            <div>
            <label>Message</label>
            <input type="text" required placeholder='Please Enter Your Message..'/>
            </div>
        </form>
    </main>
    </div>
  )
}

export default Contact