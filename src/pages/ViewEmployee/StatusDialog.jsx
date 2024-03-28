import React from "react";
import Dialog from "@mui/material/Dialog";
import { Grid, TextField, Card, CardContent, Box } from "@mui/material";
import * as FormElements from "../../components/ui/FormElements";
import { useFormValidation } from "../../hooks/useFormValidation";
import { statusValidate } from "./StatusValidator";
import { useNavigate
 } from "react-router-dom";
import { X } from "lucide-react";
import Button from "../../components/ui/Button";
export default function StatusDialog({ open, rowData, setDialogOpen }) {
    const navigate = useNavigate();

    
  const { formData, errors, changeHandle, handleSubmit,cleanup } = useFormValidation(
    {
      employeeStatus: "",
      resignationDate: "",
      exitDate: "",
      
    },
    (values) => {
      setDialogOpen(false);
      cleanup()
      navigate("/dashboard/employee-status",{
        state: {data : {...formData}}
    })
    },
    statusValidate
  );
  const closeDialog = () => {
    setDialogOpen(false);
    cleanup()
  };
  
  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="flex justify-center ">
        <Grid>
          <Card
            style={{
              maxWidth: 450,
              padding: "20px 5px",
              margin: "0 auto",
            }}
          >
            <CardContent>
                
                <X className="ml-auto" onClick={closeDialog}/>
              <form>
                <Grid container spacing={0}>
                <Grid item xs={12}>
                    <FormElements.Select
                      label="Employee Status"
                      optionsArray={[
                        { value: "", title: "Select an Option" },
                        { value: "On-Role", title: "On-Role" },
                        { value: "Resigned", title: "Resigned" },
                      ]}
                      name="employeeStatus"
                      value={formData.employeeStatus}
                      onChange={changeHandle}
                      error={errors.employeeStatus}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormElements.Input
                      label="Resignation Date"
                      type="date"
                      className="w-full"
                      name="resignationDate"
                      value={formData.resignationDate}
                      onChange={changeHandle}
                      error={errors.resignationDate}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormElements.Input
                      label="Exit Date"
                      type="date"
                      className="w-full"
                      name="exitDate"
                      value={formData.exitDate}
                      onChange={changeHandle}
                      error={errors.exitDate}
                    />
                  </Grid>
                  
                      <Button
                       className="m-2 ml-auto "
                        onClick={()=>{ handleSubmit()}}
                
                      >
                        Update
                      </Button>
                     
                 
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </Dialog>
  );
}
