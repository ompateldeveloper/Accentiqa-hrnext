import React from 'react';

const EmployeeRow = ({ employee }) => {
  const { name, salary, resignationDate, exitDate } = employee;
  const remainingSalary = calculateRemainingSalary(salary, resignationDate, exitDate);

  return (
    <tr>
      <td className="pl-2 pb-2 border border-slate-300">{name}</td>
      <td className="pl-2 pb-2 border border-slate-300">{salary}</td>
      <td className="pl-2 pb-2 border border-slate-300">{resignationDate}</td>
      <td className="pl-2 pb-2 border border-slate-300">{exitDate}</td>
      <td className="pl-2 pb-2 border border-slate-300">{remainingSalary}</td>
    </tr>
  );
};

const calculateRemainingSalary = (salary, resignationDate, exitDate) => {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const resignationDateTime = new Date(resignationDate).getTime();
  const exitDateTime = new Date(exitDate).getTime();
  const daysWorked = Math.floor((exitDateTime - resignationDateTime) / millisecondsPerDay);

  // Assuming a monthly salary, calculate the remaining salary based on days worked
  const daysInMonth = 30; // Assuming a month has 30 days
  const monthlySalary = salary / daysInMonth;
  const remainingSalary = daysWorked * monthlySalary;

  return remainingSalary.toFixed(2); // Convert to fixed decimal places
};

export default EmployeeRow;