import React, { useState } from "react";
import * as FormElements from "../../components/ui/FormElements";
import { useFormValidation } from "../../hooks/useFormValidation";
export default function Statutoryinfo() {
  const initialState = {
    panNo: "",
    aadharNo: "",
    passportNo: "",
  };
  const validate = (values) => {
    const errors = {};
    // PAN card number validation
    if (!values.panNo.trim()) {
      errors.panNo = "PAN card number is required";
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(values.panNo)) {
      errors.panNo = "Invalid PAN card number";
    }
    // validation For aadharNo
    if (!values.aadharNo.trim()) {
      errors.aadharNo = "Aadhar number is required";
    } else if (!/^\d{12}$/.test(values.aadharNo)) {
      errors.aadharNo = "Invalid Aadhar number";
    }
    // Passport number validation
    if (!values.passportNo.trim()) {
      errors.passportNo = "Passport number is required";
    } else if (!/^[a-zA-Z0-9]{6,15}$/.test(values.passportNo)) {
      errors.passportNo = "Invalid passport number";
    }
    return errors;
  };
  const { formData, errors, changeHandle, handleSubmit } = useFormValidation(
    initialState,
    validate
  );
  return (
    <div>
      <p className="block tracking-wide text-zinc-600 text-2xl font-bold mr-2 mb-4">
        Statutory Info
      </p>
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="PAN Number"
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={changeHandle}
            error={errors.panNo}
          />
          <FormElements.Input
            label="Aadhar Number"
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={changeHandle}
            error={errors.aadharNo}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Passport Number"
            type="text"
            name="passportNo"
            value={formData.passportNo}
            onChange={changeHandle}
            error={errors.passportNo}
          />
        </div>
        <button
          type="submit"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
