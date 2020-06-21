import React, {useState} from 'react';
import './App.css';
import Flexi from './components/Flexi';

function App() {
  const flexiConfig = {
    items: [
        {
            "name": "person_name",
            "label": "Person's Name",
            "type": "TextField"
        },
        {
            "name": "states",
            "label": "Person's state",
            "type": "DropDown",
            "values": ["Maharashtra", "Kerala", "Tamil Nadu"]
        }
    ]
  };

  const [formData, setFormData] = useState(flexiConfig);

  const onFlexiSubmit = data => {
    setFormData(data)
  }

  return (
    <div className="App">
       <Flexi onSubmit={onFlexiSubmit} config={flexiConfig} fData={formData} />
    </div>
  );
}

export default App;
