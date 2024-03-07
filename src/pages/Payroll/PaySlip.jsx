import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default function PaySlip() {
  const contentRef = useRef(null);

  const handleConvertToPDF = () => {
    const input = document.getElementById("content-convert");

    html2canvas(input)
      .then((canvas) => {
        const pdf = new jsPDF("p", "px", "a4");
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 75, 40, 297, 210);
        pdf.save("pay-slip.pdf");
      })
      .catch((error) => {
        console.error("Error converting to PDF:", error);
      });
  };
  return (
    <div className="">
      <div className="" id="content-convert" ref={contentRef}>
        <div className="container border-2 border-zinc-600">
          <div className="grid grid-cols-1 md:grid-cols-1 p-5">
            <div className="text-center">
              <p className="block tracking-wide text-zinc-600 text-2xl font-bold">
                ACCENTIQA SYSTEMS PRIVATE LIMITED
              </p>
              <p className="block tracking-wide text-zinc-600 text-sm ">
                # JSP IMPERIA,3rd Floor,Street No - 3,Pathrikanagar,Hi-Tech
                city,Madhapur,Hyderabad,Telangana
              </p>
              <p className="block tracking-wide text-zinc-600 text-xl font-bold mt-10">
                Pay Slip For The Month Of December
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 ">
            <div className="border-t-2 border-r-2 border-zinc-600 p-5">
              <div className="grid grid-cols-2">
                <p>Name:</p>
                <p className="text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Joining Date:</p>
                <p className="text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Designation:</p>
                <p className="text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Department:</p>
                <p className="text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Location:</p>
                <p className="text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Effective Work days:</p>
                <p className="text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p>LOP:</p>
                <p className="text-right">xxxxx</p>
              </div>
            </div>
            <div className="border-t-2 border-zinc-600 p-5">
              <div className="grid grid-cols-2">
                <p>Employe No:</p>
                <p className="text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Bank Name:</p>
                <p className="text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Bank Account No:</p>
                <p className="text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p>PAN No:</p>
                <p className="text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p>PF UAN:</p>
                <p className="text-right">xxxxx</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 ">
            <div className="border-t-2 border-r-2 border-zinc-600 ">
              <div className="grid grid-cols-6 border-b-2 border-zinc-600 p-5">
                <p className="block tracking-wide text-zinc-600 text-lg font-bold col-start-1 col-span-4">
                  Earnings
                </p>
                <p className="block tracking-wide text-zinc-600 text-lg font-bold">
                  Full
                </p>
                <p className="block tracking-wide text-zinc-600 text-lg font-bold">
                  Actual
                </p>
              </div>
              <div className="grid grid-cols-6 px-5 pt-5">
                <p className="col-start-1 col-span-4">BASIC</p>
                <p className=" ">16080</p>
                <p className=" ">16080</p>
              </div>
              <div className="grid grid-cols-6 px-5">
                <p className="col-start-1 col-span-4">HRA</p>
                <p className=" ">8040</p>
                <p className=" ">8040</p>
              </div>
              <div className="grid grid-cols-6 mt-10 px-5">
                <p className="col-start-1 col-span-4">MEDICAL ALLOWANCE</p>
                <p className=" "></p>
                <p className=" "></p>
              </div>
              <div className="grid grid-cols-6 px-5">
                <p className="col-start-1 col-span-4">CONVEYANCE</p>
                <p className=" "></p>
                <p className=" "></p>
              </div>
              <div className="grid grid-cols-6 px-5">
                <p className="col-start-1 col-span-4">LTA</p>
                <p className=" "></p>
                <p className=" "></p>
              </div>
              <div className="grid grid-cols-6 px-5 pb-5">
                <p className="col-start-1 col-span-4">SPECIAL ALLOWANCE</p>
                <p className=" ">618</p>
                <p className=" ">618</p>
              </div>
            </div>
            <div className="border-t-2 border-zinc-600">
              <div className=" border-zinc-600 ">
                <div className="grid grid-cols-6 border-b-2 border-zinc-600 p-5">
                  <p className="block tracking-wide text-zinc-600 text-lg font-bold col-start-1 col-span-5">
                    Deductions
                  </p>
                  <p className="block tracking-wide text-zinc-600 text-lg font-bold">
                    Actual
                  </p>
                </div>
                <div className="grid grid-cols-6 px-5 pt-5">
                  <p className="col-start-1 col-span-5">PF</p>
                  <p className="">1930</p>
                </div>
                <div className="grid grid-cols-6 px-5">
                  <p className="col-start-1 col-span-5">PROF TAX</p>
                  <p className="">200</p>
                </div>
                <div className="grid grid-cols-6 px-5">
                  <p className="col-start-1 col-span-5">TDS</p>
                  <p className=""></p>
                </div>
                <div className="grid grid-cols-6 px-5">
                  <p className="col-start-1 col-span-5">INSURANCE</p>
                  <p className=""></p>
                </div>
                <div className="grid grid-cols-6 px-5">
                  <p className="col-start-1 col-span-5">OTHER DEDUCTIONS</p>
                  <p className=""></p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-r-2 border-zinc-600">
              <div className="grid grid-cols-6 border-b-2 border-zinc-600 p-5">
                <p className="block tracking-wide text-zinc-600 text-lg font-bold col-start-1 col-span-4">
                  Total Earnings:INR
                </p>
                <p className="block tracking-wide text-zinc-600 text-lg font-bold">
                  24738
                </p>
                <p className="block tracking-wide text-zinc-600 text-lg font-bold">
                  24738
                </p>
              </div>
            </div>
            <div className="border-t-2 border-zinc-600">
              <div className="grid grid-cols-6 border-b-2 border-zinc-600 p-5">
                <p className="block tracking-wide text-zinc-600 text-lg font-bold col-start-1 col-span-5">
                  Total Deductions:INR
                </p>
                <p className="block tracking-wide text-zinc-600 text-lg font-bold">
                  2130
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 p-5">
            <p className=" text-zinc-600 text-md mb-2">
              Net Pay for the month(Total Earnings-Total Deductions):
              <span className="font-bold ml-4">22608</span>
            </p>
            <p className=" text-zinc-600 text-sm">
              (Rupees twenty two thousand six hundred eight only)
            </p>
          </div>
        </div>
        <p className=" text-zinc-600 text-sm text-center">
          This is system generated payslip and does not require signature.
        </p>
      </div>
      <button onClick={handleConvertToPDF}>Generate PDF</button>
    </div>
  );
}
