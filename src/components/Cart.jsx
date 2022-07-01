import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from "react-bootstrap/Button";

function Cart(){
    return (
        // <Container >
        //     <Row>
        //         <Col><img src="../images/img0.png" alt=" " /></Col>
        //         <Col><p className="text-center mt-5 ps-0">lnklkandvamslvkdalvdns</p></Col>
        //     </Row>
        //     <Row>
        //         <Col><img src="../images/img0.png" alt=" " /></Col>
        //         <Col><p>lnklkandvamslvkdalvdns</p></Col>
        //     </Row>
        //     <Row>
        //         <Col><img src="../images/img0.png" alt=" " /></Col>
        //         <Col><p>lnklkandvamslvkdalvdns</p></Col>
        //     </Row>
        // </Container>
        <Container className="mt-5 mb-5">
            <Stack gap={3}>
                <div className="bg-light border p-1">
                <Row>
                    <Col xl={3} lg={3} md={6} sm={12} className="text-center"><img style={{height: "200px", width:"200px"}} src="../images/img0.png" alt=""/></Col>
                    <Col xl={5} lg={5} md={6} sm={12} className="py-5 text-center"><h6>Sony MDR-ZX110A Wired On Ear Headphone without Mic (White)</h6><p className="text-center fw-bold">350/-</p></Col>
                    <Col xl={2} lg={2} md={6} sm={6} xs={6} className="py-5 text-center"><Button className="fs-6" variant="dark">Buy this</Button></Col>
                    <Col xl={2} lg={1} md={6} sm={6} xs={6} className="py-5 text-center"><Button variant="danger">Remove</Button></Col>
                </Row>
                </div>
                <div className="bg-light border p-5">Second item</div>
                <div className="bg-light border p-5">Third item</div>
            </Stack>
            <div className="text-end">
                <Button className="my-5" variant="warning">Proceed to checkout</Button>
            </div>
        </Container>
    )
}

export default Cart;