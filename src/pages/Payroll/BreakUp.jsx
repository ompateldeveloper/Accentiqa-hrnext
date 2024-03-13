import React, { useState, useRef, useEffect } from "react";
import { validateBreakUp } from "./validateBreakUp";
import { useFormValidation } from "../../hooks/useFormValidation";
import * as FormElements from "../../components/ui/FormElements";
import { useNavigate } from "react-router-dom";
import { number } from "prop-types";
import YearsRange from "./YearsRange";
export default function BreakUp() {
  const navigate = useNavigate();
  const [mainSalary, setMainSalary] = useState(0);
  const [readonly, setReadonly] = useState(false);
  const [initialData,setInitialData]=useState({
    mainSalary: 0,
        basicSalary: 0,
        hra: 0,
        medicalAll: 1250,
        transportAll: 1600,
        specialAll: 0,
        lta: 0,
        cea: 0,
        variablePay: 0,
        grossSalary: 0,
        gratuity: 0,
        empPfCon: 1800,
        retirementBenefits: 0,
        ctc: 0,
        empPf: 1800,
        pt: 200,
        foodCoupon: 0,
        loan: 0,
        insurance: 0,
        tds: 0,
        others: 0,
        takeHome: 0,
  })
  const onSubmit = (v) => {
    v.basicSalary = parseInt(mainSalary) !== 0 ? parseInt(mainSalary) * 0.5 : 0;
    v.hra = v.basicSalary !== 0 ? v.basicSalary * 0.5 : 0;
  };
  const { formData, errors, changeHandle, handleSubmit, cleanup } =
    useFormValidation(
      {
        mainSalary: 0,
        basicSalary: 0,
        hra: 0,
        medicalAll: 1250,
        transportAll: 1600,
        specialAll: 0,
        lta: 0,
        cea: 0,
        variablePay: 0,
        grossSalary: 0,
        gratuity: 0,
        empPfCon: 1800,
        retirementBenefits: 0,
        ctc: 0,
        empPf: 1800,
        pt: 200,
        foodCoupon: 0,
        loan: 0,
        insurance: 0,
        tds: 0,
        others: 0,
        takeHome: 0,
      },
      onSubmit,
      validateBreakUp
    );
  const handleCompute = (value) => {
    console.log(value)
    if (readonly) {
      formData.basicSalary = Math.round(parseInt(value) !== 0 ? parseInt(value) * 0.5 : 0);
      formData.hra =
      Math.round(formData.basicSalary !== 0 ? formData.basicSalary * 0.5 : 0);
      formData.specialAll =
      Math.round(parseInt(value) !== 0
          ? parseInt(value) -
            (formData.basicSalary +
              formData.hra +
              formData.medicalAll +
              formData.transportAll +
              formData.lta +
              formData.cea)
          : 0);
      formData.grossSalary =
      Math.round(parseInt(value) !== 0
          ? formData.basicSalary +
            formData.hra +
            formData.medicalAll +
            formData.transportAll +
            formData.lta +
            formData.cea +
            formData.specialAll
          : 0);
      formData.variablePay =
      Math.round(formData.basicSalary !== 0 ? formData.basicSalary * 0.108 : 0);
      formData.retirementBenefits = Math.round(formData.gratuity + formData.empPfCon);
      formData.ctc =
      Math.round(formData.grossSalary +
        formData.variablePay +
        formData.retirementBenefits);
      formData.takeHome =
      Math.round(formData.grossSalary -
        (formData.empPf +
          formData.pt +
          formData.foodCoupon +
          formData.loan +
          formData.insurance +
          formData.tds +
          formData.others));
    }
  };
  const navigateTo = () => {
    navigate("/dashboard/pay-slip", {
      state: { data: { ...formData, mainSalary } },
    });
  };

  const toggleReadOnly = () => {
    setReadonly(!readonly);
    setMainSalary(0)
    formData.mainSalary= 0,
    formData.basicSalary= 0,
    formData.hra= 0,
    formData.medicalAll= 1250,
    formData.transportAll= 1600,
    formData.specialAll= 0,
    formData.lta= 0,
    formData.cea= 0,
    formData.variablePay= 0,
    formData.grossSalary= 0,
    formData.gratuity= 0,
    formData.empPfCon= 1800,
    formData.retirementBenefits= 0,
    formData.ctc= 0,
    formData.empPf= 1800,
    formData.pt= 200,
    formData.foodCoupon= 0,
    formData.loan= 0,
    formData.insurance= 0,
    formData.tds= 0,
    formData.others= 0,
    formData.takeHome= 0
  };
  return (
    <div className="container mx-auto px-2">
      <p className="block tracking-wide text-zinc-600 text-2xl font-bold mr-2 mb-4">
        Salary Breakup
      </p>
      <div className="flex justify-end ">
        <label class="inline-flex items-center cursor-pointer mr-10">
          <input
            type="checkbox"
            value=""
            class="sr-only peer"
            onChange={toggleReadOnly}
          />
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Auto
          </span>
        </label>
        <div className="relative inline-block">
          <YearsRange />
        </div>
      </div>

      <form className="break-up-form">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Enter Salary"
            type="number"
            name="mainSalary"
            value={mainSalary}
            onChange={(e) => {
              const { value } = e.target;
              setMainSalary(value);
              handleCompute(value);
              
            }}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Basic Salary"
            type="number"
            name="basicSalary"
            value={formData.basicSalary}
            onChange={(e) => {
              changeHandle(e);
              handleCompute(value);
            }}
            error={errors.basicSalary}
            readOnly={readonly}
          />
          <FormElements.Input
            label="HRA"
            type="number"
            name="hra"
            value={formData.hra}
            onChange={changeHandle}
            error={errors.hra}
            readOnly={readonly}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Medical Allowance"
            type="number"
            name="medicalAll"
            value={formData.medicalAll}
            onChange={changeHandle}
            error={errors.medicalAll}
            readOnly={readonly}
          />
          <FormElements.Input
            label="Transport Allowance"
            type="number"
            name="transportAll"
            value={formData.transportAll}
            onChange={changeHandle}
            error={errors.transportAll}
            readOnly={readonly}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="LTA"
            type="number"
            name="lta"
            value={formData.lta}
            onChange={changeHandle}
            error={errors.lta}
            readOnly={readonly}
          />
          <FormElements.Input
            label="CEA"
            type="number"
            name="cea"
            value={formData.cea}
            onChange={changeHandle}
            error={errors.cea}
            readOnly={readonly}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Special Allowance"
            type="number"
            name="specialAll"
            value={formData.specialAll}
            onChange={changeHandle}
            error={errors.specialAll}
            readOnly={readonly}
          />
          <FormElements.Input
            label="Monthly Gross Salary"
            type="number"
            name="grossSalary"
            value={formData.grossSalary}
            onChange={changeHandle}
            error={errors.grossSalary}
            readOnly={readonly}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Variable Pay"
            type="number"
            name="variablePay"
            value={formData.variablePay}
            onChange={changeHandle}
            error={errors.variablePay}
            readOnly={readonly}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Gratuity"
            type="number"
            name="gratuity"
            value={formData.gratuity}
            onChange={changeHandle}
            error={errors.gratuity}
            readOnly={readonly}
          />
          <FormElements.Input
            label="Employer PF Contribution"
            type="number"
            name="empPfCon"
            value={formData.empPfCon}
            onChange={changeHandle}
            error={errors.empPfCon}
            readOnly={readonly}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Retirement Benefits"
            type="number"
            name="retirementBenefits"
            value={formData.retirementBenefits}
            onChange={changeHandle}
            error={errors.retirementBenefits}
            readOnly={readonly}
          />
          <FormElements.Input
            label="CTC"
            type="number"
            name="ctc"
            value={formData.ctc}
            onChange={changeHandle}
            error={errors.ctc}
            readOnly={readonly}
          />
        </div>
        <p className="block tracking-wide text-zinc-600 text-2xl font-bold mr-2 mb-4">
          Monthly Deductions
        </p>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Employee PF"
            type="number"
            name="empPf"
            value={formData.empPf}
            onChange={changeHandle}
            error={errors.empPf}
            readOnly={readonly}
          />
          <FormElements.Input
            label="PT"
            type="number"
            name="pt"
            value={formData.pt}
            onChange={changeHandle}
            error={errors.pt}
            readOnly={readonly}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Food Coupon"
            type="number"
            name="foodCoupon"
            value={formData.foodCoupon}
            onChange={changeHandle}
            error={errors.foodCoupon}
            readOnly={readonly}
          />
          <FormElements.Input
            label="Loan"
            type="number"
            name="loan"
            value={formData.loan}
            onChange={changeHandle}
            error={errors.loan}
            readOnly={readonly}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Insurance"
            type="number"
            name="insurance"
            value={formData.insurance}
            onChange={changeHandle}
            error={errors.insurance}
            readOnly={readonly}
          />
          <FormElements.Input
            label="TDS"
            type="number"
            name="tds"
            value={formData.tds}
            onChange={changeHandle}
            error={errors.tds}
            readOnly={readonly}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Input
            label="Other Deductions"
            type="number"
            name="others"
            value={formData.others}
            onChange={changeHandle}
            error={errors.others}
            readOnly={readonly}
          />
          <FormElements.Input
            label="Monthly Take Home"
            type="number"
            name="takeHome"
            value={formData.takeHome}
            onChange={changeHandle}
            error={errors.takeHome}
            readOnly={readonly}
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
