import React from 'react'
import { FormLabel } from 'react-bootstrap'
import { useState } from 'react'
import { addemployee, viewemployee } from '../services/allapi'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'



function Employee() {

  const [emp,setEmp]=useState({
    id:"",name:"",gender:"",salary:"",email:""
  })
  
  const [validateid,setValidateid]=useState(true)
  const [validatename,setValidatename]=useState(true)
  const [validategender,setValidategender]=useState(true)
  const [validatesalary,setValidatesalary]=useState(true)
  const [validateemail,setvalidateEmail]=useState(true)


  const fun=(e)=>{
    const {name,value}=e.target

      if (name=="id"){
          if (!!value.match(/^[0-9]{1,}$/)) {

            setEmp({ ...emp, [name]: value })
            setValidateid(true)
          }
          else {
           
            setValidateid(false)

          }
      }
      else if(name=="name"){
        if(!!value.match(/^[a-zA-z ]{1,}$/)){
          setEmp({...emp,[name]:value})
          setValidatename(true)
        }
        else{
          setValidatename(false)
        }
      }
      else if(name=="gender"){
        if(!!value.match(/^[a-z]{1,}$/)){
          setEmp({...emp,[name]:value})
          setValidategender(true)
        }
        else{
          setValidategender(false)
        }

      }
      else if(name=="salary"){
        if(!!value.match(/^[0-9]{4,}$/)){
          setEmp({...emp,[name]:value})
          setValidatesalary(true)
        }
        else{
          setValidatesalary(false)
        }
      }
      else{
        if(!!value.match(/^[a-z0-9._]+@[a-z0-9]+.[a-z]{2,}$/))
        setEmp({...emp,[name]:value})
      }
   
  }
  console.log(emp)

  const add=async(e)=>{
    const result = await addemployee(emp)
    console.log(result)
    if(result.status === 200){
      //  alert("Registered successfully")
       toast.success("Registered successfully")
      setEmp({id:"",name:"",gender:"",salary:"",email:""})
    }
    else{
      // alert(result.response.data)
      toast.error("failed to add")
    }
  }
  


  return (
    <div>
        <>
        <div>
            <h1 className='text-center'><i>Employee Register</i></h1>
        </div>
        <form action="">
        <div  className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <div className=''>
        <div className='mt-2'>   
        <FormLabel>ID:</FormLabel>
        <input onChange={(e)=>{fun(e)}} className='form-control' id='id' name='id' type="text" placeholder='Enter your id'/>
        {
            !validateid &&
             <span className='text-danger ms-5'>
              *invalid
             </span>
        }
        </div>
        <div className='mt-2'>
        <FormLabel>Name:</FormLabel>
        <input  onChange={(e)=>{fun(e)}}  className='form-control' id='name' name='name' type="text" placeholder='Enter your name'/>
        {
            !validatename &&
             <span className='text-danger ms-5'>
              *invalid
             </span>
        }
        </div>
        <div className='mt-2'>
        <FormLabel>Gender:</FormLabel>
        <br />
        <FormLabel>Male: </FormLabel>
        <input  onChange={(e)=>{fun(e)}}  className='form-check-input ms-2' id='male' name='gender' value='male' type="radio"/>
        <FormLabel className='ms-1'>Female: </FormLabel>
        <input  onChange={(e)=>{fun(e)}}  className='form-check-input ms-2' id='female' name='gender' value='female' type="radio"/>
        </div> 
        <div className='mt-2'>
        <FormLabel>Salary:</FormLabel>
        <input   onChange={(e)=>{fun(e)}} className='form-control' id='salary' name='salary' type="text" placeholder='Enter your salary'/>
        {
            !validatesalary &&
             <span className='text-danger ms-5'>
              *invalid
             </span>
        }
        </div>
        <div className='mt-2'>
        <FormLabel>Email:</FormLabel>
        <input  onChange={(e)=>{fun(e)}}  className='form-control' id='email' name='email' type="email" placeholder='Enter your Email address'/>
        {
            !validateemail &&
             <span className='text-danger ms-5'>
              *invalid
             </span>
        }
        </div>
        </div>
        <div>
        <button className='btn' onClick={(e)=>add(e)}  type='submit'> Register</button>
        <button className='btn'  type='submit'> <Link style={{ textDecoration: 'none',color:'black' }} to={'/list'}>view</Link></button>
        </div>
        
        </div>
        </form>
        

        
        
        
        
        </>




    </div>
  )
}

export default Employee