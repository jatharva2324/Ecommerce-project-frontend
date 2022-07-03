import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from "react-bootstrap/Button";

function Order(){
    return(
        <Container className="mt-5 mb-5">
            <Stack gap={3}>
                <div className="bg-light border p-1 my-3">
                <Row className="p-3">
                <Col xl={12} lg={12} md={12} sm={12} className="ms-3 pt-2 fs-6 text-secondary">ordered 6 days ago</Col>
                    <Col xl={4} lg={4} md={6} sm={12} className="text-center"><img style={{height: "200px", width:"200px"}} src="../images/img0.png" alt=""/></Col>
                    <Col xl={5} lg={5} md={6} sm={12} className="text-center order-col-text"><h6>Sony MDR-ZX110A Wired On Ear Headphone without Mic (White)</h6><p className="text-center fw-bold">350/-</p></Col>
                    <Col xl={3} lg={2} md={12} sm={12} xs={6} className="text-center order-col-button"><Button className="fs-6" variant="dark">Buy again</Button></Col>
                </Row>
                </div>
                <div className="bg-light border p-1 my-3"> 
                <Row className="p-3">
                    <Col xl={12} lg={12} md={12} sm={12} className="ms-3 pt-2 fs-6 text-secondary">ordered 1 month ago</Col>
                    <Col xl={4} lg={4} md={6} sm={12} className="text-center"><img style={{height: "200px", width:"200px"}} src="../images/img0.png" alt=""/></Col>
                    <Col xl={5} lg={5} md={6} sm={12} className="text-center order-col-text"><h6>Sony MDR-ZX110A Wired On Ear Headphone without Mic (White)</h6><p className="text-center fw-bold">350/-</p></Col>
                    <Col xl={3} lg={2} md={12} sm={12} xs={6} className="text-center order-col-button"><Button className="fs-6" variant="dark">Buy again</Button></Col>
                </Row>
                </div>
                <div className="bg-light border p-1 my-3"> 
                <Row className="p-3">
                <Col xl={12} lg={12} md={12} sm={12} className="ms-3 pt-2 fs-6 text-secondary">ordered 16 days ago</Col>
                    <Col xl={4} lg={4} md={6} sm={12} className="text-center"><img style={{height: "200px", width:"200px"}} src="../images/img0.png" alt=""/></Col>
                    <Col xl={5} lg={5} md={6} sm={12} className="text-center order-col-text"><h6>Sony MDR-ZX110A Wired On Ear Headphone without Mic (White)</h6><p className="text-center fw-bold">350/-</p></Col>
                    <Col xl={3} lg={2} md={12} sm={12} xs={6} className="text-center order-col-button"><Button className="fs-6" variant="dark">Buy again</Button></Col>
                </Row>
                </div>
            </Stack>
        </Container>
    )
}

export default Order;
