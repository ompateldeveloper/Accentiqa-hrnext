import React from "react";
import Dialog from "@mui/material/Dialog";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import * as FormElements from "../../components/ui/FormElements";
import { useFormValidation } from "../../hooks/useFormValidation";
import { validateDialog } from "./validators";
export default function DialogBox({ open, rowData, setDialogOpen }) {
  const { formData, errors, changeHandle, handleSubmit } = useFormValidation(
    {
      name: "",
      project: "",
      projectDate: "",
      allocatedPro: "",
      billType: "",
    },
    (values) => {
      setDialogOpen(false);
    },
    validateDialog
  );
  return (
    <Dialog
      open={open}
      // onClose={handleClose}
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
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormElements.Input
                      label="Name"
                      type="text"
                      className="w-full"
                      name="name"
                      value={formData.name}
                      onChange={changeHandle}
                      error={errors.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormElements.Input
                      label="Project"
                      type="text"
                      className="w-full"
                      name="project"
                      value={formData.project}
                      onChange={changeHandle}
                      error={errors.project}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormElements.Input
                      label="Project Allocation Date"
                      type="date"
                      className="w-full"
                      name="projectDate"
                      value={formData.projectDate}
                      onChange={changeHandle}
                      error={errors.projectDate}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormElements.Input
                      label="Allocated Project"
                      type="text"
                      className="w-full"
                      name="allocatedPro"
                      value={formData.allocatedPro}
                      onChange={changeHandle}
                      error={errors.allocatedPro}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormElements.Select
                      label="Bill Type"
                      optionsArray={[
                        { value: "", title: "Select an Option" },
                        { value: "nonBillable", title: "Non-Billable" },
                        { value: "billable", title: "Billable" },
                      ]}
                      name="billType"
                      value={formData.billType}
                      onChange={changeHandle}
                      error={errors.billType}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Update
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
