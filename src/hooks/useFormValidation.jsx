import React, { useState } from "react";

export const useFormValidation = (initialState, onSubmit, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [newData, setNewData] = useState({});
  const changeHandle = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

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
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    // if (e.preventDefault) {
    //   e.preventDefault();
    // }

    if (Object.keys(validationErrors).length === 0) {
      setNewData({
        ...formData,
      });
      console.log("Form is valid. Submitting...");
      onSubmit(formData);
      console.log("data", formData);
      return true;
    } else {
      console.log("Form has validation errors.");
      return false;
    }
  };
  function cleanup(){
    setFormData(initialState)
    setErrors({})
  }
  return {
    formData,
    errors,
    changeHandle,
    handleSubmit,
    cleanup
  };
};
