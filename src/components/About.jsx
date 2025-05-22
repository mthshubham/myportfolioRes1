import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <h1>About Me</h1>
      
      <ContentWrapper>
        <ProfileSection>
          <ProfileImage src="/path-to-your-image.jpg" alt="Profile" />
          <ProfileInfo>
            <h2>Shubham Sharma</h2>
            <h3>Full Stack Developer</h3>
            <p>
              A passionate developer with expertise in building modern web applications.
              I love creating efficient, scalable, and user-friendly solutions.
            </p>
          </ProfileInfo>
        </ProfileSection>

        <Section>
          <h2>My Journey</h2>
          <Timeline>
            <TimelineItem>
              <TimelineDot />
              <TimelineContent>
                <h3>2023 - Present</h3>
                <h4>Senior Developer</h4>
                <p>Leading development of enterprise applications using React and Node.js</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineDot />
              <TimelineContent>
                <h3>2021 - 2023</h3>
                <h4>Full Stack Developer</h4>
                <p>Developed and maintained multiple web applications</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineDot />
              <TimelineContent>
                <h3>2020 - 2021</h3>
                <h4>Junior Developer</h4>
                <p>Started my journey in web development</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Section>

        <Section>
          <h2>Education</h2>
          <EducationCard>
            <h3>Bachelor of Technology</h3>
            <h4>Computer Science</h4>
            <p>University Name</p>
            <p>2016 - 2020</p>
          </EducationCard>
        </Section>

        <Section>
          <h2>What I Do</h2>
          <ServicesGrid>
            <ServiceCard>
              <Icon>💻</Icon>
              <h3>Web Development</h3>
              <p>Building responsive and modern web applications using React, Node.js, and other cutting-edge technologies.</p>
            </ServiceCard>
            
            <ServiceCard>
              <Icon>📱</Icon>
              <h3>Mobile Development</h3>
              <p>Creating cross-platform mobile applications with React Native and Flutter.</p>
            </ServiceCard>
            
            <ServiceCard>
              <Icon>🔧</Icon>
              <h3>Backend Development</h3>
              <p>Designing and implementing robust backend systems using Node.js, Express, and MongoDB.</p>
            </ServiceCard>
            
            <ServiceCard>
              <Icon>🎨</Icon>
              <h3>UI/UX Design</h3>
              <p>Crafting beautiful and intuitive user interfaces with modern design principles.</p>
            </ServiceCard>
          </ServicesGrid>
        </Section>
      </ContentWrapper>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
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
    font-size: 1.8em;
    
    @media (max-width: 768px) {
      font-size: 1.5em;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
    padding: 20px;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const ProfileInfo = styled.div`
  h2 {
    color: #ffffff;
    margin: 0 0 10px 0;
    font-size: 2em;
    
    @media (max-width: 768px) {
      font-size: 1.6em;
    }
  }

  h3 {
    color: #23a6d5;
    margin: 0 0 15px 0;
    font-size: 1.2em;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin: 0;
  }
`;

const Section = styled.section`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 30px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(255, 255, 255, 0.2);
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 30px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -34px;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #23a6d5;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

const TimelineContent = styled.div`
  h3 {
    color: #23a6d5;
    margin: 0 0 5px 0;
    font-size: 1.1em;
  }

  h4 {
    color: #ffffff;
    margin: 0 0 10px 0;
    font-size: 1.3em;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    line-height: 1.6;
  }
`;

const EducationCard = styled.div`
  h3 {
    color: #ffffff;
    margin: 0 0 5px 0;
    font-size: 1.3em;
  }

  h4 {
    color: #23a6d5;
    margin: 0 0 10px 0;
    font-size: 1.1em;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 5px 0;
    line-height: 1.6;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: #ffffff;
    margin: 15px 0 10px 0;
    font-size: 1.2em;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    line-height: 1.6;
    font-size: 0.95em;
  }
`;

const Icon = styled.span`
  font-size: 2em;
  display: block;
  margin-bottom: 10px;
`;

export default About;