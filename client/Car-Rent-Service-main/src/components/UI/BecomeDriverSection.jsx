
import React from 'react';
import "../../styles/become-driver-section.css"
import { Container , Row , Col } from 'reactstrap';

import driverImg from "../../assets/all-images/toyota-offer-2.png" ;

const BecomeDriverSection = () => {
    return <section className="become__driver">
        <Container>
            <Row>
                <Col lg='6' md='6' sm='12' className='become__driver-img'> 
                  <img src={driverImg} alt="" className='w-100' />
                </Col>

                <Col lg='6' md='6' sm='12'> 
                    <h2 className="section__title become__driver-title">
                            ENJOY YOUR CAR RIDE!!
                    </h2>

                    
                </Col>
                
               
            </Row>
        </Container>
    </section>
};

export default BecomeDriverSection;