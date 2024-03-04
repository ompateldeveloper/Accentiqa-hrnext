import React, { useState } from "react";

export const useFormValidation = (initialState, onSubmit, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
 const [newData,setNewData]=useState({})
  const changeHandle = (e) => {
    const { name, value} = e.target;
    
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
    if (Object.keys(validationErrors).length === 0) {
      console.log("data", formData);
      setNewData({
        ...formData
      })
      console.log("Form is valid. Submitting...");
      return true;
    } else {
      console.log("Form has validation errors.");
      return false;
    }
  };
  return {
    formData,
    errors,
    changeHandle,
    handleSubmit,
  };
};
