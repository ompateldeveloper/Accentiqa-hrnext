export const validateDialog = (values) => {
  const errors = {};
  //Validation For name
  if (!values.name.trim()) {
    errors.name = "Name is required";
  } else if (values.name.length < 3) {
    errors.name = "Name must be at least 3 characters long";
  }
  //Validation For project
  if (!values.project.trim()) {
    errors.project = "Project name is required";
  } else if (values.project.length < 3) {
    errors.project = "Name must be at least 3 characters long";
  }
   //Validation For projectDate
   if (!values.projectDate.trim()) {
    errors.projectDate = "Date is required";
  }
  //Validation For allocatedPro
  if (!values.allocatedPro.trim()) {
    errors.allocatedPro = "Project name is required";
  } else if (values.allocatedPro.length < 3) {
    errors.allocatedPro = "Name must be at least 3 characters long";
  }
  //Validation For billType
  if (!values.billType.trim()) {
    errors.billType = "Bill Type is required";
  }
  return errors;
};
