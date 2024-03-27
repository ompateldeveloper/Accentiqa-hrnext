export const statusValidate= (values) => {
    const errors = {}
    if (!values.employeeStatus.trim()) {
        errors.employeeStatus = "Employee Status is required";
      }
     
     if (!values.resignationDate.trim()) {
      errors.resignationDate = "Resignation Date is required";
    }
    //Validation For billType
    if (!values.exitDate.trim()) {
      errors.exitDate = "Exit  Date is required";
    }
    return errors;
  };
  