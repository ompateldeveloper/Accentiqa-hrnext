import React, { useState, useRef, useEffect } from "react";
import { validateBreakUp } from "./validateBreakUp";
import { useFormValidation } from "../../hooks/useFormValidation";
import * as FormElements from "../../components/ui/FormElements";
import { useNavigate } from "react-router-dom";
import { number } from "prop-types";
export default function BreakUp() {
    const navigate = useNavigate();
    const [mainSalary,setMainSalary] = useState(0);

    const onSubmit = (v)=>{
        v.basicSalary=parseInt(mainSalary)!==0?parseInt(mainSalary)*0.5:0;
        v.hra=v.basicSalary!==0?v.basicSalary*0.5:0;
    }
    const { formData, errors, changeHandle, handleSubmit, cleanup } =
        useFormValidation(
            {
                salary:0,
                basicSalary:0,
                hra: 0,
                medicalAll: 1250,
                transportAll: 1600,
                specialAll:0,
                lta: 0,
                cea: 0,
                variablePay:0,
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
            },
            onSubmit,
            validateBreakUp
        );
    const handleCompute = (value)=>{
        if(typeof(parseInt(value))==='number'){
            formData.basicSalary=parseInt(value)!==0?parseInt(value)*0.5:0;
            formData.hra=formData.basicSalary!==0?formData.basicSalary*0.5:0;
            formData.specialAll=parseInt(value)!==0?parseInt(value)-(formData.basicSalary+formData.hra+formData.medicalAll+formData.transportAll+formData.lta+formData.cea):0;
            formData.grossSalary=parseInt(value)!==0?(formData.basicSalary+formData.hra+formData.medicalAll+formData.transportAll+formData.lta+formData.cea+formData.specialAll):0
            formData.variablePay=formData.basicSalary!==0?formData.basicSalary*0.108:0;
            formData.retirementBenefits=formData.gratuity+formData.empPfCon;
            formData.ctc=formData.grossSalary+formData.variablePay+formData.retirementBenefits;
            formData.takeHome=formData.grossSalary-(formData.empPf+formData.pt+formData.foodCoupon+formData.loan+formData.insurance+formData.tds+formData.others)
        }
    }
    const navigateTo = () => {
        navigate("/dashboard/pay-slip", { state: { data: formData } });
    };
    //Date Drop Down
    const allMonths = [
        { name: "January", value: 1 },
        { name: "February", value: 2 },
        { name: "March", value: 3 },
        { name: "April", value: 4 },
        { name: "May", value: 5 },
        { name: "June", value: 6 },
        { name: "July", value: 7 },
        { name: "August", value: 8 },
        { name: "September", value: 9 },
        { name: "October", value: 10 },
        { name: "November", value: 11 },
        { name: "December", value: 12 }
    ];

    const generateYearRanges = (startYear, endYear) => {
        const yearRanges = [];
        for (let year = startYear; year <= endYear; year++) {
            const nextYear = year + 1;
            yearRanges.push({ range: `${year}-${nextYear}`, isOpen: false });
        }
        return yearRanges;
    };

    const yearRanges = generateYearRanges(1999, 2030);

    const toggleAccordion = (index) => {
        const updatedYearRanges = [...yearRanges];
        updatedYearRanges[index].isOpen = !updatedYearRanges[index].isOpen;
        setYearRanges(updatedYearRanges);
    };

    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [yearRangesState, setYearRanges] = useState(yearRanges);
    const [isDrop, setIsDrop] = useState(false);

    const handleYearRangeSelect = (value) => {
        setSelectedYear(value);
        setSelectedMonth('');
    };

    const handleMonthSelect = (month) => {
        setSelectedMonth(month);
        setIsDrop(false)
    };
    console.log(selectedMonth)
    const getMonthsForYearRange = (yearRange) => {
        const [startYear, endYear] = yearRange.split('-').map(Number);
        const months = [];
        for (let year = startYear; year <= endYear; year++) {
            const startMonth = year === startYear ? 3 : 1;
            const endMonth = year === endYear ? 3 : 12;
            for (let month = startMonth; month <= endMonth; month++) {
                const monthName = allMonths[month - 1].name;
                months.push(`${monthName} ${year}`);
            }
        }
        return months;
    };
    const toggleDropDown = () => {
        setIsDrop(!isDrop)
    }
    console.log(selectedMonth);
    return (
        <div className="container mx-auto px-2">
            <p className="block tracking-wide text-zinc-600 text-2xl font-bold mr-2 mb-4">
                Salary Break Up
            </p>
            <div className="flex justify-end ">
                <div className="relative inline-block">
                    <button
                        type="button"
                        className="min-w-[200px] bg-theme-1 font-semibold text-theme-text text-opacity-50 focus:text-opacity-100 h-12 p-2 bg-transparent border-2 border-gray-200 rounded-lg focus:border-theme-1 outline-none transition duration-300"
                        onClick={toggleDropDown}>
                        {selectedYear
                            ?
                            // (selectedYear + `( ${selectedMonth} )` || "Select Year")
                            (selectedYear + (selectedMonth ? `( ${selectedMonth} )` : "( Month )"))

                            :
                            "Select Year"
                        }
                    </button>
                    {isDrop &&
                        <div className="overflow-auto w-[200px] h-[200px] absolute bg-white border border-gray-200 rounded-lg shadow-lg">
                            {yearRangesState.map((yearRange, index) => (
                                <div key={index} className="h-auto">
                                    <div
                                        className="text-zinc-600 text-md font-medium cursor-pointer px-4 py-2 hover:bg-gray-100"
                                        onClick={() => {
                                            toggleAccordion(index);
                                            handleYearRangeSelect(yearRange.range);
                                        }}
                                    >
                                        {yearRange.range}
                                    </div>
                                    {yearRange.isOpen && (
                                        <div className="ml-2">
                                            {getMonthsForYearRange(yearRange.range).map(
                                                (month, monthIndex) => (
                                                    <div
                                                        key={monthIndex}
                                                        className={`text-zinc-600 text-sm cursor-pointer px-2 py-1 ${selectedMonth === month ? "bg-gray-200" : ""
                                                            }`}
                                                        onClick={() => {
                                                            handleMonthSelect(month);
                                                        }}
                                                    >
                                                        {month}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>

            <form className="break-up-form">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
                    <FormElements.Input
                        label="Enter Salary"
                        type="number"
                        name="salary"
                        value={mainSalary}
                        onChange={(e)=>{
                            const {value} = e.target;
                            setMainSalary(value)
                            handleCompute(value)
                        }}
                        error={errors.salary}
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
                    <FormElements.Input
                        label="Basic Salary"
                        type="number"
                        name="basicSalary"
                        value={formData.basicSalary}
                        onChange={changeHandle}
                        error={errors.basicSalary}
                    />
                    <FormElements.Input
                        label="HRA"
                        type="number"
                        name="hra"
                        value={formData.hra}
                        onChange={changeHandle}
                        error={errors.hra}
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
                    />
                    <FormElements.Input
                        label="Transport Allowance"
                        type="number"
                        name="transportAll"
                        value={formData.transportAll}
                        onChange={changeHandle}
                        error={errors.transportAll}
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
                    />
                    <FormElements.Input
                        label="CEA"
                        type="number"
                        name="cea"
                        value={formData.cea}
                        onChange={changeHandle}
                        error={errors.cea}
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
                    />
                    <FormElements.Input
                        label="Monthly Gross Salary"
                        type="number"
                        name="grossSalary"
                        value={formData.grossSalary}
                        onChange={changeHandle}
                        error={errors.grossSalary}
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
                    />
                    <FormElements.Input
                        label="Employer PF Contribution"
                        type="number"
                        name="empPfCon"
                        value={formData.empPfCon}
                        onChange={changeHandle}
                        error={errors.empPfCon}
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
                    />
                    <FormElements.Input
                        label="CTC"
                        type="number"
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
                        type="number"
                        name="empPf"
                        value={formData.empPf}
                        onChange={changeHandle}
                        error={errors.empPf}
                    />
                    <FormElements.Input
                        label="PT"
                        type="number"
                        name="pt"
                        value={formData.pt}
                        onChange={changeHandle}
                        error={errors.pt}
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
                    />
                    <FormElements.Input
                        label="Loan"
                        type="number"
                        name="loan"
                        value={formData.loan}
                        onChange={changeHandle}
                        error={errors.loan}
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
                    />
                    <FormElements.Input
                        label="TDS"
                        type="number"
                        name="tds"
                        value={formData.tds}
                        onChange={changeHandle}
                        error={errors.tds}
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
                    />
                      <FormElements.Input
                        label="Monthly Take Home"
                        type="number"
                        name="takeHome"
                        value={formData.takeHome}
                        onChange={changeHandle}
                        error={errors.takeHome}
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
