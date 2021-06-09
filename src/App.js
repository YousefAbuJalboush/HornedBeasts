import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import hornedBeasts from './component/data.json';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main
          hornedBeasts={hornedBeasts}
        />
        <Footer />
      </div>

    );
  }
}
export default App;
