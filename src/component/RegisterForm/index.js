import './index.css'

const RegisterForm = () => {
  return (
    <form className="register-form">
      <div className="input-group">
        <label>Name</label>
        <input type="text" placeholder="Enter Full Name" />
      </div>

      <div className="input-group">
        <label>Email Address</label>
        <input type="email" placeholder="Enter Email" />
      </div>

      <div className="input-group">
        <label>Mobile Number</label>
        <input type="text" placeholder="Enter Mobile Number" />
      </div>

      <div className="input-group">
        <label>Description</label>
        <textarea placeholder="Describe Your Requirement"></textarea>
      </div>

      <button className="submit-btn" type="submit">
        REGISTER NOW
      </button>
    </form>
  )
}

export default RegisterForm