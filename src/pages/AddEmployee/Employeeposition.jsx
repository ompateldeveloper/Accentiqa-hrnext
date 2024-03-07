import React, { useEffect, useState } from "react";
import * as FormElements from "../../components/ui/FormElements";
import { useFormValidation } from "../../hooks/useFormValidation";

export default function Employeeposition({ form }) {
  const { formData, errors, changeHandle, handleSubmit } = form;
  const [data, setData] = useState();
  const fetchData = async () => {
    const baseUrl = getUrl();
    const endpoint = "/api/data";
    const url = baseUrl + endpoint;
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
  };
  useEffect(()=>{
    fetchData()
  },[])
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto px-2 employee-details">
      <p className="block tracking-wide text-zinc-600 text-2xl font-bold mr-2 mb-4">
        Employee Position
      </p>
      <form className="employee-form" onSubmit={handleSubmit}>
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
            label="Designation *"
            optionsArray={[
              { value: "", title: "Select an Option" },
              { value: "audi", title: "Audi cars" },
              { value: "merc", title: "Mercideez benz cars" },
            ]}
            name="designation"
            value={formData.designation}
            onChange={changeHandle}
            error={errors.designation}
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
            label="Division *"
            optionsArray={[
              { value: "", title: "Select an Option" },
              { value: "audi", title: "Audi cars" },
              { value: "merc", title: "Mercideez benz cars" },
            ]}
            name="division"
            value={formData.division}
            onChange={changeHandle}
            error={errors.division}
          />
          <FormElements.Select
            label="Department *"
            optionsArray={[
              { value: "", title: "Select an Option" },
              { value: "audi", title: "Audi cars" },
              { value: "merc", title: "Mercideez benz cars" },
            ]}
            name="department"
            value={formData.department}
            onChange={changeHandle}
            error={errors.department}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 ">
          <FormElements.Select
            label="Project *"
            optionsArray={[
              { value: "", title: "Select an Option" },
              { value: "audi", title: "Audi cars" },
              { value: "merc", title: "Mercideez benz cars" },
            ]}
            name="project"
            value={formData.project}
            onChange={changeHandle}
            error={errors.project}
          />
          <FormElements.Select
            label="Project Allocation Date *"
            optionsArray={[
              { value: "", title: "Select an Option" },
              { value: "audi", title: "Audi cars" },
              { value: "merc", title: "Mercideez benz cars" },
            ]}
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
      </form>
    </div>
  );
}