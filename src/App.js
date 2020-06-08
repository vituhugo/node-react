import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div>
        <h1>Hello World</h1>
        <div className="row">
            <div className="col s4">
                <Card nome="Erica" imagem="https://www.rbsdirect.com.br/imagesrc/25273339.jpg?w=700" />
            </div>
            <div className="col s4">
                <Card nome="Alex" imagem="https://avatars3.githubusercontent.com/u/45742312?s=460&u=0f995bf69e1f1f1ee9e4c52d18a676cb05fc406b&v=4" />
            </div>
            <div className="col s4">
                <Card nome="Gabriel" imagem="https://pbs.twimg.com/profile_images/1116892264398303232/07KQmoiT.jpg" />
            </div>
        </div>
    </div>
  );
}

export default App;
