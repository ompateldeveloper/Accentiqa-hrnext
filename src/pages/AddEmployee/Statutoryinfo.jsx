import React, { useState } from "react";
import * as FormElements from "../../components/ui/FormElements";
import { useFormValidation } from "../../hooks/useFormValidation";
export default function Statutoryinfo({form}) {
  const {formData, errors, changeHandle, handleSubmit } = form
  return (
    <div>
      <p className="block tracking-wide text-zinc-600 text-2xl font-bold mr-2 mb-4">
        Statutory Info
      </p>
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input 
            label={<span>PAN Number <span className="text-red-500">*</span></span>}
                    
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={changeHandle}
            error={errors.panNo}
            
            
            
          />
          <FormElements.Input
            label={<span>Aadhar Number <span className="text-red-500">*</span></span>}
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
      </form>
    </div>
  );
}
