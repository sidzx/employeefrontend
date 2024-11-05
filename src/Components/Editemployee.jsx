import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { editemployee } from '../services/allapi'
import { Modal } from 'react-bootstrap'
import { Input } from '@mui/material'
import { toast } from 'react-toastify'


function Editemployee({data}) {

    const [eemp,setEemp]=useState(
        {
        id:data.id,
        name:data.name,
        salary:data.salary,
        email:data.email
    
   })

     const update=async(id)=>{
        const result=await editemployee(id,eemp)
        console.log(result)
       
        if (result.status>=200 && result.status<300){
            toast.success("editing success")
        }
        else{
            toast.error("editing fail")
        }
       
     }

     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     
  return (
   <>
   <Button variant="primary" onClick={handleShow}> Edit</Button>
   <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>id:</label>
                        <Input onChange={(e)=>setEemp({...eemp,id:e.target.value})} defaultValue={eemp.id} className="ms-5" type="text"></Input>
                        <br />
                        <label>name:</label>
                        <Input onChange={(e)=>setEemp({...eemp,name:e.target.value})} defaultValue={eemp.name} className="ms-5" type="text"></Input>
                        <br />
                        <label>salary:</label>
                        <Input onChange={(e)=>setEemp({...eemp,salary:e.target.value})} defaultValue={eemp.salary} className="ms-5" type="text"></Input>
                        <label>email:</label>
                        <Input onChange={(e)=>setEemp({...eemp,email:e.target.value})} defaultValue={eemp.email} className="ms-5" type="text"></Input>


                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>update(data._id)} >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
   </>
  )
}

export default Editemployee