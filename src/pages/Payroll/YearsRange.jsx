import React,{ useState } from "react";

const YearsRange =() =>{
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
    { name: "December", value: 12 },
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

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [yearRangesState, setYearRanges] = useState(yearRanges);
  const [isDrop, setIsDrop] = useState(false);

  const handleYearRangeSelect = (value) => {
    setSelectedYear(value);
    setSelectedMonth("");
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setIsDrop(false);
  };
  const getMonthsForYearRange = (yearRange) => {
    const [startYear, endYear] = yearRange.split("-").map(Number);
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
    setIsDrop(!isDrop);
  };
  console.log(selectedMonth)
  return (
    <div>
           <button
            type="button"
            className="min-w-[200px] bg-theme-1 font-semibold text-theme-text text-opacity-50 focus:text-opacity-100 h-12 p-2 bg-transparent border-2 border-gray-200 rounded-lg focus:border-theme-1 outline-none transition duration-300"
            onClick={toggleDropDown}
          >
            {selectedYear
              ? // (selectedYear + `( ${selectedMonth} )` || "Select Year")
                selectedYear +
                (selectedMonth ? `( ${selectedMonth} )` : "( Month )")
              : "Select Year"}
          </button>
          {isDrop && (
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
                            className={`text-zinc-600 text-sm cursor-pointer px-2 py-1 ${
                              selectedMonth === month ? "bg-gray-200" : ""
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
          )}
    </div>
  )
}
export default YearsRange;