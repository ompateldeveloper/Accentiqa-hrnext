import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import { ChevronDown } from "lucide-react";
import * as FormElements from "../../components/ui/FormElements";
import axios from "axios";
import { getUrl } from "../../components/Url";
import { useAuthContext } from "../../contexts/AuthContext";
import { Edit } from "lucide-react";
import EmpDialog from "./EmpDialog";
import Button from "../../components/ui/Button";
const EmployeeDetails = ({ form }) => {
    const { formData, errors, changeHandle, handleSubmit } = form
    const [reportingManager, setReportingManager] = useState([]);
    // const [autoEmp, setAutoEmp] = useState('');
    const autoemp = useRef();
    const [latch,setLatch] = useState(false)
    const url = getUrl();
    // if(user){}
    const {user} = useAuthContext();
    autoemp.current = axios.get(url + '/api/v1/misc/empnogen', {
        headers: {
            Authorization: `Bearer ${user?.token}`,
        },
    })
    
    const fetchRepoMg = async () => {
        axios
            .get(url + '/api/v1/misc/reportingmanager', {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                setReportingManager(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const fetchAutoEmp = async () => {
        axios
            .get(url + '/api/v1/misc/empnogen', {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                autoemp.current=response.data
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useLayoutEffect(() => {
        fetchRepoMg()
        // fetchAutoEmp()
    }, [])
    useEffect(() => {
        formData.empNo = (formData.empSeries==='manual'?formData.empNo:autoemp.current.uuid)
    },[])

    const onSubmit = (data) => {
        console.log(data);
    };
    const [open, setOpen] = useState();
    const [dialogUrl, setDialogUrl] = useState('')
    const handleClose=()=>{
        setOpen(false)
        setDialogUrl('')
    }
    return (
        <div className="container mx-auto px-2 employee-details ">
            {dialogUrl&&<EmpDialog setLatch={setLatch} open={open} handleClose={handleClose} dialogUrl={dialogUrl} setDialogUrl={setDialogUrl} />}
            <p className="block tracking-wide text-zinc-600 text-2xl font-bold mr-2 mb-4">
                Basic Information
            </p>
            <div className="employee-form"  >
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
                    <FormElements.Select
                        label={<span>Employee Number Series <span className="text-red-500">*</span></span>}
                        optionsArray={[
                            { value: "auto", title: "Automatic" },
                            { value: "manual", title: "Manual" },
                        ]}
                        name="empSeries"
                        value={formData.empSeries}
                        onChange={changeHandle}
                        error={errors.empSeries}
                    />
                    <FormElements.Input
                        label={<span>Probation Period<span className="text-red-500">*</span></span>}
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
                        label={<span>Employee No <span className="text-red-500">*</span></span>}
                        type="text"
                        name="empNo"
                        value={formData.empNo}
                        onChange={changeHandle}
                        error={errors.empNo}
                        readOnly={formData.empSeries==='manual'?false:true}
                    />
                    <FormElements.Input
                        label={<span>Confirmation Date <span className="text-red-500">*</span></span>}
                        type="date"
                        name="confirmDate"
                        value={formData.confirmDate}
                        onChange={changeHandle}
                        error={errors.confirmDate}
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
                    <FormElements.Input
                        label={<span>Name <span className="text-red-500">*</span></span>}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={changeHandle}
                        error={errors.name}
                    />
                    <FormElements.Input
                        label={<span>Email <span className="text-red-500">*</span></span>}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandle}
                        error={errors.email}
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
                    <FormElements.Input
                        label={<span>Date Of Birth <span className="text-red-500">*</span></span>}
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={changeHandle}
                        error={errors.dob}
                    />
                    <FormElements.Input
                        label={<span>Mobile Number <span className="text-red-500">*</span></span>}
                        type="text"
                        name="mobileNo"
                        value={formData.mobileNo}
                        onChange={changeHandle}
                        error={errors.mobileNo}
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
                    <FormElements.Input
                        label={<span>Aadhar Number <span className="text-red-500">*</span></span>}
                        type="text"
                        name="aadharNo"
                        value={formData.aadharNo}
                        onChange={changeHandle}
                        error={errors.aadharNo}
                    />
                    <FormElements.Input
                       label={<span>Emergency Contact Name <span className="text-red-500">*</span></span>}
                        type="text"
                        name="emergencyName"
                        value={formData.emergencyName}
                        onChange={changeHandle}
                        error={errors.emergencyName}
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
                    <FormElements.RadioGroup className="flex items-center gap-2 " label={<span>Gender <span className="text-red-500">*</span></span>} error={errors.gender}>
                        <FormElements.Radio name="gender" checked={formData.gender === 'male'} value="male" label="Male" onChange={changeHandle} />
                        <FormElements.Radio name="gender" checked={formData.gender === 'female'} value="female" label="Female" onChange={changeHandle} />
                        <FormElements.Radio name="gender" checked={formData.gender === 'others'} value="others" label="Others" onChange={changeHandle} />
                    </FormElements.RadioGroup>
                    <FormElements.Input
                        label={<span>Emergency Contact Number <span className="text-red-500">*</span></span>}
                        type="text"
                        name="emergencyNo"
                        value={formData.emergencyNo}
                        onChange={changeHandle}
                        error={errors.emergencyNo}
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
                    <FormElements.Select
                        label={<span>Reporting Manager <span className="text-red-500">*</span></span>}
                        optionsArray={[{ id: '', name: "Select an Option" }, ...reportingManager]}
                        name="reportingMgId"
                        value={formData.reportingMgId}
                        onChange={changeHandle}
                        error={errors.reportingMgId}
                        edit={
                            <Button secondary className='scale-[80%] p-1 mt-2' iconleft={<Edit />} onClick={() => { setDialogUrl(prev=>(url + '/api/v1/misc/reportingmanager')); setOpen(true); }} />
                        }
                    />
                    <FormElements.Input
                        label={<span>Father's Name <span className="text-red-500">*</span></span>}
                        type="text"
                        name="fathersName"
                        value={formData.fathersName}
                        onChange={changeHandle}
                        error={errors.fathersName}
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
                    <FormElements.Select
                        label={<span>Status <span className="text-red-500">*</span></span>}
                        optionsArray={[
                            { value: "", title: "Select an Option" },
                            { value: "Confirmed", title: "Confirmed" },
                            { value: "Consultant", title: "Consultant" },
                            { value: "Probation", title: "Probation" },
                        ]}
                        name="status"
                        value={formData.status}
                        onChange={changeHandle}
                        error={errors.status}
                    />
                    <FormElements.Input
                        label="Spouse Name "
                        type="text"
                        name="spouseName"
                        value={formData.spouseName}
                        onChange={changeHandle}
                        error={errors.spouseName}
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
                    <FormElements.Input
                        label={<span>Date Of Joining <span className="text-red-500">*</span></span>}
                        type="date"
                        name="doj"
                        value={formData.doj}
                        onChange={changeHandle}
                        error={errors.doj}
                    />
                </div>
                <div className="grid grid-cols-1 text-center gap-1 my-5">
                    <a
                        href="#"
                        className="text-blue-700 text-2xs font-bold my-5"
                    >
                        Employee Onboarding Policy
                    </a>
                </div>
            </div>
        </div>
    );
};
export default EmployeeDetails;
