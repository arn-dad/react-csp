import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const data = {
  id: null,
  name: '',
  description: '',
  content: ''
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events   : [],
      template : { ...data }
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const { template } = this.state;

    this.setState({
      template: {
        ...template,
        [name]: value
      }
    })
  }

  hendleSubmit = () => {
    const { template, events } = this.state;
    if (template.name && template.description) {
      const newEvent = {
        ...template,
        id: new Date().valueOf()
      };
      this.setState({
        template: { ...data },
        events: [ ...events, newEvent ]
      })
    }
  }


  render() {
    const { events, template } = this.state;
    return (
      <div className="App">
        <div className="create-event">
          <div className="form-group row">
            <input type="text" value={template.name} onChange={this.handleInputChange} className="form-control" id="name" name='name' placeholder="Event Name" />
          </div>
          <div className="form-group row">
            <input type="text" value={template.description} onChange={this.handleInputChange} className="form-control" id="description" name='description' placeholder="Description" />
          </div>
          <div className="form-group row">
            <input type="text" value={template.content} onChange={this.handleInputChange} className="form-control" id="content" name='content' placeholder="Content" />
          </div>
          <button type="button" onClick={this.hendleSubmit} className="btn btn-primary">Create</button>
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
          })
          }
        </div>
      </div>
    );
  }
}

export default App;
