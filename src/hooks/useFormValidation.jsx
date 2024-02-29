import React, { useState } from "react";

export const useFormValidation = (initialState, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const changeHandle = (e) => {
    const { name, value, checked } = e.target;

    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        allow: e.target.checked,
      });
      console.log(checked);
      // setAllowed(checked)
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Perform validation
    const validationErrors = validate({ ...formData, [name]: value });
    setErrors({
      ...errors,
      [name]: validationErrors[name],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform final validation before submitting the form
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log("Form is valid. Submitting...");
    } else {
      console.log("Form has validation errors.");
    }
  };

  return {
    formData,
    errors,
    changeHandle,
    handleSubmit,
  };
};
