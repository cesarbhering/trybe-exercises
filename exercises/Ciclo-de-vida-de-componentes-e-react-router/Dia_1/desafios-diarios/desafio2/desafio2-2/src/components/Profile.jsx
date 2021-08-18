import React from 'react';

class Profile extends React.Component {
  constructor() {
    super()

    this.loadingPage = this.loadingPage.bind(this);
    this.fecthPerson = this.fecthPerson.bind(this);
    this.profileRender = this.profileRender.bind(this);


    this.state = {
      loading: true,
      personObj: undefined,
    }
  }

  async fecthPerson() {
        const requestReturn = await fetch('https://api.randomuser.me/')
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false,
          personObj: requestObject.results[0],
        })
  }

  loadingPage() {
    return(
    <div>
      <span> Loading ...</span>
    </div>
    )
  }

  profileRender() {
    const user = this.state.personObj;
    return (
    <div>
      <p>Foto: <img src={user.picture.medium} alt="My Profile"></img></p>
      <p>Nome: {user.name.first} {user.name.last} </p>
      <p>E-mail: {user.email}</p>
      <p>Idade: {user.dob.age}</p>
    </div>
    )
  }

  componentDidMount() {
    this.fecthPerson();
  }

  shouldComponentUpdate( _nextProps, nextState ) {
    return nextState.personObj.dob.age < 51
  }



  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        {loading ? this.loadingPage() : this.profileRender() }
      </div>
    );
  }
}

export default Profile;