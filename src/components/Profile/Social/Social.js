import React from 'react'
import { ReactComponent as IcLinkedin } from "../../../images/icons/linkedin.svg"
import { ReactComponent as IcGithub } from "../../../images/icons/github_logo.svg"
import "./Social.scss"

const socialMedia = [
    {
        icon: <IcLinkedin />,
        link: "https://www.linkedin.com/in/wilmer-alejandro-mellizo",
    },
    {
        icon: <IcGithub />,
        link: "https://github.com/wilmermellizo",
    },
]
export default function Social() {
  return (
    <div className="social">       
        {socialMedia.map((social, index) => (
        <a 
            key={index} 
            href={social.link} 
            target="_blank" 
            rel="noreferrer noopener"
            >
                {social.icon}
        </a>
        ))}   
    </div>
  )
}
