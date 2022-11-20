import React, { useEffect, useState } from 'react'
import CSScreenHeader from '../../Components/CSScreenHeader'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { getData } from '../../Config/firebasemethods';
import { useSelector } from 'react-redux';
import { CircularProgress, Typography } from '@mui/material';
import Navbar from '../../Components/Navbar';
import { useLocation } from 'react-router-dom';

export default function Profile() {
    let location = useLocation();
    let dt = location.state
    console.log(dt);
   
  return (

    <div >
<Navbar/>
      <CSScreenHeader text={'Profile Page'}/>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
{/* 
{filteredarr  && filteredarr.length > 0 ? filteredarr.map((e,i)=>(
   
)):<div className='d-flex justify-content-center align-item-center'><CircularProgress color='secondary' /></div>} */}
 
 <MDBRow className="g-0">
   <MDBCol md="4" className="gradient-custom text-center text-white"
     style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
     <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
       alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
     <MDBTypography tag="h5" style={{color:'black'}}>{dt.username}</MDBTypography>
     <MDBCardText style={{color:'black'}}>User</MDBCardText>
     <MDBIcon far icon="edit mb-5" />
   </MDBCol>
   <MDBCol md="8">
     <MDBCardBody className="p-4">
       <MDBTypography tag="h6">Information</MDBTypography>
       <hr className="mt-0 mb-4" />
       <MDBRow className="pt-1">
         <MDBCol size="6" className="mb-3">
           <MDBTypography tag="h6">Email</MDBTypography>
           <MDBCardText className="text-muted">{dt.email}</MDBCardText>
         </MDBCol>
         <MDBCol size="6" className="mb-3">
           <MDBTypography tag="h6">Phone</MDBTypography>
           <MDBCardText className="text-muted">123 456 789</MDBCardText>
         </MDBCol>
       </MDBRow>

       <MDBTypography tag="h6">Information</MDBTypography>
       <hr className="mt-0 mb-4" />
       <MDBRow className="pt-1">
         <MDBCol size="6" className="mb-3">
           <MDBTypography tag="h6">Email</MDBTypography>
           <MDBCardText className="text-muted">{dt.email}</MDBCardText>
         </MDBCol>
         <MDBCol size="6" className="mb-3">
           <MDBTypography tag="h6">Phone</MDBTypography>
           <MDBCardText className="text-muted">123 456 789</MDBCardText>
         </MDBCol>
       </MDBRow>

       <div className="d-flex justify-content-start">
         <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
         <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
         <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
       </div>
     </MDBCardBody>
   </MDBCol>
 </MDBRow>

            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}
