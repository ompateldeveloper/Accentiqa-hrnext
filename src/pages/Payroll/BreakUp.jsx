import React, { useRef } from "react";
import { validateBreakUp } from "./validateBreakUp";
import { useFormValidation } from "../../hooks/useFormValidation";
import * as FormElements from "../../components/ui/FormElements";
import { useNavigate } from "react-router-dom";
export default function BreakUp() {
  const navigate = useNavigate();
  const { formData, errors, changeHandle, handleSubmit, cleanup } =
    useFormValidation(
      {
        basicSalary: "",
        hra: "",
        medicalAll: "",
        transportAll: "",
        lta: "",
        cea: "",
        grossSalary: "",
        gratuity: "",
        empPfCon: "",
        retirementBenefits: "",
        ctc: "",
        empPf: "",
        pt: "",
        foodCoupon: "",
        loan: "",
        insurance: "",
        tds: "",
        others: "",
      },
      (values) => {},
      validateBreakUp
    );
  const navigateTo = () => {
    navigate("/dashboard/pay-slip", { state: { data: formData } });
  };

  // Function to generate an array of years
  const generateYears = (startYear, endYear) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  // Function to generate an array of year ranges
  const generateYearRanges = (startYear, endYear) => {
    const yearRanges = [];
    for (let year = startYear; year <= endYear; year++) {
      const nextYear = year + 1;
      yearRanges.push(`${year}-${nextYear}`);
    }
    return yearRanges;
  };

  // Generate an array of individual years and year ranges from 1900 to 2100
  const years = generateYears(1999, 2030);
  const yearRanges = generateYearRanges(1999, 2030);
  const options = [...years, ...yearRanges];

  // Ref to select element
  const selectRef = useRef(null);

  return (
    <div className="container mx-auto px-2">
      <p className="block tracking-wide text-zinc-600 text-2xl font-bold mr-2 mb-4">
        Salary Break Up
      </p>
      <div className="flex justify-end ">
        <div className="">
          <label
            htmlFor="yearSelect"
            className="peer-focus:text-theme-1 text-gray-400 duration-300 select-none"
          >
            Select a Year :{" "}
          </label>
          <select
            className=" bg-theme-1 font-semibold text-theme-text text-opacity-50 focus:text-opacity-100  h-12 p-2 peer bg-transparent border-2 border-gray-200 rounded-lg focus:border-theme-1 outline-none transition duration-300"
            id="yearSelect"
            ref={selectRef}
            style={{ height: "auto" }}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <form className="break-up-form">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Enter Salary"
            type="text"
            name="salary"
            value={formData.salary}
            onChange={changeHandle}
            error={errors.salary}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Basic Salary"
            type="text"
            name="basicSalary"
            value={formData.basicSalary}
            onChange={changeHandle}
            error={errors.basicSalary}
          />
          <FormElements.Input
            label="HRA"
            type="text"
            name="hra"
            value={formData.hra}
            onChange={changeHandle}
            error={errors.hra}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Medical Allowance"
            type="text"
            name="medicalAll"
            value={formData.medicalAll}
            onChange={changeHandle}
            error={errors.medicalAll}
          />
          <FormElements.Input
            label="Transport Allowance"
            type="text"
            name="transportAll"
            value={formData.transportAll}
            onChange={changeHandle}
            error={errors.transportAll}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="LTA"
            type="text"
            name="lta"
            value={formData.lta}
            onChange={changeHandle}
            error={errors.lta}
          />
          <FormElements.Input
            label="CEA"
            type="text"
            name="cea"
            value={formData.cea}
            onChange={changeHandle}
            error={errors.cea}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Special Allowance"
            type="text"
            name="specialAll"
            value={formData.specialAll}
            onChange={changeHandle}
            error={errors.specialAll}
          />
          <FormElements.Input
            label="Monthly Gross Salary"
            type="text"
            name="grossSalary"
            value={formData.grossSalary}
            onChange={changeHandle}
            error={errors.grossSalary}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Variable Pay"
            type="text"
            name="variablePay"
            value={formData.variablePay}
            onChange={changeHandle}
            error={errors.variablePay}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Gratuity"
            type="text"
            name="gratuity"
            value={formData.gratuity}
            onChange={changeHandle}
            error={errors.gratuity}
          />
          <FormElements.Input
            label="Employer PF Contribution"
            type="text"
            name="empPfCon"
            value={formData.empPfCon}
            onChange={changeHandle}
            error={errors.empPfCon}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Retirement Benefits"
            type="text"
            name="retirementBenefits"
            value={formData.retirementBenefits}
            onChange={changeHandle}
            error={errors.retirementBenefits}
          />
          <FormElements.Input
            label="CTC"
            type="text"
            name="ctc"
            value={formData.ctc}
            onChange={changeHandle}
            error={errors.ctc}
          />
        </div>
        <p className="block tracking-wide text-zinc-600 text-2xl font-bold mr-2 mb-4">
          Monthly Deductions
        </p>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Employee PF"
            type="text"
            name="empPf"
            value={formData.empPf}
            onChange={changeHandle}
            error={errors.empPf}
          />
          <FormElements.Input
            label="PT"
            type="text"
            name="pt"
            value={formData.pt}
            onChange={changeHandle}
            error={errors.pt}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Food Coupon"
            type="text"
            name="foodCoupon"
            value={formData.foodCoupon}
            onChange={changeHandle}
            error={errors.foodCoupon}
          />
          <FormElements.Input
            label="Loan"
            type="text"
            name="loan"
            value={formData.loan}
            onChange={changeHandle}
            error={errors.loan}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Insurance"
            type="text"
            name="insurance"
            value={formData.insurance}
            onChange={changeHandle}
            error={errors.insurance}
          />
          <FormElements.Input
            label="TDS"
            type="text"
            name="tds"
            value={formData.tds}
            onChange={changeHandle}
            error={errors.tds}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Other Deductions"
            type="text"
            name="others"
            value={formData.others}
            onChange={changeHandle}
            error={errors.others}
          />
        </div>
        <button
          onClick={() => {
            handleSubmit();
            navigateTo();
          }}
          className="bg-theme-1 hover:bg-theme-1 text-white font-bold py-2 px-4 my-10 rounded"
        >
          Generate Pay Slip
        </button>
      </form>
    </div>
  );
}
