import React, { lazy, useState } from 'react';
import './MoodForm.css'; // Link to the CSS file
// import Dialog from '@mui/material/Dialog';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Dialog = lazy(() => import('@mui/material/Dialog'))

function MoodForm({ openMoodMealForm, setOpenMoodMealForm }) {
  const [formData, setFormData] = useState({
    username: '',
    mood: ''
  });

  const [open, setOpen] = React.useState(openMoodMealForm);
  const dispatch= useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/moodmeal')
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <React.Fragment>
        <Dialog
          open={openMoodMealForm}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="mood-form-container">
            <h2>Log Your Mood</h2>
            <form onSubmit={handleSubmit} className="mood-form">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your name"
                value={formData.username}
                onChange={handleChange}
                required
              />

              <label>Current Mood</label>
              <input
                type="text"
                name="mood"
                placeholder="How are you feeling?"
                value={formData.mood}
                onChange={handleChange}
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </Dialog>
      </React.Fragment>
    </>
  );
}

export default MoodForm;
