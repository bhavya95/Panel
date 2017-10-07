import React, { Component } from 'react';


import './App.css';

  var addpost =[   {opportunityName:'',
    durationDate:'',
    durationDate1:'',
    lastDate:'',
    description:'',
    link:''}]

class App extends Component {

 constructor(props){
  super(props);

  this.state ={
    addpost
  }
      this.handleAddPost = this.handleAddPost.bind(this);

  }

  handleAddPost(fpost) {
    this.setState({addpost: [...this.state.addpost, fpost]});
  }

  
  render() {
    return (

      <div className = "Container">
       <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Dashboard</a>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Settings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Help</a>
          </li>
        </ul>
        <form className="form-inline mt-2 mt-md-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <div className="container-fluid">
      <div className="row">
        <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">Overview <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Reports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Analytics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Export</a>
            </li>
          </ul>

         
        </nav>

        <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
          <h1>Category</h1>

          <section className="row text-center placeholders">
            <div className="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <div className="text-muted">Something else</div>
            </div>
            <div className="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
          </section>

          <h2>Section title</h2>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Last Date</th>
                  <th>Description</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                {this.state.addpost.map((fpost ,index) =>
                  <td key ={index} >
                  {fpost.opportunityName}
                  {fpost.lastDate}
                 {fpost.description}
                  {fpost.link}</td>
                )}
                </tr>
                
                
              </tbody>
            </table>
          </div>
          <AddInPost
          onAddInPost = {this.handleAddPost}
          />
        </main>

      </div>
    </div>

      </div>
    );
  }
}

class AddInPost extends Component{
constructor(props){
  super(props);
  this.state = {
    opportunityName:'',
    durationDate:'',
    durationDate1:'',
    lastDate:'',
    description:'',
    url:''}

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

    handleSubmit(event) {
    event.preventDefault();
    this.props.onAddinPost(this.state);
    this.setState({
     opportunityName:'',
    durationDate:'',
    durationDate1:'',
    lastDate:'',
    description:'',
    link:''
    });
}
  render(){
    return(
        <div>
        <h4>Add Opportunity</h4>
        <form onSubmit = {this.handleSubmit}>
        <div className = "form-group">
          <label for = "inputopportunityName" className = "col-form-label">Name</label>
          <input name = "opportunityName"type = "text" className = "form-control" id = "inputopportunityName" value={this.state.opportunityName} onChange ={this.handleInputChange} placeholder = "Add Name"/>
        </div>
         <div className = "form-group">
      <label for="inputdurationDate" className=" col-form-label">Duration</label>
      
      <div className="form-group row">
      <div className="col-sm-3">
        <input name="durationDate" type="date" className="form-control" id="inputdurationDate" value = {this.state.durationDate} onChange ={this.handleInputChange} />
      </div>
            <label  className="col-sm-1 col-form-label">  <center>to</center></label>
      <div className="col-sm-3">
        <input name ="durationDate1" type="date" className="form-control" id="inputdurationDate1" value ={this.state.durationDate1} onChange={this.handleInputChange} />
   </div>
    </div>
    </div>
      <div className = "form-group">
      <label for ="inputlastDate" className = "col-form-label">Last Date To Apply</label>
      <div className = "form-group row">
      <div className = "col-sm-3">
      <input name="lastDate" type = "date" className = "form-control" id = "inputlastDate" value={this.state.lastDate} onChange={this.handleInputChange}/>
      </div>
      </div>
      </div>


      <div className = "form-group">
      <label for = "inputdescription" className = "col-form-label">Description</label>
      <textarea name="description" className = "form-control" id = "inputdescription" rows = "3" value={this.state.description} onChange={this.handleInputChange} />
      </div>

      <div className = "form-group">
      <label for = "inputurl" className = "col-form-label">URL</label>
      <input name ="link" type = "url" className = "form-control" id ="inputurl" value ={this.state.link} onChange = {this.handleInputChange} />
      </div>

      <div className = "form-group">
      <label for = "image" className = "col-form-label">Upload Image</label>
      <div className ="form-group row">
      <div className = "col-sm-2">
      <label className ="btn btn-primary" for = "image"><input type = "file" style={{display:"none"}} className = "form-control-file" accept = "image/*" id = "image" />
      Browse</label>
      </div>
      </div>
      </div>

      <div className = "form-group">
      <div className = "form-group row">
      <div className = "col-sm-2">
      <button type ="submit" className = "btn btn-danger">Add Opportunity</button>
      </div>
      <div className = "col-sm-2">
      <button type ="submit" className = "btn btn-danger">Cancel</button>
      </div>
      </div>
      </div>

    

        </form>

        </div>

      );
  }
}

export default App;