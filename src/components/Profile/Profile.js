import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Social from "./Social"
import profileImage from "../../images/Wilmer.jpg"
import "./Profile.scss"

const data = [
    {
        title: "Dirección:",
        info: "Bogota Colombia",
    },
    {
        title: "E-mail:",
        info: "wil.mellizo@hotmail.com",
    },
    {
        title: "Telefono:",
        info: "+57 3115425605",
    },


]

export default function Profile() {
  return (
    <div className="profile">
      <div className="wallpaper" />
      <div className="dark" />
      <Container className="box">
        <Row className="info">
            <Col xs={12} md={4}>
                <Image src={profileImage} fluid />
            </Col>
            <Col xs={12} md={8} className="info__data">
                <span>¡Bienvenido!</span>
                <p>Wilmer Alejandro Mellizo Mestizo</p>
                <p>Ingeniero Electronico-Desarrollador Junior</p>
                <hr />
                <div className="more-info">
                    {data.map((item, index) =>(
                        <div key={index} className="item">
                        <p>{item.title}</p>
                        <p>{item.info}</p>
                    </div>
                    ))}
                </div>
            </Col>
        </Row>
        <Social />
      </Container>
    </div>
  )
}
