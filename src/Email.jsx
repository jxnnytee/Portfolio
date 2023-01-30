import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Card, VStack } from '@chakra-ui/react';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_6zkzruo', form.current, 'n1LlPgghSqnVWFxPU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <Card bgColor='#fce1e6' w='70vw' margin='auto'>
    
    <form ref={form} onSubmit={sendEmail}>
      <br /><label>Name</label><br />
      <input type="text" placeholder='Your name...' name="user_name"/><br /><br />
      <label>Email</label><br />
      <input type="email" placeholder='Your email...' name="user_email" /><br /><br />
      <label>Message</label><br />
      <textarea name="message" placeholder='Your message...'/><br /><br />
      <Button><input type="submit" value="Send"/><br /></Button> 
    </form>
 
    </Card>
  );
};
