import React, { useState } from "react";
import { useFormValidation } from "../hooks/useFormValidation";
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
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="empSerie"
              >
                Employee Number Series
              </label>
            </div>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="empSeries"
                name="empSeries"
                onChange={changeHandle}
              >
                <option value="">---Select---</option>
                <option value="New Mexico">New Mexico</option>
                <option value="Missouri">Missouri</option>
                <option value="Texas">Texas</option>
              </select>
              {errors.empSeries && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.empSeries}
                </span>
              )}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="probationPeriod"
              >
                Probation Period
              </label>
            </div>
            <div className="grid grid-cols-2 items-center">
              <input
                className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="probationPeriod"
                name="probationPeriod"
                type="number"
                placeholder=" "
                value={formData.probationPeriod}
                onChange={changeHandle}
              />
              <span>Days</span>
              {errors.probationPeriod && (
                <span className="text-xs text-right text-red-700">
                  {errors.probationPeriod}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="empNo"
              >
                Employee No
              </label>
            </div>
            <div className="w-full">
              <input
                className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="empNo"
                name="empNo"
                type="text"
                placeholder=""
                value={formData.empNo}
                onChange={changeHandle}
              />
              {errors.empNo && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.empNo}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="confirmDate"
              >
                Confirmation Date
              </label>
            </div>
            <div className="w-full">
              <input
                className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="confirmDate"
                name="confirmDate"
                type="date"
                placeholder=" "
                value={formData.confirmDate}
                onChange={changeHandle}
              />
              {errors.confirmDate && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.confirmDate}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="name"
              >
                Name
              </label>
            </div>
            <div className="w-full">
              <input
                className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                name="name"
                type="text"
                placeholder=" "
                value={formData.name}
                onChange={changeHandle}
              />
              {errors.name && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.name}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="email"
              >
                Email
              </label>
            </div>
            <div className="w-full">
              <input
                className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                name="email"
                type="email"
                placeholder=" "
                value={formData.email}
                onChange={changeHandle}
              />
              {errors.email && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.email}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="dob"
              >
                Date Of Birth
              </label>
            </div>
            <div className="w-full">
              <input
                className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="dob"
                name="dob"
                type="date"
                placeholder=" "
                value={formData.dob}
                onChange={changeHandle}
              />
              {errors.dob && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.dob}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="mobileNo"
              >
                Mobile Number
              </label>
            </div>
            <div className="w-full">
              <input
                className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="mobileNo"
                name="mobileNo"
                type="text"
                placeholder=" "
                value={formData.mobileNo}
                onChange={changeHandle}
              />
              {errors.mobileNo && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.mobileNo}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="aadharNo"
              >
                Aadhar Number
              </label>
            </div>
            <div className="w-full">
              <input
                className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="aadharNo"
                name="aadharNo"
                type="text"
                placeholder=" "
                value={formData.aadharNo}
                onChange={changeHandle}
              />
              {errors.aadharNo && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.aadharNo}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="emergencyName"
              >
                Emergency Contact Name
              </label>
            </div>
            <div className="w-full">
              <input
                className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="emergencyName"
                name="emergencyName"
                type="text"
                placeholder=""
                value={formData.emergencyName}
                onChange={changeHandle}
              />
              {errors.emergencyName && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.emergencyName}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="gender"
              >
                Gender
              </label>
            </div>
            <div className="">
              <div className="flex ">
                <label className="flex items-center mr-5">
                  <input
                    type="radio"
                    name="gender"
                    value={"male"}
                    onChange={changeHandle}
                  />
                  &nbsp; Male
                </label>

                <label className="flex items-center mr-4">
                  <input
                    type="radio"
                    name="gender"
                    value={"female"}
                    onChange={changeHandle}
                  />
                  &nbsp; Female
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={"others"}
                    onChange={changeHandle}
                  />
                  &nbsp; Others
                </label>
              </div>
              {errors.gender && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.gender}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="emergencyNo"
              >
                Emergency Contact Number
              </label>
            </div>
            <div className="w-full">
              <input
                className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="emergencyNo"
                name="emergencyNo"
                type="text"
                placeholder=" "
                value={formData.emergencyNo}
                onChange={changeHandle}
              />
              {errors.emergencyNo && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.emergencyNo}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="reportingMg"
              >
                Reporting Manager
              </label>
            </div>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="reportingMg"
                name="reportingMg"
                onChange={changeHandle}
              >
                <option value="">---Select---</option>
                <option value="New Mexico">New Mexico</option>
                <option value="Missouri">Missouri</option>
                <option value="Texas">Texas</option>
              </select>
              {errors.reportingMg && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.reportingMg}
                </span>
              )}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="fathersName"
              >
                Father's Name
              </label>
            </div>
            <div className="w-full">
              <input
                className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="fathersName"
                name="fathersName"
                type="text"
                placeholder=" "
                value={formData.fathersName}
                onChange={changeHandle}
              />
              {errors.fathersName && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.fathersName}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="status"
              >
                Status
              </label>
            </div>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="status"
                name="status"
                onChange={changeHandle}
              >
                <option value="">---Select---</option>
                <option value="New Mexico">New Mexico</option>
                <option value="Missouri">Missouri</option>
                <option value="Texas">Texas</option>
              </select>
              {errors.status && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.status}
                </span>
              )}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="spouseName"
              >
                Spouse Name
              </label>
            </div>
            <div className="w-full">
              <input
                className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="spouseName"
                name="spouseName"
                type="text"
                placeholder=" "
                value={formData.spouseName}
                onChange={changeHandle}
              />
              {errors.spouseName && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.spouseName}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="doj"
              >
                Date Of Joining
              </label>
            </div>
            <div className="w-full">
            <input
              className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="doj"
              name="doj"
              type="date"
              placeholder=" "
              value={formData.doj}
              onChange={changeHandle}
            />
              {errors.doj && (
                <span className="text-xs text-right absolute text-red-700">
                  {errors.doj}
                </span>
              )}
              </div>
          </div>
          <div className="grid grid-cols-2 items-center "></div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <input
                type="checkbox"
                id="allow"
                name="allowed"
                checked={formData.allow}
                onChange={changeHandle}
              />
            </div>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold ml-2"
              for="allow"
            >
              Allow the employee to fill in their information
            </label>
          </div>
          <div className="grid grid-cols-2 items-center "></div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right"></div>
            <a href="#">Employee Onboarding Policy</a>
          </div>
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
