import React from 'react';
import styled from 'styled-components';

const GitHubActivity = () => {
  const stats = [
    { label: 'Repositories', value: '50+' },
    { label: 'Contributions', value: '1000+' },
    { label: 'Stars', value: '100+' },
    { label: 'Forks', value: '50+' }
  ];

  const recentProjects = [
    {
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React and Spring Boot',
      tech: ['React', 'Spring Boot', 'MySQL', 'Docker']
    },
    {
      name: 'Task Management App',
      description: 'Real-time task management application with WebSocket',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB']
    },
    {
      name: 'Portfolio Website',
      description: 'Modern portfolio website with React and styled-components',
      tech: ['React', 'Styled Components', 'Framer Motion']
    }
  ];

  return (
    <ActivityContainer>
      <h2>Development Activity</h2>
      
      <StatsContainer>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <StatValue>{stat.value}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsContainer>

      <ProjectsContainer>
        <h3>Recent Projects</h3>
        {recentProjects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectName>{project.name}</ProjectName>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.tech.map((tech, techIndex) => (
                <TechTag key={techIndex}>{tech}</TechTag>
              ))}
            </TechStack>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </ActivityContainer>
  );
};

const ActivityContainer = styled.div`
  margin: 40px 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  h2, h3 {
    text-align: center;
    color: #ffffff;
    margin-bottom: 20px;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatValue = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9em;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectName = styled.h4`
  color: #ffffff;
  margin: 0 0 10px 0;
  font-size: 1.2em;
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9em;
  margin-bottom: 15px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  color: #ffffff;
`;

export default GitHubActivity; 