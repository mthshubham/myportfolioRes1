import React, { useState } from 'react';
import styled from 'styled-components';

const CodeShowcase = () => {
  const [activeTab, setActiveTab] = useState('javascript');

  const codeSnippets = {
    javascript: `// Modern JavaScript Example
const fetchData = async () => {
  try {
    const response = await fetch('api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};`,
    react: `// React Component Example
const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div className="profile">
      <h2>{user.name}</h2>
      {isEditing ? (
        <EditForm user={user} />
      ) : (
        <button onClick={() => setIsEditing(true)}>
          Edit Profile
        </button>
      )}
    </div>
  );
};`,
    java: `// Java Spring Boot Example
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;
    
    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.findAll();
    }
}`
  };

  return (
    <ShowcaseContainer>
      <h2>Code Showcase</h2>
      <TabContainer>
        <TabButton 
          active={activeTab === 'javascript'} 
          onClick={() => setActiveTab('javascript')}
        >
          JavaScript
        </TabButton>
        <TabButton 
          active={activeTab === 'react'} 
          onClick={() => setActiveTab('react')}
        >
          React
        </TabButton>
        <TabButton 
          active={activeTab === 'java'} 
          onClick={() => setActiveTab('java')}
        >
          Java
        </TabButton>
      </TabContainer>
      <CodeContainer>
        <pre>
          <code>{codeSnippets[activeTab]}</code>
        </pre>
      </CodeContainer>
    </ShowcaseContainer>
  );
};

const ShowcaseContainer = styled.div`
  margin: 40px 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #ffffff;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
`;

const TabButton = styled.button`
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

const CodeContainer = styled.div`
  background: #1e1e1e;
  border-radius: 10px;
  padding: 20px;
  overflow-x: auto;

  pre {
    margin: 0;
    color: #d4d4d4;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    line-height: 1.5;
  }

  code {
    display: block;
    white-space: pre;
  }
`;

export default CodeShowcase; 