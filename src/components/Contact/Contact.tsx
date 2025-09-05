import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contacto</h2>
        <p>¿Listo para empezar un proyecto? </p>
        <p>Contactame ahora para una consulta gratuita</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:joymar300@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:joymar300@gmail.com">joymar300@gmail.com</a>
        </div>
        <div>
        <a href="tel:+573043923200"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+573043923200">(+57) 3043923200</a>
        </div>  
      </div>
      {/* <Form></Form> */}
    </Container>
  )
}