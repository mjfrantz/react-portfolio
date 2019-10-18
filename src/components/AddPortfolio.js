import React, { useState } from 'react';
import { useHistory } from 'react-router';

//title, description, summary, githubLink, websiteLink, image 


const AddPortfolio = () => {
    let history = useHistory();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        summary: '',
        githubLink: '',
        websiteLink: '',
        image: ''
    });

    const handleSubmit = async e => {
        
        e.preventDefault();

        const data = JSON.stringify(formData);

        await fetch('http://localhost:5000/api/v1/portfolios', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: data
        });

        history.push('/portfolio')
    };

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value });
    }

    const handleFile = async e => {
        const data = new FormData ();
        data.append('image', e.target.files[0]);

        const res = await fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: data
        });

        const json = await res.json();
        const image = json.url;
        setFormData({...formData, image})
  };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Add Portfolio</h1>
                <input type="text" name='title' value={formData.title} placeholder="Title" onChange={handleChange}/>
                <input type="text" name='description' value={formData.description} placeholder="Description" onChange={handleChange}/>
                <input type="text" name='summary' value={formData.summary} placeholder="Summary" onChange={handleChange}/>
                <input type="text" name='githubLink' value={formData.githubLink} placeholder="Github" onChange={handleChange}/>
                <input type="text" name='websiteLink' value={formData.websiteLink} placeholder="Website Link" onChange={handleChange}/> 
                <input type='file' name='image' onChange={handleFile}/>
                {formData.image && (<img src={formData.image} alt ='portfolio LandingPage'></img>)}
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default AddPortfolio;