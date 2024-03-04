import React, { useState } from "react";

export const useFormValidation = (initialState, onSubmit, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const changeHandle = (e) => {
    const { name, value, checked } = e.target;
    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        allow: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Perform validation
    const validationErrors = validate({ ...formData, [name]: value });
    if (!validationErrors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    } else {
      // Update errors state with validation errors
      setErrors({
        ...errors,
        [name]: validationErrors[name],
      });
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // Perform final validation before submitting the form
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
      console.log(formData);
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
