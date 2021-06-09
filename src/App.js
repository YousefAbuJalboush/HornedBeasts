import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import hornedBeasts from './component/data.json';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      data : hornedBeasts
    }
  }

  FilteredHorns = (filterHorns) =>{
    this.setState ({
      data: filterHorns

    })
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          FilteredHorns={this.FilteredHorns}
          data={this.state.data}
        />
        <Footer />
      </div>

    );
  }
}
export default App;
