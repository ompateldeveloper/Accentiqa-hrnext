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
              
            ]}
            name="paymentType"
            value={formData.paymentType}
            onChange={changeHandle}
            error={errors.paymentType}
          />
         <FormElements.Input
            label={<span>Bank Name <span className="text-red-500">*</span></span>}
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={changeHandle}
            error={errors.bankName}
          />
          <FormElements.Input
            label={<span>Bank Account Number <span className="text-red-500">*</span></span>}
            type="text"
            name="bankAccountNo"
            value={formData.bankAccountNo}
            onChange={changeHandle}
            error={errors.bankAccountNo}
          />
          <FormElements.Input
            label={<span>Account Holder Name<span className="text-red-500">*</span></span>}
            type="text"
            name="accHolderName"
            value={formData.accHolderName}
            onChange={changeHandle}
            error={errors.accHolderName}
          />
          <FormElements.Input
            label={<span>IFSC Code <span className="text-red-500">*</span></span>}
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={changeHandle}
            error={errors.ifscCode}
          />
          <FormElements.Input
            label={<span>Branch Name <span className="text-red-500">*</span></span>}
            type="text"
            name="branchName"
            value={formData.branchName}
            onChange={changeHandle}
            error={errors.branchName}
          />
        </div>
      </form>
    </div>
  );
}
