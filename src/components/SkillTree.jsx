import React, { useState } from 'react';
import styled from 'styled-components';

const SkillTree = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skills = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Redux', level: 85 }
    ],
    backend: [
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'SQL', level: 85 },
      { name: 'MongoDB', level: 70 }
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Jenkins', level: 65 },
      { name: 'Linux', level: 80 }
    ]
  };

  return (
    <SkillContainer>
      <h2>Technical Skills</h2>
      
      <CategoryTabs>
        <CategoryTab 
          active={activeCategory === 'frontend'} 
          onClick={() => setActiveCategory('frontend')}
        >
          Frontend
        </CategoryTab>
        <CategoryTab 
          active={activeCategory === 'backend'} 
          onClick={() => setActiveCategory('backend')}
        >
          Backend
        </CategoryTab>
        <CategoryTab 
          active={activeCategory === 'tools'} 
          onClick={() => setActiveCategory('tools')}
        >
          Tools & DevOps
        </CategoryTab>
      </CategoryTabs>

      <SkillsList>
        {skills[activeCategory].map((skill, index) => (
          <SkillItem key={index}>
            <SkillName>{skill.name}</SkillName>
            <SkillBar>
              <SkillLevel level={skill.level} />
            </SkillBar>
            <SkillPercentage>{skill.level}%</SkillPercentage>
          </SkillItem>
        ))}
      </SkillsList>
    </SkillContainer>
  );
};

const SkillContainer = styled.div`
  margin: 40px 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  h2 {
    text-align: center;
    color: #ffffff;
    margin-bottom: 30px;
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
`;

const CategoryTab = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SkillItem = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 60px;
  align-items: center;
  gap: 15px;
`;

const SkillName = styled.span`
  color: #ffffff;
  font-weight: 500;
`;

const SkillBar = styled.div`
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const SkillLevel = styled.div`
  height: 100%;
  width: ${props => props.level}%;
  background: linear-gradient(90deg, #23a6d5, #23d5ab);
  border-radius: 4px;
  transition: width 1s ease-in-out;
`;

const SkillPercentage = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9em;
`;

export default SkillTree; 