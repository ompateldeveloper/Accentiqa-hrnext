import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Button from "../../components/ui/Button";
import { Download } from "lucide-react";
const EmployeeSalaryCalculator = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      salary: 50000,
      joiningDate: new Date("2020-01-01"),
      hikes: [
        { date: new Date("2021-01-01"), newSalary: 55000 },
        { date: new Date("2022-01-01"), newSalary: 60000 },
        { date: new Date("2023-01-01"), newSalary: 65000 },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      salary: 60000,
      joiningDate: new Date("2019-05-15"),
      hikes: [
        { date: new Date("2020-05-15"), newSalary: 65000 },
        { date: new Date("2021-05-15"), newSalary: 70000 },
      ],
    },
    {
      id: 3,
      name: "Alice Johnson",
      salary: 55000,
      joiningDate: new Date("2018-11-20"),
    },
    {
      id: 4,
      name: "Bob Brown",
      salary: 52000,
      joiningDate: new Date("2017-07-10"),
    },
    {
      id: 5,
      name: "Michael Lee",
      salary: 51000,
      joiningDate: new Date("2019-02-28"),
      hikes: [{ date: new Date("2020-02-28"), newSalary: 54000 }],
    },
    {
      id: 6,
      name: "Emily Davis",
      salary: 53000,
      joiningDate: new Date("2019-09-12"),
    },
    {
      id: 7,
      name: "David Wilson",
      salary: 52000,
      joiningDate: new Date("2020-08-05"),
      hikes: [{ date: new Date("2021-08-05"), newSalary: 55000 }],
    },
    {
      id: 8,
      name: "Emma Martinez",
      salary: 60000,
      joiningDate: new Date("2021-03-18"),
    },
    {
      id: 9,
      name: "William Taylor",
      salary: 58000,
      joiningDate: new Date("2018-04-25"),
      hikes: [
        { date: new Date("2019-04-25"), newSalary: 60000 },
        { date: new Date("2020-04-25"), newSalary: 62000 },
      ],
    },
    {
      id: 10,
      name: "Olivia Anderson",
      salary: 54000,
      joiningDate: new Date("2021-01-15"),
    },
  ]);

  const calculateTotalSalary = (employee) => {
    const currentDate = new Date();
    let totalSalary = 0;

    if (employee.hikes && employee.hikes.length > 0) {
      let prevHikeDate = employee.joiningDate;

      for (const hike of employee.hikes) {
        const hikeDuration =
          (hike.date - prevHikeDate) / (1000 * 60 * 60 * 24 * 30.417); // Approximate months
        totalSalary += hikeDuration * hike.newSalary;
        prevHikeDate = hike.date;
      }

      // Calculate salary after the last hike
      const lastHikeDuration =
        (currentDate - prevHikeDate) / (1000 * 60 * 60 * 24 * 30.417); // Approximate months
      totalSalary +=
        lastHikeDuration * employee.hikes[employee.hikes.length - 1].newSalary;
    } else {
      const employmentDuration =
        (currentDate - employee.joiningDate) / (1000 * 60 * 60 * 24 * 30.417); // Approximate months
      totalSalary = employee.salary * employmentDuration;
    }

    return totalSalary;
  };
  const contentRef = useRef(null);

  const handleConvertToPDF = () => {
    const input = document.getElementById("content-convert");

    html2canvas(input)
      .then((canvas) => {
        const pdf = new jsPDF("p", "px", "a4");
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 75, 40, 297, 210);
        pdf.save("Employee-Salary.pdf");
      })
      .catch((error) => {
        console.error("Error converting to PDF:", error);
      });
  };
  return (
    <div className="">
      <div id="content-convert" ref={contentRef}>
        <h1>Employee Salaries</h1>
        <table className="min-w-full border-spacing-0 border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="pl-2 pb-2 border border-slate-300">Name</th>
              <th className="pl-2 pb-2 border border-slate-300">Salary</th>
              <th className="pl-2 pb-2 border border-slate-300">
                Joining Date
              </th>
              <th className="pl-2 pb-2 border border-slate-300">Hikes</th>
              <th className="pl-2 pb-2 border border-slate-300">
                Number of Working Days
              </th>
              <th className="pl-2 pb-2 border border-slate-300">
                Total Number of Months
              </th>
              <th className="pl-2 pb-2 border border-slate-300">
                Total Salary
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="pl-2 pb-2  border border-slate-300">
                  {employee.name}
                </td>
                <td className="pl-2 pb-2  border border-slate-300">
                  {employee.salary}
                </td>
                <td className="pl-2 pb-2  border border-slate-300">
                  {employee.joiningDate.toDateString()}
                </td>
                <td className="pl-2 pb-2  border border-slate-300">
                  {employee.hikes ? (
                    <ul>
                      {employee.hikes.map((hike, index) => (
                        <li key={index}>
                          {hike.date.toDateString()}: {hike.newSalary}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </td>
                <td className="pl-2  pb-2  border border-slate-300">
                  {(() => {
                    const currentDate = new Date();
                    const employmentDuration = Math.floor(
                      (currentDate - employee.joiningDate) /
                        (1000 * 60 * 60 * 24)
                    );
                    return employmentDuration;
                  })()}
                </td>
                <td className="pl-2  pb-2  border border-slate-300">
                  {(() => {
                    const currentDate = new Date();
                    const employmentDuration = Math.floor(
                      (currentDate - employee.joiningDate) /
                        (1000 * 60 * 60 * 24 * 30.417)
                    );
                    return employmentDuration;
                  })()}
                </td>
                <td className="pl-2  pb-2  border border-slate-300">
                  {calculateTotalSalary(employee).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button
        iconleft={<Download className="mr-2" />}
        className=" py-2 px-4 my-10 "
        onClick={handleConvertToPDF}
      >
        Down Load PDF
      </Button>
    </div>
  );
};

export default EmployeeSalaryCalculator;
