import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import * as FormElements from "../../components/ui/FormElements";
// import { Select } from "../../components/ui/FormElements";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Edit } from "lucide-react";
import { IconButton } from "@mui/material";
import DialogBox from "./DialogBox";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 100,
    editable: true,
  },
  {
    field: "doj",
    headerName: "Date of Joining",
    type: "text",
    width: 150,
    editable: true,
  },
  {
    field: "salary",
    headerName: "Salary",

    width: 100,
    editable: true,
  },
  {
    field: "project",
    headerName: "Project",
    type: "text",
    width: 100,
    editable: true,
  },
  {
    field: "projectDate",
    headerName: "Project Allocation Date",
    type: "text",
    width: 170,
    editable: true,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    sortable: false,
    renderCell: (params) => <BasicMenu rowData={params.row}/>,
  },
];
const rows = [
  {
    id: 1,
    name: "Employee 1",
    doj: "2022-01-01",
    salary: 35000,
    project: "Project A",
    projectDate: "2022-01-01",
  },
  {
    id: 2,
    name: "Employee 2",
    doj: "2022-01-01",
    salary: 38000,
    project: "Project B",
    projectDate: "2022-01-01",
  },
  {
    id: 3,
    name: "Employee 3",
    doj: "2022-01-01",
    salary: 33000,
    project: "Project C",
    projectDate: "2022-01-01",
  },
  {
    id: 4,
    name: "Employee 4",
    doj: "2022-01-01",
    salary: 37000,
    project: "Project D",
    projectDate: "2022-01-01",
  },
  {
    id: 5,
    name: "Employee 5",
    doj: "2022-01-01",
    salary: 32000,
    project: "Project E",
    projectDate: "2022-01-01",
  },
  {
    id: 6,
    name: "Employee 6",
    doj: "2022-01-01",
    salary: 36000,
    project: "Project A",
    projectDate: "2022-01-01",
  },
  {
    id: 7,
    name: "Employee 7",
    doj: "2022-01-01",
    salary: 34000,
    project: "Project B",
    projectDate: "2022-01-01",
  },
  {
    id: 8,
    name: "Employee 8",
    doj: "2022-01-01",
    salary: 39000,
    project: "Project C",
    projectDate: "2022-01-01",
  },
  {
    id: 9,
    name: "Employee 9",
    doj: "2022-01-01",
    salary: 32000,
    project: "Project D",
    projectDate: "2022-01-01",
  },
  {
    id: 10,
    name: "Employee 10",
    doj: "2022-01-01",
    salary: 37000,
    project: "Project E",
    projectDate: "2022-01-01",
  },
];

export default function EmployeeTable() {
  const [projectType, setProjectType] = useState();
  const changeHandle = (e) => {
    setProjectType(e.target.value);
  };
  return (
    <div>
      EmployeeTable
      <div className="grid grid-cols-3 md:grid-cols-1 gap-5">
        <FormElements.Select
          label="Project Type"
          optionsArray={[
            { value: "", title: "Select an Option" },
            { value: "all", title: "All" },
            { value: "billable", title: "Billable" },
            { value: "nonBillable", title: "Non Billable" },
          ]}
          name="projectType"
          value={projectType}
          onChange={changeHandle}
        />
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 50,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}

export function BasicMenu({ rowData }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dialogOpen,setDialogOpen]= useState();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setDialogOpen(true)
  };

  return (
    <div>
      <DialogBox open={dialogOpen} rowData={rowData} setDialogOpen={setDialogOpen}/>  

      <Button
        variant="text"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Edit />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} >
            Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </div>
  );
}

