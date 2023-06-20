import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const ContactDetails = () => {

    const navigate = useNavigate();
    const handleContact = () => {
        console.log('Contato Enviado!')
        return navigate('/');
    }
     
    const { id } = useParams();

  return (
    <div>
        <h1>Exibindo mais informações de contato: {id} </h1>
        <button onClick={handleContact}>Enviar mensagem</button>

    </div>
    

  )
}

export default ContactDetails