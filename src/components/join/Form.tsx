import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/join.css";

// Structure of all form fields used in the "Join the Community" form.
interface JoinCommInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
  consent: boolean;
}

const Form = () => {
  // Initialize form with react-hook-form
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JoinCommInputs>();

  // Validation Regex patterns
  const emailRegexPattern = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
  );
  const mobileRegexPattern = new RegExp(/^[0-9]{10}$/);

  const reqJoinComm = async (data: JoinCommInputs) => {
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    console.log("Community Member:", data);
    reset();
  };

  return (
    <div className="container">
      {" "}
      <form
        className="join-form"
        onSubmit={handleSubmit(reqJoinComm)}
        aria-busy={isSubmitting}
        data-cy="join-form"
      >
        {/* First Name */}
        <div className="input-container">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            data-cy="join-first-name"
            {...register("firstName", {
              required: {
                value: true,
                message: "Please enter first name",
              },
              maxLength: {
                value: 15,
                message: "First name cannot exceed 15 characters",
              },
            })}
          />
          {errors.firstName && (
            <p className="form-error-text">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="input-container">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            data-cy="join-last-name"
            {...register("lastName", {
              required: {
                value: true,
                message: "Please enter last name",
              },
              maxLength: {
                value: 15,
                message: "Last name cannot exceed 15 characters",
              },
            })}
          />
          {errors.lastName && (
            <p className="form-error-text">{errors.lastName.message}</p>
          )}
        </div>

        {/* Contact Email Number */}
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            data-cy="join-email"
            {...register("email", {
              required: {
                value: true,
                message: "Please enter an email address",
              },
              pattern: {
                value: emailRegexPattern,
                message: "Please provide a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="form-error-text">{errors.email.message}</p>
          )}
        </div>

        {/* Contact Phone Number */}
        <div className="input-container">
          {" "}
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            maxLength={10}
            data-cy="join-phone"
            {...register("phone", {
              required: {
                value: true,
                message: "Contact number is required",
              },
              pattern: {
                value: mobileRegexPattern,
                message: "Please enter a valid mobile number",
              },
              minLength: {
                value: 10,
                message: "Mobile number should be at least 10 digits",
              },
            })}
          />
          {errors.phone && (
            <p className="form-error-text">{errors.phone.message}</p>
          )}
        </div>

        {/* Additional Message */}
        <div className="input-container">
          {" "}
          <label htmlFor="message">Tell us more</label>
          <textarea
            id="message"
            rows={5}
            data-cy="join-message"
            {...register("message", {
              validate: (value: string | undefined): true | string =>
                !value ||
                value.length <= 50 ||
                "Message too long (max 50 characters)",
            })}
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-2">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Consent */}
        <div className="consent-container" style={{ marginBottom: "1.2rem" }}>
          {" "}
          <div className="consent" style={{ marginBottom: "1rem" }}>
            <input
              type="checkbox"
              id="consent"
              data-cy="join-consent"
              {...register("consent", {
                required: "You must agree before continuing",
              })}
            />
            <label htmlFor="consent">
              I agree to be contacted by Lupus Together.
            </label>
          </div>
          {errors.consent && (
            <p className="form-error-text">{errors.consent.message}</p>
          )}
        </div>

        <button
          type="submit"
          aria-live="polite"
          className="site-btn join-form-btn"
          data-cy="join-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Join our Community"}
        </button>
      </form>
    </div>
  );
};

export default Form;
