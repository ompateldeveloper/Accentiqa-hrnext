import React, { useEffect, useLayoutEffect, useState } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import { ChevronDown } from "lucide-react";
import * as FormElements from "../../components/ui/FormElements";
const EmployeeDetails = ({form}) => {
  const {formData, errors, changeHandle, handleSubmit } = form


  const onSubmit = (data) =>{
    console.log("new")
 }

  return (
    <div className="container mx-auto px-2 employee-details ">
      <p className="block tracking-wide text-zinc-600 text-2xl font-bold mr-2 mb-4">
        Basic Information
      </p>
      <form className="employee-form"  >
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
            label="Emergency Contact Name"
            type="text"
            name="emergencyName"
            value={formData.emergencyName}
            onChange={changeHandle}
            error={errors.emergencyName}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.RadioGroup className="flex items-center gap-2 " label="Gender" error={errors.gender}>
            <FormElements.Radio name="gender" checked={formData.gender==='male'} value="male" label="Male" onChange={changeHandle} />
            <FormElements.Radio name="gender" checked={formData.gender==='female'} value="female" label="Female" onChange={changeHandle}/>
            <FormElements.Radio name="gender" checked={formData.gender==='others'} value="others" label="Others" onChange={changeHandle}/>
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
            >
              Employee Onboarding Policy
            </a>
        </div>
      </form>
    </div>
  );
};
export default EmployeeDetails;
