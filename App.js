import React,{useState} from 'react';
import {Navbar,NavbarBrand,NavbarText,Button, Modal, ModalHeader, ModalBody, ModalFooter,
   Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';
   import Colap from './components/collapse';
   import Toas from './components/toast';
   import Car from './components/card';
   import Over from './components/overlay';
   import Over1 from './components/overlay1';
   
  

export default function Web (){
  const[modal,setModal] = useState(false);
  const toggle1 =()=> setModal (!modal);

  return(
    <div>
      <div style={{backgroundColor:'lightsteelblue'}}>
        
        <Navbar>
          <NavbarBrand>seo.do</NavbarBrand>
          <NavbarText>
          <Button onClick={toggle1}>Login</Button>
         <Modal isOpen={modal}>
           <ModalHeader toggle={toggle1}>Login</ModalHeader>
           <ModalBody>
             <Form>
             <FormGroup>
                 <Label>Name:</Label>
                 <Input type="text" name="name"></Input>
               </FormGroup>
               <FormGroup>
                 <Label>Email:</Label>
                 <Input type="text" name="email"></Input>
               </FormGroup>
               <FormGroup>
                 <Label>Password:</Label>
                 <Input type="password" name="password"></Input>
               </FormGroup>
             </Form>
           </ModalBody>
           <ModalFooter>
             <Button color="primary" onClick="">Submit</Button>
           </ModalFooter>

         </Modal>

          </NavbarText>
        </Navbar>
        <h2 style={{textAlign:'center', fontSize:'20mm'}}>Data Science <br/> Meets SEO</h2><br/>
        <p style={{textAlign:'center'}}>Find all the SEO secrets of your competitors and track them <br/>daily without hours of boring keyword research & grouping</p>
      <br/><Row>
        <Col sm={4}></Col>
        <Col sm={4}><div class='inputWithButton'>
  <Input type="text" placeholder="Enter your Domain"/>
  <Button>Start Instant Demo</Button><br/> {' '}<p style={{fontSize:'4mm'}}>• No Credit Cards {' '} • Ready to Use in Few Minutes</p>
</div></Col>
        <Col sm={4}></Col>
      </Row>
     </div>
     <div>
       <h3 style={{textAlign:'center'}}>Features</h3><br/>
       <p style={{textAlign:'center'}}>You found us! Why spend your valuable hours to <br/>understand yet another rank tracker?</p>
   <Colap/><br/><br/>
   <Toas></Toas>
     </div>
     <br/><br/><Car/><br/>
     <Over/><br/><Over1/>
 
    </div>
  );

}
