import React, { useState, useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import * as FormElements from "../../components/ui/FormElements";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Edit } from "lucide-react";
import { IconButton } from "@mui/material";
import DialogBox from "./DialogBox";
import StatusDialog from "./StatusDialog";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Name", width: 100 },
  { field: "doj", headerName: "DOJ", type: "text", width: 100 },
  { field: "salary", headerName: "Salary", width: 80 },
  { field: "project", headerName: "Allocated Project", type: "text", width: 150 },
  { field: "projectDate", headerName: "Project Allocation Date", type: "text", width: 170 },
  { field: "isbillable", headerName: "Project Type", type: "text", width: 100 },
  { field: "status", headerName: "Status", type: "text", width: 100 },
];

const rows = [
  {
    id: 1,
    name: "Employee 1",
    doj: "2022-01-01",
    salary: 35000,
    project: "Project A",
    projectDate: "2022-01-01",
    isbillable: "Billable",
    status:"On-Role"
  },
  {
    id: 2,
    name: "Employee 2",
    doj: "2022-01-01",
    salary: 38000,
    project: "Project B",
    projectDate: "2022-01-01",
    isbillable: "Billable",
    status:"Resignation"
  },
  {
    id: 3,
    name: "Employee 3",
    doj: "2022-01-01",
    salary: 33000,
    project: "Project C",
    projectDate: "2022-01-01",
    isbillable: "NonBillable",
    status:"Resignation"
  },
  {
    id: 4,
    name: "Employee 4",
    doj: "2022-01-01",
    salary: 37000,
    project: "Project D",
    projectDate: "2022-01-01",
    isbillable: "Billable",
    status:"Resignation"
  },
  {
    id: 5,
    name: "Employee 5",
    doj: "2022-01-01",
    salary: 32000,
    project: "Project E",
    projectDate: "2022-01-01",
    isbillable: "NonBillable",
    status:"On-Role"
  },
  {
    id: 6,
    name: "Employee 6",
    doj: "2022-01-01",
    salary: 36000,
    project: "Project A",
    projectDate: "2022-01-01",
    isbillable: "NonBillable",
    status:"On-Role"
  },
  {
    id: 7,
    name: "Employee 7",
    doj: "2022-01-01",
    salary: 34000,
    project: "Project B",
    projectDate: "2022-01-01",
    isbillable: "NonBillable",
    status:"On-Role"
  },
  {
    id: 8,
    name: "Employee 8",
    doj: "2022-01-01",
    salary: 39000,
    project: "Project C",
    projectDate: "2022-01-01",
    isbillable: "NonBillable",
    status:"On-Role"
  },
  {
    id: 9,
    name: "Employee 9",
    doj: "2022-01-01",
    salary: 32000,
    project: "Project D",
    projectDate: "2022-01-01",
    isbillable: "Billable",
    status:"On-Role"
  },
  {
    id: 10,
    name: "Employee 10",
    doj: "2022-01-01",
    salary: 37000,
    project: "Project E",
    projectDate: "2022-01-01",
    isbillable: "Billable",
    status:"On-Role"
  },
];

export default function EmployeeTable() {
  const [projectTypeFilter, setProjectTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(rows);

  useMemo(() => {
    let filteredRows = rows.filter(row => {
      const matchesProjectType = projectTypeFilter === "all" || row.isbillable === projectTypeFilter;
      const matchesStatus = statusFilter === "all" || row.status === statusFilter;
      const matchesSearch = row.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesProjectType && matchesStatus && matchesSearch;
    });
    setFilteredData(filteredRows);
  }, [projectTypeFilter, statusFilter, searchQuery]);

  const handleProjectTypeChange = (e) => {
    setProjectTypeFilter(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = (id) => {
    setFilteredData(filteredData.filter((row) => row.id !== id));
  };

  return (
    <div>
      <p className="block tracking-wide text-zinc-600 text-2xl font-bold mr-2 mb-4">
        Employee Table
      </p>

      <div className="flex justify-start gap-2">
        <FormElements.Select
          label="Project Type"
          className="w-56"
          optionsArray={[
            { id: "all", name: "All" },
            { id: "Billable", name: "Billable" },
            { id: "NonBillable", name: "Non Billable" },
          ]}
          name="projectType"
          value={projectTypeFilter}
          onChange={handleProjectTypeChange}
        />
         <FormElements.Input
                        label="Search Name"
                        type="text"
                        className="w-56"
                        name="searchQuery"
                        value={searchQuery}
                        onChange={handleSearchChange}
                       placeholder="Search..."
          />
           <FormElements.Select
          label="Employee Status"
          className="w-56"
          optionsArray={[
            { id: "all", name: "All" },
            { id: "On-Role", name: "On-Role" },
            { id: "Resignation", name: "Resignation" },
          ]}
          name="statusFilter"
          value={statusFilter}
          onChange={handleStatusChange}
        />
      </div>
       
      <DataGrid
        rows={filteredData}
        columns={[
          ...columns,
          {
            field: "actions",
            headerName: "Actions",
            width: 80,
            sortable: false,
            renderCell: (params) => (
              <BasicMenu
                rowData={params.row}
                onDelete={() => handleDelete(params.row.id)}
              />
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
  const [statusdialogOpen, setStatusDialogOpen] = useState(false);
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
      <DialogBox
        open={dialogOpen}
        rowData={rowData}
        setDialogOpen={setDialogOpen}
      />
      <StatusDialog
      open={statusdialogOpen}
      rowData={rowData}
      setDialogOpen={setStatusDialogOpen}
      />
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
        <MenuItem
          onClick={() => {
            handleClose();
            setDialogOpen(true);
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            onDelete();
            handleClose();
          }}
        >
          Delete
        </MenuItem>
        <hr className="my-1" />
        <MenuItem
          onClick={() => {
            setStatusDialogOpen(true);
            handleClose();

          }}
          className="text-theme-danger"
          style={{color:'rgb(185 28 28)'}}
        >
          Status
        </MenuItem>
      </Menu>
    </div>
  );
}