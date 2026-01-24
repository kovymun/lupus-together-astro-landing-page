import "../../styles/join.css";

const Form = () => {
  return (
    <div className="container">
      {" "}
      <form className="join-form">
        {/* First Name */}
        <div className="input-container">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" />
        </div>

        {/* Last Name */}
        <div className="input-container">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />
        </div>

        {/* Contact Email Number */}
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>

        {/* Contact Phone Number */}
        <div className="input-container">
          {" "}
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" maxLength={10} />
        </div>

        {/* Additional Message */}
        <div className="input-container">
          {" "}
          <label htmlFor="message">Tell us more</label>
          <textarea id="message" rows={5} />
        </div>

        {/* Consent */}
        <div className="consent-container" style={{ marginBottom: "1.2rem" }}>
          {" "}
          <div className="consent" style={{ marginBottom: "1rem" }}>
            <input type="checkbox" id="consent" />
            <label htmlFor="consent">
              I agree to be contacted by Lupus Together.
            </label>
          </div>
        </div>

        <button
          type="submit"
          aria-live="polite"
          className="site-btn join-form-btn"
        >
          Join our Community
        </button>
      </form>
    </div>
  );
};

export default Form;
