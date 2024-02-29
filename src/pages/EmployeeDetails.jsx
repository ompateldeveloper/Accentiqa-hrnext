import React, { useState } from "react";
const EmployeeDetails = () => {
    const [formData,setFormData]=useState({
        empSeries:"",
        probationPeriod:"",
        empNo:"",
        confirmDate:"",
        name:"",
        email:"",
        dob:"",
        mobileNo:"",
        aadharNo:"",
        emergencyName:"",
        gender:"",
        emergencyNo:"",
        reportingMg:"",
        fathersName:"",
        status:"",
        spouseName:"",
        doj:"",
        allow:null

    })
    const [errors, setErrors] = useState({});
    const changeHandle=(e)=>{
        const {name,value,checked}=e.target
        
        if(e.target.type==="checkbox"){
            setFormData({
                ...formData,
                allow: e.target.checked
            })
            console.log(checked);
            // setAllowed(checked)
        } else {
            setFormData({
                ...formData,
                [name]:value
            })
        }
        //Validation
        //Validation For name
        const newErrors = { ...errors };
        if (name === 'name') {
          if (!value.trim()) {
            newErrors.username = 'Username is required';
          } else if (value.length < 3) {
            newErrors.username = 'Username must be at least 3 characters long';
          } else {
            delete newErrors.username;
          }
        }
       
    }
    const submitForm=(e)=>{
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div className="container mx-auto px-20 employee-details">
      <form className="employee-form" onSubmit={submitForm}>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="empSerie"
              >
                Employee Number Series
              </label>
            </div>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="empSeries"
                name="empSeries"
                onChange={changeHandle}
              >
                <option value="">---Select---</option>
                <option value="New Mexico">New Mexico</option>
                <option value="Missouri">Missouri</option>
                <option value="Texas">Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="probationPeriod"
              >
                Probation Period
              </label>
            </div>
            <div className="grid grid-cols-2 items-center">
              <input
                className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="probationPeriod"
                name="probationPeriod"
                type="number"
                placeholder=" "
                value={formData.probationPeriod}
                onChange={changeHandle}
              />
              <span>Days</span>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="empNo"
              >
                Employee No
              </label>
            </div>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="empNo"
              name="empNo"
              type="text"
              placeholder=""
              value={formData.empNo}
              onChange={changeHandle}
            />
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="confirmDate"
              >
                Confirmation Date
              </label>
            </div>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="confirmDate"
              name="confirmDate"
              type="date"
              placeholder=" "
              value={formData.confirmDate}
              onChange={changeHandle}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="name"
              >
                Name
              </label>
            </div>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              name="name"
              type="text"
              placeholder=" "
              value={formData.name}
              onChange={changeHandle}
            />
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="email"
              >
                Email
              </label>
            </div>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              name="email"
              type="email"
              placeholder=" "
              value={formData.email}
              onChange={changeHandle}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="dob"
              >
                Date Of Birth
              </label>
            </div>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="dob"
              name="dob"
              type="date"
              placeholder=" "
              value={formData.dob}
              onChange={changeHandle}
            />
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="mobileNo"
              >
                Mobile Number
              </label>
            </div>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="mobileNo"
              name="mobileNo"
              type="text"
              placeholder=" "
              value={formData.mobileNo}
              onChange={changeHandle}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="aadharNo"
              >
                Aadhar Number
              </label>
            </div>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="aadharNo"
              name="aadharNo"
              type="text"
              placeholder=" "
              value={formData.aadharNo}
              onChange={changeHandle}
            />
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="emergencyName"
              >
                Emergency Contact Name
              </label>
            </div>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="emergencyName"
              name="emergencyName"
              type="text"
              placeholder=""
              value={formData.emergencyName}
              onChange={changeHandle}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="gender"
              >
                Gender
              </label>
            </div>
            <div className="flex ">
              <label className="flex items-center mr-5">
                <input type="radio" name="gender" value={'male'} onChange={changeHandle} />&nbsp; Male
              </label>

              <label className="flex items-center mr-4">
                <input type="radio" name="gender" value={'female'} onChange={changeHandle} />&nbsp; Female
              </label>

              <label className="flex items-center">
                <input type="radio" name="gender" value={'others'} onChange={changeHandle} />&nbsp; Others
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="emergencyNo"
              >
                Emergency Contact Number
              </label>
            </div>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="emergencyNo"
              name="emergencyNo"
              type="text"
              placeholder=" "
              value={formData.emergencyNo}
              onChange={changeHandle}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="reportingMg"
              >
                Reporting Manager
              </label>
            </div>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="reportingMg" name="reportingMg" onChange={changeHandle}
              >
                <option value="">---Select---</option>
                <option value="New Mexico">New Mexico</option>
                <option value="Missouri">Missouri</option>
                <option value="Texas">Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="fathersName"
              >
                Father's Name
              </label>
            </div>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="fathersName"
              name="fathersName"
              type="text"
              placeholder=" "
              value={formData.fathersName}
              onChange={changeHandle}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="status"
              >
                Status
              </label>
            </div>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="status" name="status" onChange={changeHandle}
              >
                <option value="">---Select---</option>
                <option value="New Mexico">New Mexico</option>
                <option value="Missouri">Missouri</option>
                <option value="Texas">Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="spouseName"
              >
                Spouse Name
              </label>
            </div>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="spouseName"
              name="spouseName"
              type="text"
              placeholder=" "
              value={formData.spouseName}
              onChange={changeHandle}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-2"
                for="doj"
              >
                Date Of Joining
              </label>
            </div>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="doj"
              name="doj"
              type="date"
              placeholder=" "
              value={formData.doj}
              onChange={changeHandle}
            />
          </div>
          <div className="grid grid-cols-2 items-center "></div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
              <input type="checkbox" id="allow" name="allowed" checked={formData.allow} onChange={changeHandle}/>
            </div>
            <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold ml-2"
                for="allow"
              >
                Allow the employee to fill in their information
              </label>
          </div>
          <div className="grid grid-cols-2 items-center "></div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 ">
          <div className="grid grid-cols-2 items-center my-3">
            <div className="text-right">
            </div>
            <a href="#">Employee Onboarding Policy</a>
          </div>
          <div className="grid grid-cols-2 items-center ">
          <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4">Submit</button>
          </div>
        </div>

        <div className="actions mb-10">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4">Previous</button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  mr-4">Next</button>
        <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Cancel</button>
      </div>
      </form>
      
    </div>
  );
};
export default EmployeeDetails;
