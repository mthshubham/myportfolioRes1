import React from 'react'
import styled from 'styled-components'
import Formcontact from './Formcontact'
import Social from './Social'

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Get in Touch</h1>
      
      <ContentWrapper>
        <InfoSection>
          <h2>Contact Information</h2>
          <InfoCard>
            <InfoItem>
              <Icon>📍</Icon>
              <div>
                <h3>Location</h3>
                <p>Subhash Nagar, Chhatauni</p>
                <p>Motihari, Bihar 845401</p>
              </div>
            </InfoItem>
            
            <InfoItem>
              <Icon>📱</Icon>
              <div>
                <h3>Phone</h3>
                <a href="tel:7260882890">+91 7260882890</a>
              </div>
            </InfoItem>
            
            <InfoItem>
              <Icon>✉️</Icon>
              <div>
                <h3>Email</h3>
                <a href="mailto:mthshubhamsharma@gmail.com">mthshubhamsharma@gmail.com</a>
              </div>
            </InfoItem>
          </InfoCard>
          
          <SocialSection>
            <h3>Connect with me</h3>
            <Social />
          </SocialSection>
        </InfoSection>

        <FormSection>
          <Formcontact />
        </FormSection>
      </ContentWrapper>

      <MapSection>
        <h2>Find me here</h2>
        <MapContainer>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11979.115104502986!2d84.92118224025701!3d26.652448406656873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993358c6087320b%3A0x89351b48cc0a8dd3!2sSharma_Sales%20%26%20Suppliers!5e1!3m2!1sen!2sin!4v1738050653470!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapContainer>
      </MapSection>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    text-align: center;
    color: #ffffff;
    font-size: 2.5em;
    margin-bottom: 40px;
    
    @media (max-width: 768px) {
      font-size: 2em;
      margin-bottom: 30px;
    }
  }

  h2 {
    color: #ffffff;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 1.5em;
    }
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

const InfoSection = styled.div`
  h2 {
    margin-bottom: 30px;
    
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
`

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
  }
`

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  
  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    color: #ffffff;
    margin: 0 0 5px 0;
    font-size: 1.2em;
    
    @media (max-width: 768px) {
      font-size: 1.1em;
    }
  }

  p, a {
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 0.95em;

    &:hover {
      color: #ffffff;
    }
  }
`

const Icon = styled.span`
  font-size: 1.5em;
  margin-right: 15px;
  background: rgba(255, 255, 255, 0.1);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1.3em;
    margin-right: 12px;
  }
`

const SocialSection = styled.div`
  h3 {
    color: #ffffff;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 1.1em;
      margin-bottom: 15px;
    }
  }
`

const FormSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const MapSection = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 30px;
    
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
`

const MapContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 10px;
    border-radius: 15px;
  }
  
  iframe {
    @media (max-width: 768px) {
      height: 300px;
    }
  }
`

export default Contact