import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const data = {
  name: '',
  content: '',
  description: ''
}

const App = () => {
    const [ state, setState ] = useState({ events: [], template: { ...data } });
    const { events } = state;
    

    const handelInputChange = (event) => {
      const { name, value } = event.target;
      const { template } = state;

      const newTemplate = {
        ...template,
        [name]: value
      }

      setState({
        ...state,
        template: newTemplate
      })

    }

    const handleButtonSubmit = () => {
      const { template, events } = state;
      if(template.name && template.description) {
        setState({
          ...state,
          events   : [...events, template],
          template : {}
        })
      }
    }
    const { template: { name, content, description } } = state;
    return (
      <div className="App">
        <div className="create-event">
          <div className="form-group row">
            <input type="text" onChange={handelInputChange} value={name} name="name" className="form-control" id="name" placeholder="Event Name" />
          </div>
          <div className="form-group row">
            <input type="text" onChange={handelInputChange} value={description} name="description" className="form-control" id="description" placeholder="Description" />
          </div>
          <div className="form-group row">
            <input type="text" onChange={handelInputChange} value={content} name="content" className="form-control" id="content" placeholder="Content" />
          </div>
          <button type="button" onClick={handleButtonSubmit} className="btn btn-primary">Create</button>
        </div>
        <div className="events-tabel">
         {events.map((item) => {
           return (
            <div key={item.name} className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.description}</h6>
                <p className="card-text">{item.content}</p>
              </div>
            </div>
           )
         })}
        </div>
      </div>
    );
  }

export default App;
