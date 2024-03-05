import React, {
  startTransition,
  useCallback,
  useEffect,
  useState,
} from "react";
import { cn } from "../../lib/utils";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import EmployeeDetails from "./EmployeeDetails";
import Button from "../../components/ui/Button";
import * as FormElements from "../../components/ui/FormElements";
import Statutoryinfo from "./Statutoryinfo";
import Payment from "./Payment";
import Employeeposition from "./Employeeposition";
import { useFormValidation } from "../../hooks/useFormValidation";
import { validate1 } from "./validators";
import { validate2 } from "./validators";
import { validate3 } from "./validators";
import { validate4 } from "./validators";
export default function AddEmployee() {
  const [tabs, setTabs] = useState(1);
  const [newFormData, setNewFormData] = useState({});
  const form1 = useFormValidation(
    {
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
    },
    (values) => {
    },
    validate1
  );
  const form2 = useFormValidation(
    {
      grade: "",
      costCenter: "",
      designation: "",
      location: "",
      division: "",
      department: "",
      project:"",
      projectDate:"",
      shift: "",
    },
    (values) => {
      
    },
    validate2
  );
  const form3 = useFormValidation(
    {
      panNo: "",
      aadharNo: "",
      passportNo: "",
    },
    (values) => {
    },
    validate3
  );
  const form4 = useFormValidation(
    {
      paymentType: "",
    },
    (values) => {
    },
    validate4
  );
  const selectTab = (newtab) => {
    startTransition(() => {
      setTabs(newtab);
    });
  };
  const nextTab = () => {
    if (tabs === 1) {
      if (form1.handleSubmit()) {
        if (tabs <= 4) {
          setTabs((prev) => prev + 1);
          
        }
      }
    }
    if (tabs === 2) {
      if (form2.handleSubmit()) {
        if (tabs <= 4) {
          setTabs((prev) => prev + 1);
        }
      }
    }
    if (tabs === 3) {
      if (form3.handleSubmit()) {
        if (tabs <= 4) {
          setTabs((prev) => prev + 1);
        }
      }
    }
    if (tabs === 4) {
      if (form4.handleSubmit()) {
        if (tabs <= 4) {
          setTabs((prev) => prev + 1);
        }
      }
    }
  };
  const prevTab = () => {
    if (tabs > 1) {
      setTabs((prev) => prev - 1);
    }
  };
  return (
    <div className="overflow-y-auto">
      <div className="tab-nav w-full relative h-20 flex items-center justify-between ">
        <div className="absolute h-1 bg-theme-2 w-full -z-10"></div>
        <TabsList className="flex items-center justify-around w-full ">
          <TabsTrigger
            active="bg-green-600"
            selectTab={selectTab}
            tab={tabs}
            tabIndex={1}
            className={cn(
              "bg-green-400 hover:bg-opacity-80  rounded-full h-5 w-5 "
            )}
          ></TabsTrigger>
          <TabsTrigger
            active="bg-green-600"
            selectTab={selectTab}
            tab={tabs}
            tabIndex={2}
            className={cn(
              "bg-green-400 hover:bg-opacity-80  rounded-full h-5 w-5 "
            )}
          ></TabsTrigger>
          <TabsTrigger
            active="bg-green-600"
            selectTab={selectTab}
            tab={tabs}
            tabIndex={3}
            className={cn(
              "bg-green-400 hover:bg-opacity-80  rounded-full h-5 w-5 "
            )}
          ></TabsTrigger>
          <TabsTrigger
            active="bg-green-600"
            selectTab={selectTab}
            tab={tabs}
            tabIndex={4}
            className={cn(
              "bg-green-400 hover:bg-opacity-80  rounded-full h-5 w-5 "
            )}
          ></TabsTrigger>
        </TabsList>
      </div>
      <div className="w-full">
        <TabsContent tab={tabs} tabIndex={1}>
          <EmployeeDetails form={form1} />
        </TabsContent>
        <TabsContent tab={tabs} tabIndex={2}>
          <Employeeposition form={form2} />
        </TabsContent>
        <TabsContent tab={tabs} tabIndex={3}>
          <Statutoryinfo form={form3} />
        </TabsContent>
        <TabsContent tab={tabs} tabIndex={4}>
          <Payment form={form4} />
        </TabsContent>
      </div>
      <div className="page-nav flex items-center  gap-2 m-4">
        <Button
          secondary="true"
          onClick={() => prevTab()}
          disabled={tabs == 1}
          iconleft={<ArrowLeft className="h-5" />}
        >
          Previous
        </Button>
        <Button
          secondary="true"
          onClick={() => nextTab()}
          disabled={tabs == 4}
          iconright={<ArrowRight className="h-5" />}
        >
          Next
        </Button>
        {tabs == 4 && <Button iconleft={<Check />}>Finish</Button>}
        <Button
          secondary="true"
          className=" border-red-700 text-red-700 bg-red-100 "
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

function TabsList(props) {
  const { className, children } = props;
  return (
    <nav className={cn("", className)} {...props}>
      <div className="absolute"></div>
      {children}
    </nav>
  );
}

function TabsTrigger(props) {
  const { tab, selectTab, tabIndex, icon, active } = props;
  return (
    <button
      onClick={() => selectTab(tabIndex)}
      className={cn(
        "p-2 flex items-center justify-center duration-200",
        props.className,
        tab === tabIndex && (active || "border-b-blue-500")
      )}
    >
      {icon && icon}
      {props.children}
    </button>
  );
}
function TabsContent(props) {
  const { tab, tabIndex, className } = props;
  return (
    tab === tabIndex && (
      <div className={cn("container", className)} {...props}>
        {props.children}
      </div>
    )
  );
}
