import React from "react";
import Dialog from "@mui/material/Dialog";
import { Grid, TextField, Button, Card, CardContent, Box } from "@mui/material";
import * as FormElements from "../../components/ui/FormElements";
import { useFormValidation } from "../../hooks/useFormValidation";
import { validateDialog } from "./validators";
import { useNavigate
 } from "react-router-dom";
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

    },
    validateDialog
  );
  const closeDialog = () => {
    setDialogOpen(false);
    cleanup()
  };
  
  const navigateTo = () =>[
    navigate("/employee-status",{
        state: {data : {...formData}}
    })
]
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
                  
                  <Grid item container rowSpacing={1} className='flex items-center justify-between'>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={()=>{handleSubmit; navigateTo}}
                
                      >
                        Update
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={closeDialog}
                      >
                        Cancel
                      </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </Dialog>
  );
}
