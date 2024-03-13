import React, { useEffect, useState } from "react";
import * as FormElements from "../../components/ui/FormElements";
import { useFormValidation } from "../../hooks/useFormValidation";
import { getUrl } from "../../components/Url";
import axios from "axios";
import { useAuthContext } from "../../contexts/AuthContext";

import { Edit,X  } from "lucide-react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { IconButton, Stack } from "@mui/material";

export default function Employeeposition({ form }) {
  const { formData, errors, changeHandle, handleSubmit } = form;

  const { user } = useAuthContext();
  const [department, setDepartment] = useState([]);
  const [division, setDivision] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [location,setLocation] = useState([]);
  const [project, setProject] = useState([]);
  const [shift,setShift] =useState([]);
  const url = getUrl();

  const [open, openchange] = useState(false);
  const [open1, openchange1] = useState(false);
  const [open2, openchange2] = useState(false);
  const [open3, openchange3] = useState(false);
  const [open4, openchange4] = useState(false);
  const [open5, openchange5] = useState(false);

  const [newDesignation, setNewDesignation] = useState("");
  const [newLocation,setNewLocation] = useState("");
  const [newDivision, setNewDivision] = useState("");
  const [newProject, setNewProject] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [newShift,setNewShift] =useState("");


  const functionopenpopup = () => {
    openchange(true);
  };
  const functionopenpopup1 = () => {
    openchange1(true);
  };
  const functionopenpopup2 = () => {
    openchange2(true);
  };
  const functionopenpopup3 = () => {
    openchange3(true);
  };
  const functionopenpopup4 = () => {
    openchange4(true);
  };
  const functionopenpopup5 = () => {
    openchange5(true);
  };

  const closepopup = () => {
    openchange(false);
    openchange1(false);
    openchange2(false);
    openchange3(false);
    openchange4(false);
    openchange5(false);
  };
  const handleAddDesignation = () => {
    if (newDesignation.trim() !== "") {
       axios
            .post(url + '/api/v1/misc/designation',{name:newDesignation} ,{
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setDesignation([...designation, response.data]);
            })
            .catch((error) => {
                console.log(error);
            });
      }
  };

  const handleAddLocation = () => {
    if (newLocation.trim() !== "") {
       axios
            .post(url + '/api/v1/misc/location',{name:newLocation} ,{
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setLocation([...location, response.data]);
            })
            .catch((error) => {
                console.log(error);
            });
      }
  };

  const handleAddDivision = () => {
    if (newDivision.trim() !== "") {
       axios
            .post(url + '/api/v1/misc/division',{name:newDivision} ,{
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setDivision([...division, response.data]);
            })
            .catch((error) => {
                console.log(error);
            });
      }
  };
  const handleAddDepartment = () => {
    if (newDepartment.trim() !== "") {
       axios
            .post(url + '/api/v1/misc/department',{name:newDepartment} ,{
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setDepartment([...department, response.data]);
            })
            .catch((error) => {
                console.log(error);
            });
      }
  };

  const handleAddProject = () => {
    if (newProject.trim() !== "") {
       axios
            .post(url + '/api/v1/misc/project',{name:newProject} ,{
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setProject([...project, response.data]);
            })
            .catch((error) => {
                console.log(error);
            });
      }
  };

  const handleAddShift = () => {
    if (newShift.trim() !== "") {
       axios
            .post(url + '/api/v1/misc/shift',{name:newShift} ,{
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setShift([...shift, response.data]);
            })
            .catch((error) => {
                console.log(error);
            });
      }
  };

  const fetchDept = async () => {
    axios
      .get(url + "/api/v1/misc/departments", {
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
      .get(url + "/api/v1/misc/divisions", {
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
      .get(url + "/api/v1/misc/designations", {
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
      .get(url + "/api/v1/misc/projects", {
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
    fetchDept();
    fetchDesig();
    fetchDiv();
    fetchProj();
  }, []);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto px-2 employee-details">
      <p className="block tracking-wide text-zinc-600 text-2xl font-bold mr-2 mb-4">
        Employee Position
      </p>
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2  ">
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
          <Edit className="mt-10 ml-2 size-5"/>
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
          <Edit className="mt-10 ml-2 size-5"  />
        </div>
        <div className="grid grid-cols-2  ">
          <FormElements.Select
            label="Designation *"
            optionsArray={[{ id: 0, name: "Select an Option" }, ...designation]}
            name="designationId"
            value={formData.designationId}
            onChange={changeHandle}
            error={errors.designationId}
            
          /> <Edit className="mt-10 ml-2 cursor-pointer size-5" onClick={functionopenpopup} />
         
          <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
            <DialogTitle>
              Add Designation{" "}
             <X className="cursor-pointer" onClick={closepopup} style={{float:'right'}} />

            </DialogTitle>
            <DialogContent>
              <Stack spacing={2} margin={2}>
                <TextField
                  variant="outlined"
                  label="Designation"
                  value={newDesignation}
                  onChange={(e) => setNewDesignation(e.target.value)}
                ></TextField>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleAddDesignation}
                >
                  Submit
                </Button>
              </Stack>
            </DialogContent>
          </Dialog>

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
          <Edit className="mt-10 ml-2 cursor-pointer size-5" onClick={functionopenpopup1} />
         
         <Dialog open={open1} onClose={closepopup} fullWidth maxWidth="sm">
           <DialogTitle>
             Add Location{" "}
            <X className="cursor-pointer" onClick={closepopup} style={{float:'right'}} />

           </DialogTitle>
           <DialogContent>
             <Stack spacing={2} margin={2}>
               <TextField
                 variant="outlined"
                 label="Location"
                 value={newDesignation}
                 onChange={(e) => setNewLocation(e.target.value)}
               ></TextField>
               <Button
                 color="primary"
                 variant="contained"
                 onClick={handleAddLocation}
               >
                 Submit
               </Button>
             </Stack>
           </DialogContent>
         </Dialog>
        </div>
        <div className="grid grid-cols-2 ">
          <FormElements.Select
            label="Division *"
            optionsArray={[{ id: 0, name: "Select an Option" }, ...division]}
            name="divisionId"
            value={formData.divisionId}
            onChange={changeHandle}
            error={errors.divisionId}
          />
          <Edit className="mt-10 ml-2 cursor-pointer size-5" onClick={functionopenpopup2} />
         
         <Dialog open={open2} onClose={closepopup} fullWidth maxWidth="sm">
           <DialogTitle>
             Add Division{" "}
            <X className="cursor-pointer" onClick={closepopup} style={{float:'right'}} />

           </DialogTitle>
           <DialogContent>
             <Stack spacing={2} margin={2}>
               <TextField
                 variant="outlined"
                 label="Division"
                 value={newDivision}
                 onChange={(e) => setNewDivision(e.target.value)}
               ></TextField>
               <Button
                 color="primary"
                 variant="contained"
                 onClick={handleAddDivision}
               >
                 Submit
               </Button>
             </Stack>
           </DialogContent>
         </Dialog>

          <FormElements.Select
            label="Department *"
            optionsArray={[{ id: 0, name: "Select an Option" }, ...department]}
            name="departmentId"
            value={formData.departmentId}
            onChange={changeHandle}
            error={errors.departmentId}
          />
           <Edit className="mt-10 ml-2 cursor-pointer size-5" onClick={functionopenpopup3} />
         
         <Dialog open={open3} onClose={closepopup} fullWidth maxWidth="sm">
           <DialogTitle>
             Add Department{" "}
            <X className="cursor-pointer" onClick={closepopup} style={{float:'right'}} />

           </DialogTitle>
           <DialogContent>
             <Stack spacing={2} margin={2}>
               <TextField
                 variant="outlined"
                 label="Department"
                 value={newDepartment}
                 onChange={(e) => setNewDepartment(e.target.value)}
               ></TextField>
               <Button
                 color="primary"
                 variant="contained"
                 onClick={handleAddDepartment}
               >
                 Submit
               </Button>
             </Stack>
           </DialogContent>
         </Dialog>
        </div>
        <div className="grid grid-cols-2 ">
          <FormElements.Select
            label="Project *"
            optionsArray={[{ id: 0, name: "Select an Option" }, ...project]}
            name="projectId"
            value={formData.projectId}
            onChange={changeHandle}
            error={errors.projectId}
          />
            <Edit className="mt-10 ml-2 cursor-pointer size-5" onClick={functionopenpopup4} />
         <Dialog open={open4} onClose={closepopup} fullWidth maxWidth="sm">
           <DialogTitle>
             Add Project{" "}
            <X className="cursor-pointer" onClick={closepopup} style={{float:'right'}} />

           </DialogTitle>
           <DialogContent>
             <Stack spacing={2} margin={2}>
               <TextField
                 variant="outlined"
                 label="Project"
                 value={newProject}
                 onChange={(e) => setNewProject(e.target.value)}
               ></TextField>
               <Button
                 color="primary"
                 variant="contained"
                 onClick={handleAddProject}
               >
                 Submit
               </Button>
             </Stack>
           </DialogContent>
         </Dialog>
          <FormElements.Input
            label="Project Allocation Date *"
            type="date"
            name="projectDate"
            value={formData.projectDate}
            onChange={changeHandle}
            error={errors.projectDate}
          />
        </div>
        <div className="grid grid-cols-2 ">
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
           <Edit className="mt-11 ml-2 cursor-pointer size-5" onClick={functionopenpopup5} />
         
         <Dialog open={open5} onClose={closepopup} fullWidth maxWidth="sm">
           <DialogTitle >
             Add Attendance Shift
            <X className="cursor-pointer" onClick={closepopup} style={{float:'right'}} />

           </DialogTitle>
           <DialogContent>
             <Stack spacing={2} margin={2}>
               <TextField
                 variant="outlined"
                 label="Attendance Shift"
                 value={newShift}
                 onChange={(e) => setNewShift(e.target.value)}
               ></TextField>
               <Button
                 color="primary"
                 variant="contained"
                 onClick={handleAddShift}
               >
                 Submit
               </Button>
             </Stack>
           </DialogContent>
         </Dialog>
        </div>
      </form>
    </div>
  );
}
