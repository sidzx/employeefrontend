import { useState } from 'react'
import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { viewemployee } from '../services/allapi'
import { deleteemployee } from '../services/allapi'
import Editemployee from './Editemployee'
import { toast } from 'react-toastify'



function Employeelist() {

  const [view,setView]=useState([])
 

  const viewemp=async(e)=>
    {
      const result =await viewemployee()
      console.log(result.data)
      setView(result.data)
  
    }

  const delemp=async(id)=>{
    const result =await deleteemployee(id)
    console.log(result)
    if (result.status===200){
      toast.success("employee deleted succesfully")
      viewemp()
    }
    else{
      toast.error("employee  deletion failed")
    }
  }
    useEffect(()=>{viewemp()},[])

    console.log(view)

  return (
  <>
  <h1 className='text-center'>Employee List</h1>
  <Table bordered striped hover>
    <thead>
        <td>ID</td>
        <td>NAME</td>
        <td>GENDER</td>
        <td>SALARY</td>
        <td>EMAIL</td>
        <td>DELETE</td>
        <td>UPDATE</td>
    </thead>
    <tbody>
        {
        view?.map((item)=>( 
          
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.gender}</td>
            <td>{item.salary}</td>
            <td>{item.email}</td>
            
            <td><button className='btn' onClick={()=>{delemp(item._id)}}>delete</button></td>
            <td><Editemployee data={item}/></td>
          </tr>
        ))
            
        }
    </tbody>
  </Table>
  

  </>
  )
}

export default Employeelist