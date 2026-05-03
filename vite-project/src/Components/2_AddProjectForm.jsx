// Import useState to track what the user types
import { useState } from 'react';

// AddProjectForm Component: Allows users to add new projects
function AddProjectForm({ onAdd }) {
  // State to hold the text in the Title input
  const [title, setTitle] = useState('');
  // State to hold the text in the Description textarea
  const [desc, setDesc] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing
    
    // Only add if both fields have text
    if (title && desc) {
      // Call the 'onAdd' function passed from parent, sending the new data
      onAdd({ title, description: desc });
      
      // Clear the input fields after adding
      setTitle('');
      setDesc('');
    }
  };

  return (
    <section className="form">
      <h2>Add Project</h2>
      
       {/* Form element that calls handleSubmit when submitted  */}
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        {/* Input for Title */}
        <input 
          value={title} 
          onChange={e => setTitle(e.target.value)} // Update state on type
          placeholder="Enter project title"
        />
        
        <label>Description</label>
         {/* Textarea for Description */}
        <textarea 
          value={desc} 
          onChange={e => setDesc(e.target.value)} // Update state on type
          rows="3"
          placeholder="Enter description"
        />
        
        {/* Submit Button */}
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default AddProjectForm;