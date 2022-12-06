import React from 'react'
import { Container, Button } from "react-bootstrap"
import CV from "../../images/Curriculum_Wilmer.pdf"
import "./AboutMe.scss"

export default function AboutMe() {
  return (
    <Container className="about-me">
        <p>
            Ingeniero Electrónico, con
            conocimientos en programación Backend
            (Python y NodeJs), Frontend (React), SQL, Git,
            Microsoft Azure, Scrum e inglés.
            Experiencia en el área técnica brindando
            soporte técnico a equipos de cómputo.
            Capacidad en la planificación, gestión y
            evaluación de proyectos técnicos. Actitud
            abierta, responsable, autónomo,
            recursivo, y orientación al resultado.
        </p>
        <hr />

        <a href={CV} rel="noreferrer" target="_blank">
            <Button primary>Descargar HV</Button>
        </a>       
    </Container>
  )
}
