import React, { useState } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import { ChevronDown } from "lucide-react";
import * as FormElements from "../../components/ui/FormElements";
const EmployeeDetails = () => {
  const [initialState, setinitialState] = useState({
    empSeries: "",
    probationPeriod: "",
    empNo: "",
    confirmDate: "",
    name: "",
    email: "",
    dob: "",
    mobileNo: "",
    aadharNo: "",
    emergencyName: "",
    gender: "",
    emergencyNo: "",
    reportingMg: "",
    fathersName: "",
    status: "",
    spouseName: "",
    doj: "",
    allow: null,
  });
  // const changeHandle=(e)=>{
  //     const {name,value,checked}=e.target

  //     if(e.target.type==="checkbox"){
  //         setFormData({
  //             ...formData,
  //             allow: e.target.checked
  //         })
  //         console.log(checked);
  //         // setAllowed(checked)
  //     } else {
  //         setFormData({
  //             ...formData,
  //             [name]:value
  //         })
  //     }
  //     //Validation
  //     //Validation For name
  //     const newErrors = { ...errors };
  //     if (name === 'name') {
  //       if (!value.trim()) {
  //         newErrors.name = 'Username is required';
  //       } else if (value.length < 3) {
  //         newErrors.name = 'Username must be at least 3 characters long';
  //       } else {
  //         delete newErrors.name;
  //       }
  //     }
  //    // Update validation errors
  // setErrors(newErrors);

  // }
  // const submitForm=(e)=>{
  //     e.preventDefault()
  //     console.log(formData)
  // }
  const validate = (values) => {
    const errors = {};
    //Validation For empSeries
    if (!values.empSeries.trim()) {
      errors.empSeries = "Please select an option";
    }
    //Validation For empSeries
    if (!values.probationPeriod.trim()) {
      errors.probationPeriod = "Number is required";
    }
    //Validation For empNo
    if (!values.empNo.trim()) {
      errors.empNo = "Number is required";
    }
    //Validation For confirmDate
    if (!values.confirmDate.trim()) {
      errors.confirmDate = "Date is required";
    }
    //Validation For name
    if (!values.name.trim()) {
      errors.name = "Name is required";
    } else if (values.name.length < 3) {
      errors.name = "Name must be at least 3 characters long";
    }
    //Validation For email
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Invalid email address";
    }
    //Validation For DOB
    if (!values.dob.trim()) {
      errors.dob = "Date Of Birth is required";
    }

    // Validation For mobileNo
    if (!values.mobileNo.trim()) {
      errors.mobileNo = "Mobile number is required";
    } else if (!/^\d{1,10}$/.test(values.mobileNo)) {
      errors.mobileNo = "Please provide 10 digits";
    }

    // validation For aadharNo
    if (!values.aadharNo.trim()) {
      errors.aadharNo = "Aadhar number is required";
    } else if (!/^\d{12}$/.test(values.aadharNo)) {
      errors.aadharNo = "Invalid Aadhar number";
    }

    //Validation For emergencyName
    if (!values.emergencyName.trim()) {
      errors.emergencyName = "Name is required";
    } else if (values.emergencyName.length < 3) {
      errors.emergencyName = "Name must be at least 3 characters long";
    }

    // validation For gender
    if (!values.gender) {
      errors.gender = "Please select a gender";
    }
    // Validation For emergencyNo
    if (!values.emergencyNo.trim()) {
      errors.emergencyNo = "Mobile number is required";
    } else if (!/^\d{1,10}$/.test(values.emergencyNo)) {
      errors.emergencyNo = "Please provide 10 digits";
    }
    //Validation For reportingMg
    if (!values.reportingMg.trim()) {
      errors.reportingMg = "Please select an option";
    }
    //Validation For fathersName
    if (!values.fathersName.trim()) {
      errors.fathersName = "Name is required";
    } else if (values.fathersName.length < 3) {
      errors.fathersName = "Name must be at least 3 characters long";
    }
    //Validation For status
    if (!values.status.trim()) {
      errors.status = "Please select an option";
    }

    //Validation For spouseName
    if (!values.spouseName.trim()) {
      errors.spouseName = "Name is required";
    } else if (values.spouseName.length < 3) {
      errors.spouseName = "Name must be at least 3 characters long";
    }

    //Validation For DOJ
    if (!values.doj.trim()) {
      errors.doj = "Date Of Joining is required";
    }
    return errors;
  };
  const { formData, errors, changeHandle, handleSubmit } = useFormValidation(
    initialState,
    validate
  );
  return (
    <div className="container mx-auto px-2 employee-details ">
      <p className="block tracking-wide text-zinc-600 text-2xl font-bold mr-2 mb-4">
        Basic Information
      </p>
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Select
            label="Employee Number Series"
            optionsArray={[
              { value: "", title: "Select an Option" },
              { value: "audi", title: "Audi cars" },
              { value: "merc", title: "Mercideez benz cars" },
            ]}
            name="empSeries"
            value={formData.empSeries}
            onChange={changeHandle}
            error={errors.empSeries}
          />
          <FormElements.Input
            label="Probation Period"
            type="number"
            className="w-32"
            name="probationPeriod"
            value={formData.probationPeriod}
            onChange={changeHandle}
            error={errors.probationPeriod}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Employee No"
            type="text"
            name="empNo"
            value={formData.empNo}
            onChange={changeHandle}
            error={errors.empNo}
          />
          <FormElements.Input
            label="Confirmation Date"
            type="date"
            name="confirmDate"
            value={formData.confirmDate}
            onChange={changeHandle}
            error={errors.confirmDate}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandle}
            error={errors.name}
          />
          <FormElements.Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandle}
            error={errors.email}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Date Of Birth"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={changeHandle}
            error={errors.dob}
          />
          <FormElements.Input
            label="Mobile Number"
            type="text"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={changeHandle}
            error={errors.mobileNo}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Aadhar Number"
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={changeHandle}
            error={errors.aadharNo}
          />
          <FormElements.Input
            label="EMERGENCY CONTACT NAME"
            type="text"
            name="emergencyName"
            value={formData.emergencyName}
            onChange={changeHandle}
            error={errors.emergencyName}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.RadioGroup className="flex items-center gap-2 " label="Gender" error={errors.gender}>
            <FormElements.Radio name="gender" value="male" label="Male" onChange={changeHandle} />
            <FormElements.Radio name="gender" value="female" label="Female" onChange={changeHandle}/>
            <FormElements.Radio name="gender" value="others" label="Others" onChange={changeHandle}/>
          </FormElements.RadioGroup>
          <FormElements.Input
            label="Emergency Contact Number"
            type="text"
            name="emergencyNo"
            value={formData.emergencyNo}
            onChange={changeHandle}
            error={errors.emergencyNo}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
        <FormElements.Select
            label="Reporting Manager"
            optionsArray={[
              { value: "", title: "Select an Option" },
              { value: "audi", title: "Audi cars" },
              { value: "merc", title: "Mercideez benz cars" },
            ]}
            name="reportingMg"
            value={formData.reportingMg}
            onChange={changeHandle}
            error={errors.reportingMg}
          />
             <FormElements.Input
            label="Father's Name"
            type="text"
            name="fathersName"
            value={formData.fathersName}
            onChange={changeHandle}
            error={errors.fathersName}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
        <FormElements.Select
            label="Status"
            optionsArray={[
              { value: "", title: "Select an Option" },
              { value: "audi", title: "Audi cars" },
              { value: "merc", title: "Mercideez benz cars" },
            ]}
            name="status"
            value={formData.status}
            onChange={changeHandle}
            error={errors.status}
          />
             <FormElements.Input
            label="Spouse Name"
            type="text"
            name="spouseName"
            value={formData.spouseName}
            onChange={changeHandle}
            error={errors.spouseName}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
        <FormElements.Input
            label="Date Of Joining"
            type="date"
            name="doj"
            value={formData.doj}
            onChange={changeHandle}
            error={errors.doj}
          />
        </div>
        <div className="grid grid-cols-1 text-center gap-1 my-5">
        <FormElements.Checkbox
            label="Allow the employee to fill in their information"
            name="allow"
            value={formData.allow}
            onChange={changeHandle}
            error={errors.allow}
          />
          <a
              href="#"
              className="text-blue-700 text-2xs font-bold my-5"
              text-xs
            >
              Employee Onboarding Policy
            </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-1 ">
        
          <div className="grid grid-cols-2 items-center ">
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EmployeeDetails;
