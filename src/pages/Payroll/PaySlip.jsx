import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useLocation } from "react-router-dom";
import { Download } from "lucide-react";
import Button from "../../components/ui/Button";
export default function PaySlip() {
  const location = useLocation();
  const { data } = location.state || {}; // Accessing data safely
  console.log("data",data)

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
          <div className="grid grid-cols-1 p-2">
            <div className="text-center">
              <p className="block tracking-wide text-zinc-600 text-xl font-bold">
                ACCENTIQA SYSTEMS PRIVATE LIMITED
              </p>
              <p className="block tracking-wide text-zinc-600 text-sm ">
                # JSP IMPERIA,3rd Floor,Street No - 3,Pathrikanagar,Hi-Tech
                city,Madhapur,Hyderabad,Telangana
              </p>
              <p className="block tracking-wide text-zinc-600 text-lg font-bold mt-5">
                Pay Slip For The Month Of December
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="border-t-2 border-r-2 border-zinc-600 p-2">
              <div className="grid grid-cols-2">
                <p className="text-zinc-600 text-sm">Name:</p>
                <p className="text-zinc-600 text-sm text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-zinc-600 text-sm">Joining Date:</p>
                <p className="text-zinc-600 text-sm text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-zinc-600 text-sm">Designation:</p>
                <p className="text-zinc-600 text-sm text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-zinc-600 text-sm">Department:</p>
                <p className="text-zinc-600 text-sm text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-zinc-600 text-sm">Location:</p>
                <p className="text-zinc-600 text-sm text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-zinc-600 text-sm">Effective Work days:</p>
                <p className="text-zinc-600 text-sm text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-zinc-600 text-sm">LOP:</p>
                <p className="text-zinc-600 text-sm text-right">xxxxx</p>
              </div>
            </div>
            <div className="border-t-2 border-zinc-600 p-2">
              <div className="grid grid-cols-2">
                <p className="text-zinc-600 text-sm">Employe No:</p>
                <p className="text-zinc-600 text-sm text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-zinc-600 text-sm">Bank Name:</p>
                <p className="text-zinc-600 text-sm text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-zinc-600 text-sm">Bank Account No:</p>
                <p className="text-zinc-600 text-sm text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-zinc-600 text-sm">PAN No:</p>
                <p className="text-zinc-600 text-sm text-right">xxxxx</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-zinc-600 text-sm">PF UAN:</p>
                <p className="text-zinc-600 text-sm text-right">xxxxx</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="border-t-2 border-r-2 border-zinc-600 ">
              <div className="grid grid-cols-6 border-b-2 border-zinc-600 p-2">
                <p className="block tracking-wide text-zinc-600 text-md font-semibold col-start-1 col-span-4">
                  Earnings
                </p>
                <p className="block tracking-wide text-zinc-600 text-md font-semibold">
                  Full
                </p>
                <p className="block tracking-wide text-zinc-600 text-md font-semibold">
                  Actual
                </p>
              </div>
              <div className="grid grid-cols-6 px-5 pt-2">
                <p className="text-zinc-600 text-sm col-start-1 col-span-4">BASIC</p>
                <p className="text-zinc-600 text-sm">16080</p>
                <p className="text-zinc-600 text-sm">16080</p>
              </div>
              <div className="grid grid-cols-6 px-5">
                <p className="text-zinc-600 text-sm col-start-1 col-span-4">HRA</p>
                <p className="text-zinc-600 text-sm">8040</p>
                <p className="text-zinc-600 text-sm">8040</p>
              </div>
              <div className="grid grid-cols-6 mt-10 px-5">
                <p className="text-zinc-600 text-sm col-start-1 col-span-4">MEDICAL ALLOWANCE</p>
                <p className="text-zinc-600 text-sm"></p>
                <p className="text-zinc-600 text-sm"></p>
              </div>
              <div className="grid grid-cols-6 px-5">
                <p className="text-zinc-600 text-sm col-start-1 col-span-4">CONVEYANCE</p>
                <p className="text-zinc-600 text-sm"></p>
                <p className="text-zinc-600 text-sm"></p>
              </div>
              <div className="grid grid-cols-6 px-5">
                <p className="text-zinc-600 text-sm col-start-1 col-span-4">LTA</p>
                <p className="text-zinc-600 text-sm"></p>
                <p className="text-zinc-600 text-sm"></p>
              </div>
              <div className="grid grid-cols-6 px-5 pb-5">
                <p className="text-zinc-600 text-sm col-start-1 col-span-4">SPECIAL ALLOWANCE</p>
                <p className="text-zinc-600 text-sm">618</p>
                <p className="text-zinc-600 text-sm">618</p>
              </div>
            </div>
            <div className="border-t-2 border-zinc-600">
              <div className=" border-zinc-600 ">
                <div className="grid grid-cols-6 border-b-2 border-zinc-600 p-2">
                  <p className="block tracking-wide text-zinc-600 text-md font-semibold col-start-1 col-span-5">
                    Deductions
                  </p>
                  <p className="block tracking-wide text-zinc-600 text-md font-semibold">
                    Actual
                  </p>
                </div>
                <div className="grid grid-cols-6 px-5 pt-2">
                  <p className="text-zinc-600 text-sm col-start-1 col-span-5">PF</p>
                  <p className="text-zinc-600 text-sm">1930</p>
                </div>
                <div className="grid grid-cols-6 px-5">
                  <p className="text-zinc-600 text-sm col-start-1 col-span-5">PROF TAX</p>
                  <p className="text-zinc-600 text-sm">200</p>
                </div>
                <div className="grid grid-cols-6 px-5">
                  <p className="text-zinc-600 text-sm col-start-1 col-span-5">TDS</p>
                  <p className="text-zinc-600 text-sm"></p>
                </div>
                <div className="grid grid-cols-6 px-5">
                  <p className="text-zinc-600 text-sm col-start-1 col-span-5">INSURANCE</p>
                  <p className="text-zinc-600 text-sm"></p>
                </div>
                <div className="grid grid-cols-6 px-5">
                  <p className="text-zinc-600 text-sm col-start-1 col-span-5">OTHER DEDUCTIONS</p>
                  <p className="text-zinc-600 text-sm"></p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-r-2 border-zinc-600">
              <div className="grid grid-cols-6 border-b-2 border-zinc-600 p-2">
                <p className="block tracking-wide text-zinc-600 text-md font-semibold col-start-1 col-span-4">
                  Total Earnings:INR
                </p>
                <p className="block tracking-wide text-zinc-600 text-md font-semibold">
                  24738
                </p>
                <p className="block tracking-wide text-zinc-600 text-md font-semibold">
                  24738
                </p>
              </div>
            </div>
            <div className="border-t-2 border-zinc-600">
              <div className="grid grid-cols-6 border-b-2 border-zinc-600 p-2">
                <p className="block tracking-wide text-zinc-600 text-md font-semibold col-start-1 col-span-5">
                  Total Deductions:INR
                </p>
                <p className="block tracking-wide text-zinc-600 text-md font-semibold">
                  2130
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 p-2">
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
      <Button iconleft={<Download className="mr-2"/>} className=" py-2 px-4 my-10 " onClick={handleConvertToPDF}>Down Load PDF</Button>
    </div>
  );
}
