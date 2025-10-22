import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import { Snackbar } from "@mui/material";
import emailjs from '@emailjs/browser';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.glass_border};
  padding: 32px;
  border-radius: 20px;
  box-shadow: 
    0 8px 32px ${({ theme }) => theme.glass_shadow},
    inset 0 1px 0 ${({ theme }) => theme.glass_highlight};
  margin-top: 28px;
  gap: 12px;
  position: relative;
  
  /* Glass reflection effect */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      ${({ theme }) => theme.glass_highlight}, 
      transparent
    );
  }
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Mail = styled.a`
  color: ${({ theme }) => theme.logo};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(135deg, 
    rgba(133, 76, 230, 0.8) 0%, 
    rgba(147, 51, 234, 0.9) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.glass_border};
  padding: 16px 20px;
  margin-top: 8px;
  border-radius: 15px;
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 
    0 4px 16px rgba(133, 76, 230, 0.3),
    inset 0 1px 0 ${({ theme }) => theme.glass_highlight};
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent
    );
    transition: left 0.5s ease-in-out;
  }
  
  &:hover {
    transform: translateY(-2px) scale(1.02);
    background: linear-gradient(135deg, 
      rgba(133, 76, 230, 0.9) 0%, 
      rgba(147, 51, 234, 1) 100%
    );
    box-shadow: 
      0 8px 24px rgba(133, 76, 230, 0.4),
      inset 0 1px 0 ${({ theme }) => theme.glass_highlight};
      
    &:before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Contact = () => {
  //hooks
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // EmailJS configuration - Update these with your actual EmailJS credentials
    const serviceId = 'service_tvnjtjd'; // Replace with your EmailJS service ID
    const templateId = 'template_d28xlhv'; // Replace with your EmailJS template ID  
    const publicKey = 'iMT-2HdRykzTA88qr'; // Replace with your EmailJS public key
    
    // Get form data for validation
    const formData = new FormData(form.current);
    const email = formData.get('from_email');
    const name = formData.get('from_name');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Basic validation
    if (!email || !name || !subject || !message) {
      alert('Please fill in all fields');
      setLoading(false);
      return;
    }
    
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setOpen(true);
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log('Email sending failed:', error.text);
          alert('Failed to send email. Please try again or contact directly at pandiaaman16@gmail.com');
          setLoading(false);
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any queries or opportunities!
          Directly mail me by clicking here:&nbsp;{" "}
          <Mail
            href="mailto:pandiaaman16@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <strong> pandiaaman16@gmail.com</strong>
          </Mail>
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            placeholder="Your Email"
            name="from_email"
            type="email"
            required
          />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage
            placeholder="Message"
            rows="4"
            name="message"
            required
          />
          <ContactButton 
            type="submit" 
            value={loading ? "Sending..." : "Send"} 
            disabled={loading}
          />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
