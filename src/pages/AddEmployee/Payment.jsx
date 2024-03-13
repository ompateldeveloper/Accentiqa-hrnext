import React from "react";
import * as FormElements from "../../components/ui/FormElements";
import { useFormValidation } from "../../hooks/useFormValidation";
export default function Payment({form}) {
  const {formData, errors, changeHandle, handleSubmit } = form
  return (
    <div>
      <p className="block tracking-wide text-zinc-600 text-2xl font-bold mr-2 mb-4">
        Payment Mode
      </p>
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Select
            label={<span>Payment Type <span className="text-red-500">*</span></span>}
            optionsArray={[
              { value: "", title: "Select an Option" },
              { value: "audi", title: "Bank" },
              { value: "merc", title: "UPI" },
            ]}
            name="paymentType"
            value={formData.paymentType}
            onChange={changeHandle}
            error={errors.paymentType}
          />
        </div>
      </form>
    </div>
  );
}
