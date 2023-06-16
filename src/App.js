import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Input from './components/input';
import Option from './components/option';
import Checkbox from './components/checkBox';
import Radio from './components/Radio';
import TextArea from './components/textArea';
import { useState } from 'react';
// object form field
let fieldData = {
  name:"",
  email:"",
  mobile:"",
  password:"",
  DOB:"",
  city:"",
  file:"",
  address:"",
  skills:[],
  gender:"",
}

//Start Function

function App() {

const [data,setData]=useState(fieldData)

//submit data
const handleSubmit=(event)=>{
  //console.log("Hii")
  event.preventDefault();
  console.log(data);
  event.target.reset();
  setData(fieldData)
}

//handle Data
const handleData=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
//console.log(event.target.value);
  setData(item=>{
    return{
      ...item,[name]:value
    }
  })
}

function updateSkills(event)
  {
    if(event.target.checked){
      setData({...data, skills:[...data.skills,event.target.value]})
    }else{
      setData({...data, skills:[...data.skills.filter(data=> data!== event.target.value)]});
    }
  }

function handelReset(event)
{
  setData(fieldData) 
}
  return (
    // Start Form
  <form  className="my-5" onSubmit={handleSubmit} onReset={handelReset}>
   
   <div className='col-sm-6 mx-auto mt-2 p-5 bg-light rounded'>

   <h1 className='text-center mb-3 border-bottom border-info border-3 text-info'>Registration Page</h1>

      <Input labelName={"Enter Your Name"} fieldType={"text"} placeholderName={"Please Enter Your Name"} className={"form-control my-1"} manageData={handleData} name="name"/>

      <Input labelName={"Enter Your Email"} fieldType={"email"} placeholderName={"Please Enter Your Email"} className={"form-control my-1"} manageData={handleData} name="email"/>

      <Input labelName={"Enter Your DOB"} fieldType={"date"} className={"form-control my-1"} manageData={handleData} name="DOB"/>

      <Input labelName={"Enter Your File"} fieldType={"file"} className={"form-control my-1"} manageData={handleData} name="file"/>

      <Input labelName={"Please Enter the contact no."} fieldType={"number"} className={"form-control my-1"} manageData={handleData} placeholderName={"Please Enter the Mobile Number"} name="mobile"/>

      <Input labelName={"Enter the Password"} fieldType={"password"} className={"form-control my-1"} manageData={handleData} placeholderName={"Please Enter the Password"} name="password"/>

      <Option labelName={"city"} className={"form-control my-1"} manageData={handleData} fieldName={["--Please Select --","Kanpur","Lucknow","Jhansi","Mahoba","Hamirpur","Delhi"]} name="city"/>

      <Checkbox labelName={"Education "} fieldType={"checkbox"} className={"form-check-input my-1"} fieldName={[" 10+2 "," Diploma "," B.Tech "," M.Tech "," BCA "," MCA "]} updateSkills={updateSkills} name="skills"/>

      <Radio labelName={"Gender"} className={"form-check-input my-2"} fieldName={[" Male "," Female "," Transgender "]} manageData={handleData} name={"gender"}/>

      <TextArea labelName={"Address"} className={"form-control my-1"} manageData={handleData} placeholderName={"Please Enter the Full Address"} name="address"/>

      <div className='w-100 mt-3'>
      <Input fieldType={"submit"} className={"btn btn-success"} svalue={"submit"}/>
      <Input fieldType={"reset"} className={"btn btn-danger float-end"} svalue={"reset"}/>
      </div>
   </div>
   </form>
   //End Form
  );
}

//end function

export default App;
