
import './index.css'

const RegisterForm = () => {
  return (
    <div className="register-page">
      <div className="register-card">
        <h1 className="register-title">REGISTER NOW</h1>

        <form className="register-form">
          <div className="input-group">
            <label>NAME</label>
            <input type="text" placeholder="FULL NAME" />
          </div>

          <div className="input-group">
            <label>EMAIL ADDRESS</label>
            <input type="email" placeholder="EMAIL ADDRESS" />
          </div>

          <div className="input-group">
            <label>MOBILE NUMBER</label>
            <input type="text" placeholder="ENTER NUMBER" />
          </div>

          <div className="input-group">
            <label>DESCRIPTION</label>
            <textarea placeholder="DESCRIBE"></textarea>
          </div>

          <button type="submit" className="submit-btn">
            REGISTER NOW
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
