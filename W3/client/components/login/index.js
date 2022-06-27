import React from 'react'
import './style.css'

const Login = () => {
  return (
    <div className="login">
      <div className="form-login">
        <div className="title-form">soiot system</div>
        <div className="form-item">
          <input type="text" placeholder="user name" className="input-form-item" id="userName" />
        </div>
        <div className="form-item">
          <input type="password" placeholder="password" className="input-form-item" id="password" />
        </div>

        <div className="error">

        </div>

        <div className="button-submit">
          <div className="btn-login">login</div>
          <div className="btn-register">or create new account</div>
        </div>
      </div>
    </div>
  )
}

export default Login