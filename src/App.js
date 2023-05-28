import Header from "./components/Header";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";
import Fields from "./components/Fields";
import './App.css';

function App() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [data, SetData] = useState([]);

  const addData = () => {
    SetData([...data, { name, email }]);
    SetName("");
    SetEmail("");
  }

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    SetData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      <h1> Enter Your Details ❤</h1>
      {/*Form Start */}
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(e) => SetName(e.target.value)}
            id="outlined-basic"
            label="Full Name"
            variant="outlined" />
          <TextField
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined" />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div> {/*Form Start */}
      <div className="data"> {/*Data Start */}
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element, index) => {
            return (
              <div className="data_val">
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <h4 className='remove'>
                  <Button onClick={() => removeItem(index)} variant="contained" color="error">
                      <ClearIcon />
                  </Button></h4>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
