import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const data = {
  id: null,
  name: '',
  description: '',
  content: ''
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
        const newTemplate = {
          ...template,
          id: new Date().valueOf()
        }
        setState({
          ...state,
          events   : [...events, newTemplate],
          template : { ...data }
        })
      }
    }
    const { template: { name, content, description } } = state;
    return (
      <div className="App">
        <div className="create-event">
          <div className="form-group row">
            <input type="text" value={name} onChange={handelInputChange} name="name" className="form-control" id="name" placeholder="Event Name" />
          </div>
          <div className="form-group row">
            <input type="text" value={description} onChange={handelInputChange}  name="description" className="form-control" id="description" placeholder="Description" />
          </div>
          <div className="form-group row">
            <input type="text"value={content} onChange={handelInputChange} name="content" className="form-control" id="content" placeholder="Content" />
          </div>
          <button type="button" onClick={handleButtonSubmit} className="btn btn-primary">Create</button>
        </div>
        <div className="events-tabel">
         {events.map((event) => {
           return (
            <div key={event.id} className="card">
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{event.description}</h6>
                <p className="card-text">{event.content}</p>
              </div>
            </div>
           )
         })}
        </div>
      </div>
    );
  }

export default App;
