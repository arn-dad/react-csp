import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="create-event">
          <div className="form-group row">
            <input type="text" className="form-control" id="name" placeholder="Event Name" />
          </div>
          <div className="form-group row">
            <input type="text" className="form-control" id="description" placeholder="Description" />
          </div>
          <div className="form-group row">
            <input type="text" className="form-control" id="content" placeholder="Content" />
          </div>
          <button type="button" className="btn btn-primary">Create</button>
        </div>
        <div className="events-tabel">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
