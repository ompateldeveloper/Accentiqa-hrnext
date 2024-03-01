import React from "react";
import * as FormElements from "../../components/ui/FormElements";
import { useFormValidation } from "../../hooks/useFormValidation";
export default function Payment() {
  const initialState = {
    paymentType: "",
  };
  const validate = (values) => {
    const errors = {};
    if (!values.paymentType.trim()) {
      errors.paymentType = "Please select an option";
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
        Payment Mode
      </p>
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Select
            label="Payment Type"
            optionsArray={[
              { value: "", title: "Select an Option" },
              { value: "audi", title: "Audi cars" },
              { value: "merc", title: "Mercideez benz cars" },
            ]}
            name="paymentType"
            value={formData.paymentType}
            onChange={changeHandle}
            error={errors.paymentType}
          />
        </div>
        <button
          type="submit"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"
        >
          Submit
        </button>
      </form>
      {/* <div className='flex flex-col  gap-3 mt-10 ml-32'>

            <div className='flex' >
            <label className=' font-semibold '>Payment Type</label><select className='border-zinc-500 hover:border-[#5872E3] border-2 rounded-sm ml-[70px] w-56'>
                <option value="" disable="true" hidden>Select Payment Type</option>
                </select> 
            </div>
        </div> */}
    </div>
  );
}
