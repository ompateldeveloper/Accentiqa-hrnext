import React, { useState, useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import * as FormElements from "../../components/ui/FormElements";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Edit } from "lucide-react";
import { IconButton } from "@mui/material";
import DialogBox from "./DialogBox";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 100 },
  { field: "doj", headerName: "Date of Joining", type: "text", width: 150 },
  { field: "salary", headerName: "Salary", width: 100 },
  { field: "project", headerName: "Allocated Project", type: "text", width: 100 },
  { field: "projectDate", headerName: "Project Allocation Date", type: "text", width: 170 },
  { field: "isbillable", headerName: "Project Type", type: "text", width: 100 },
];

const rows = [
  {
    id: 1,
    name: "Employee 1",
    doj: "2022-01-01",
    salary: 35000,
    project: "Project A",
    projectDate: "2022-01-01",
    isbillable:"Billable"
  },
  {
    id: 2,
    name: "Employee 2",
    doj: "2022-01-01",
    salary: 38000,
    project: "Project B",
    projectDate: "2022-01-01",
    isbillable:"Billable"

  },
  {
    id: 3,
    name: "Employee 3",
    doj: "2022-01-01",
    salary: 33000,
    project: "Project C",
    projectDate: "2022-01-01",
    isbillable:"nonBillable"
  },
  {
    id: 4,
    name: "Employee 4",
    doj: "2022-01-01",
    salary: 37000,
    project: "Project D",
    projectDate: "2022-01-01",
    isbillable:"Billable"
  },
  {
    id: 5,
    name: "Employee 5",
    doj: "2022-01-01",
    salary: 32000,
    project: "Project E",
    projectDate: "2022-01-01",
    isbillable:"nonBillable"
  },
  {
    id: 6,
    name: "Employee 6",
    doj: "2022-01-01",
    salary: 36000,
    project: "Project A",
    projectDate: "2022-01-01",
    isbillable:"nonBillable"  
  },
  {
    id: 7,
    name: "Employee 7",
    doj: "2022-01-01",
    salary: 34000,
    project: "Project B",
    projectDate: "2022-01-01",
    isbillable:"nonBillable"
  },
  {
    id: 8,
    name: "Employee 8",
    doj: "2022-01-01",
    salary: 39000,
    project: "Project C",
    projectDate: "2022-01-01",
    isbillable:"nonBillable"

  },
  {
    id: 9,
    name: "Employee 9",
    doj: "2022-01-01",
    salary: 32000,
    project: "Project D",
    projectDate: "2022-01-01",
    isbillable:"Billable"
  },
  {
    id: 10,
    name: "Employee 10",
    doj: "2022-01-01",
    salary: 37000,
    project: "Project E",
    projectDate: "2022-01-01",
    isbillable:"Billable"

  },
];


export default function EmployeeTable() {
  const [projectType, setProjectType] = useState("all");
  const [filteredRows, setFilteredRows] = useState(rows);

  const changeHandle = (e) => {
    setProjectType(e.target.value);
    filterRows(e.target.value);
  };

  const filterRows = (type) => {
    if (type === "billable") {
      setFilteredRows(rows.filter((row) => row.isbillable === "Billable"));
    } else if (type === "nonBillable") {
      setFilteredRows(rows.filter((row) => row.isbillable === "nonBillable"));
    } else {
      setFilteredRows(rows);
    }
  };

  const handleDelete = (id) => {
    setFilteredRows(filteredRows.filter((row) => row.id !== id));
  };
  

  return (
    <div>
      EmployeeTable
      <div className="grid grid-cols-3 md:grid-cols-1 gap-5">
        <FormElements.Select
          label="Project Type"
          optionsArray={[
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
        rows={filteredRows}
        columns={[
          ...columns,
          {
            field: "actions",
            headerName: "Actions",
            width: 100,
            sortable: false,
            renderCell: (params) => (
              <BasicMenu rowData={params.row} onDelete={() => handleDelete(params.row.id)} />
            ),
          },
        ]}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}

export function BasicMenu({ rowData, onDelete }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <DialogBox open={dialogOpen} rowData={rowData} setDialogOpen={setDialogOpen} />
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
        <MenuItem onClick={() => { handleClose(); setDialogOpen(true) }}>Edit</MenuItem>
        <MenuItem onClick={() => { onDelete(); handleClose() }}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
