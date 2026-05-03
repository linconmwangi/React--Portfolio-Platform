import { useState } from 'react';
import Header from './Components/1_Header.jsx';
import AddProjectForm from './Components/2_AddProjectForm.jsx';
import SearchBar from './Components/3_SearchBar.jsx';
import ProjectList from './Components/4_ProjectList.jsx';
import './App.css';

function App() {
  // State: List of projects
  const [projects, setProjects] = useState([
    { id: 1, title: 'Rebuilding of the School Website', description: 'Complete visual overhaul of the current site to a more dynamic site.' },
    { id: 2, title: 'Shpping mall renovations budget proposal', description: 'Contains all funding and labour requirements.' },
    { id: 3, title: 'Architectural Design', description: 'Modern interface design for a fitness tracking app.' }
  ]);
  
  // State: Search filter
  const [searchTerm, setSearchTerm] = useState('');

  // Add new project
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  // Filter projects based on search
  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <div className="container">
        <Header title="Creative Portfolio Showcase" />
        <main className="main">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <AddProjectForm onAdd={addProject} />
          <ProjectList projects={filteredProjects} />
        </main>
      </div>
    </div>
  );
}

export default App;