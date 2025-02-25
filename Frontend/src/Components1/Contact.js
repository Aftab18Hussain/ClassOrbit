import React from 'react';
import NavBar from "./NavBar"
import {NavLink} from 'react-router-dom';

function Contact() {
    return (
        <div>
            <NavBar/>
            <div className='cotainer-fluid'>
                    <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:10 , marginLeft:'20px'}}>
                    
                    <div className="col-9 p-5 shadow bg-white" >
                    <center><span className='fw-lightbold fs-1'>Contact Us</span></center>
                    <table  style={{marginLeft:40 , marginTop:20}}>
                        <tr>
                            <td className='p-1 px-5 ' >
                            
                                <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>

                                        <div className="card-body">
                                            <h5 class="card-title">Aftab Hussain</h5>
                                            <p class="card-text">Gmail:  ahussain1802@gmail.com</p>
                                            <a href="https://www.linkedin.com/in/aftab-hussain-b66389237/" class="card-link"> <i class="bi bi-linkedin"></i></a>   
                                    </div>
                                </div>
                         </td>
                 <td>
                    <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                            <div className="card-body">
                                <h5 class="card-title">Ayush Jakkulwar</h5>
                                <p class="card-text">Gmail: ayushjakkulwar00@gmail.com</p>
                                <a href="https://www.linkedin.com/in/ayush-jakkulwar-a7bb02218/" class="card-link"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </td>

                <td className='p-1 px-5 ' >
                    <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                            <div className="card-body">
                                <h5 class="card-title"> Ajeem Makandar </h5>
                                <p class="card-text">Gmail: ajeem3690@gmail.com</p>
                                <a href="#" class="card-link"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </td>
          </tr>
     </table>
     <table  style={{marginLeft:40 , marginTop:20}}>
                    <tr>
                        <td className='p-3 px-5'>
                            <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                                    <div className="card-body">
                                        <h5 class="card-title">Aditi Mokdam</h5>
                                        
                                        <p class="card-text">Gmail: aditi.mokdam@gmail.com</p>
                                        <a href="#" class="card-link"><i class="bi bi-linkedin"></i></a>
                                    
                                </div>
                            </div>
                    </td>

                <td>
                    <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                            <div className="card-body">
                                <h5 class="card-title">Mr. Ramu Parupali</h5>
                                
                                <p class="card-text">Gmail: Ramup@cdac.in</p>
                                <a href="#" class="card-link"><i class="bi bi-linkedin"></i></a>
                            
                        </div>
                    </div>
                </td>
            </tr>
        </table>
     </div>
    </div>
 </div>
</div>
        );
}
export default Contact;