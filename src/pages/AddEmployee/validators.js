export const validate1 = (values) => {
  const errors = {};
  //Validation For empSeries
  if (!values.empSeries.trim()) {
    errors.empSeries = "Please select an option";
  }
  //Validation For empSeries
  if (!values.probationPeriod.trim()) {
    errors.probationPeriod = "Number is required";
  }
  //Validation For empNo
  if (!values.empNo.trim()) {
    errors.empNo = "Number is required";
  }
  //Validation For confirmDate
  if (!values.confirmDate.trim()) {
    errors.confirmDate = "Date is required";
  }
  //Validation For name
  if (!values.name.trim()) {
    errors.name = "Name is required";
  } else if (values.name.length < 3) {
    errors.name = "Name must be at least 3 characters long";
  }
  //Validation For email
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Invalid email address";
  }
  //Validation For DOB
  if (!values.dob.trim()) {
    errors.dob = "Date Of Birth is required";
  }

  // Validation For mobileNo
  if (!values.mobileNo.trim()) {
    errors.mobileNo = "Mobile number is required";
  } else if (!/^\d{1,10}$/.test(values.mobileNo)) {
    errors.mobileNo = "Please provide 10 digits";
  }

  // validation For aadharNo
  if (!values.aadharNo.trim()) {
    errors.aadharNo = "Aadhar number is required";
  } else if (!/^\d{12}$/.test(values.aadharNo)) {
    errors.aadharNo = "Invalid Aadhar number";
  }

  //Validation For emergencyName
  if (!values.emergencyName.trim()) {
    errors.emergencyName = "Name is required";
  } else if (values.emergencyName.length < 3) {
    errors.emergencyName = "Name must be at least 3 characters long";
  }

  // validation For gender
  if (!values.gender) {
    errors.gender = "Please select a gender";
  }
  // Validation For emergencyNo
  if (!values.emergencyNo.trim()) {
    errors.emergencyNo = "Mobile number is required";
  } else if (!/^\d{1,10}$/.test(values.emergencyNo)) {
    errors.emergencyNo = "Please provide 10 digits";
  }
  //Validation For reportingMg
  if (!values.reportingMg.trim()) {
    errors.reportingMg = "Please select an option";
  }
  // //Validation For fathersName
  // if (!values.fathersName.trim()) {
  //   errors.fathersName = "Name is required";
  // } else if (values.fathersName.length < 3) {
  //   errors.fathersName = "Name must be at least 3 characters long";
  // }
  //Validation For status
  if (!values.status.trim()) {
    errors.status = "Please select an option";
  }

  // //Validation For spouseName
  // if (!values.spouseName.trim()) {
  //   errors.spouseName = "Name is required";
  // } else if (values.spouseName.length < 3) {
  //   errors.spouseName = "Name must be at least 3 characters long";
  // }

  //Validation For DOJ
  if (!values.doj.trim()) {
    errors.doj = "Date Of Joining is required";
  }
  return errors;
};

export const validate2 = (values) => {
  const errors = {};
  if (!values.grade.trim()) {
    errors.grade = "Please select an option";
  }
  if (!values.costCenter.trim()) {
    errors.costCenter = "Please select an option";
  }
  if (!values.designation.trim()) {
    errors.designation = "Please select an option";
  }
  if (!values.location.trim()) {
    errors.location = "Please select an option";
  }
  if (!values.division.trim()) {
    errors.division = "Please select an option";
  }
  if (!values.department.trim()) {
    errors.department = "Please select an option";
  }
  if (!values.shift.trim()) {
    errors.shift = "Please select an option";
  }
  return errors;
};
export const validate3 = (values) => {
  const errors = {};
  // PAN card number validation
  if (!values.panNo.trim()) {
    errors.panNo = "PAN card number is required";
  } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(values.panNo)) {
    errors.panNo = "Invalid PAN card number";
  }
  // validation For aadharNo
  if (!values.aadharNo.trim()) {
    errors.aadharNo = "Aadhar number is required";
  } else if (!/^\d{12}$/.test(values.aadharNo)) {
    errors.aadharNo = "Invalid Aadhar number";
  }
  // Passport number validation
  if (!values.passportNo.trim()) {
    errors.passportNo = "Passport number is required";
  } else if (!/^[a-zA-Z0-9]{6,15}$/.test(values.passportNo)) {
    errors.passportNo = "Invalid passport number";
  }
  return errors;
};

export const validate4 = (values) => {
  const errors = {};
  if (!values.paymentType.trim()) {
    errors.paymentType = "Please select an option";
  }
  return errors;
};
