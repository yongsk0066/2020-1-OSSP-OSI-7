import React from 'react';
import styled from 'styled-components';
import {Container,Col, Row} from 'react-bootstrap';

const AuthBaseBlock = styled.div`
    margin-top: 3rem;
`;

const AuthBase = ({children})=>{
    return (
        <AuthBaseBlock>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="authform_container">{children}</Col> 
                </Row>
            </Container>
        </AuthBaseBlock>
    );
}

export default AuthBase;