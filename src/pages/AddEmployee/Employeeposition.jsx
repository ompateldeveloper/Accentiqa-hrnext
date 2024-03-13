import React, { useEffect, useState } from "react";
import * as FormElements from "../../components/ui/FormElements";
import { useFormValidation } from "../../hooks/useFormValidation";
import { getUrl } from "../../components/Url";
import axios from "axios";
import { useAuthContext } from "../../contexts/AuthContext";
import { Edit } from "lucide-react";
import EmpDialog from "./EmpDialog";
import Button from "../../components/ui/Button";

export default function Employeeposition({ form }) {
    const { formData, errors, changeHandle, handleSubmit } = form;

    const { user } = useAuthContext();
    const [department, setDepartment] = useState([]);
    const [division, setDivision] = useState([]);
    const [designation, setDesignation] = useState([]);
    const [project, setProject] = useState([]);
    const [latch,setLatch] = useState(false)
    const url = getUrl();
    const fetchDept = async () => {
        axios
            .get(url + '/api/v1/misc/departments', {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                setDepartment(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const fetchDiv = async () => {
        axios
            .get(url + '/api/v1/misc/divisions', {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                setDivision(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const fetchDesig = async () => {
        axios
            .get(url + '/api/v1/misc/designations', {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                setDesignation(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const fetchProj = async () => {
        axios
            .get(url + '/api/v1/misc/projects', {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                setProject(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        fetchDept()
        fetchDesig()
        fetchDiv()
        fetchProj()
    }, [latch])
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
        <div className="container mx-auto px-2 employee-details">
            {dialogUrl&&<EmpDialog setLatch={setLatch} open={open} handleClose={handleClose} dialogUrl={dialogUrl} setDialogUrl={setDialogUrl} />}
            <p className="block tracking-wide text-zinc-600 text-2xl font-bold mr-2 mb-4">
                Employee Position
            </p>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
                    <FormElements.Select
                        label="Grade"
                        optionsArray={[
                            { value: "", title: "Select an Option" },
                            { value: "audi", title: "Audi cars" },
                            { value: "merc", title: "Mercideez benz cars" },
                        ]}
                        name="grade"
                        value={formData.grade}
                        onChange={changeHandle}
                        error={errors.grade}
                    />
                    <FormElements.Select
                        label="Cost Center"
                        optionsArray={[
                            { value: "", title: "Select an Option" },
                            { value: "audi", title: "Audi cars" },
                            { value: "merc", title: "Mercideez benz cars" },
                        ]}
                        name="costCenter"
                        value={formData.costCenter}
                        onChange={changeHandle}
                        error={errors.costCenter}
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
                    <FormElements.Select
                        label="Designation"
                        optionsArray={[{ id: 0, name: "Select an Option" }, ...designation]}
                        name="designationId"
                        value={formData.designationId}

                        onChange={changeHandle}
                        error={errors.designationId}
                        edit={
                            <Button secondary className='scale-[80%] p-1 mt-2' iconleft={<Edit />} onClick={() => { setDialogUrl(prev=>(url + '/api/v1/misc/designations')); setOpen(true); }} />
                        }
                    />
                    <FormElements.Select
                        label="Location *"
                        optionsArray={[
                            { value: "", title: "Select an Option" },
                            { value: "audi", title: "Audi cars" },
                            { value: "merc", title: "Mercideez benz cars" },
                        ]}
                        name="location"
                        value={formData.location}
                        onChange={changeHandle}
                        error={errors.location}
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
                    <FormElements.Select
                        label="Division"
                        optionsArray={[{ id: 0, name: "Select an Option" }, ...division]}
                        name="divisionId"
                        value={formData.divisionId}
                        onChange={changeHandle}
                        error={errors.divisionId}
                        edit={
                            <Button secondary className='scale-[80%] p-1 mt-2' iconleft={<Edit />} onClick={() => { setDialogUrl(prev=>url + '/api/v1/misc/divisions'); setOpen(true); }} />
                        }
                    />

                    <FormElements.Select
                        label="Department"
                        optionsArray={[{ id: 0, name: "Select an Option" }, ...department]}
                        name="departmentId"
                        value={formData.departmentId}

                        onChange={changeHandle}
                        error={errors.departmentId}
                        edit={
                            <Button secondary className='scale-[80%] p-1 mt-2' iconleft={<Edit />} onClick={() => { setDialogUrl(prev=>url + '/api/v1/misc/departments'); setOpen(true); }} />
                        }
                    />


                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
                    <FormElements.Select
                        label="Project"
                        optionsArray={[{ id: 0, name: "Select an Option" }, ...project]}
                        name="projectId"
                        value={formData.projectId}

                        onChange={changeHandle}
                        error={errors.projectId}
                        edit={
                            <Button secondary className='scale-[80%] p-1 mt-2' iconleft={<Edit />} onClick={() => { setDialogUrl(url + '/api/v1/misc/projects'); setOpen(true); }} />
                        }
                    />
                    <FormElements.Input
                        label="Project Allocation Date"
                        type='date'
                        name="projectDate"
                        value={formData.projectDate}
                        onChange={changeHandle}
                        error={errors.projectDate}
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
                    <FormElements.Select
                        label="Attendance Shift *"
                        optionsArray={[
                            { value: "", title: "Select an Option" },
                            { value: "audi", title: "Audi cars" },
                            { value: "merc", title: "Mercideez benz cars" },
                        ]}
                        name="shift"
                        value={formData.shift}
                        onChange={changeHandle}
                        error={errors.shift}
                    />
                </div>
            </div>
        </div>
    );
}
