import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Col,
  Table,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { addUser, editUser, deleteUser } from "./actions/actions";

function App() {
  const dispatch = useDispatch();
  const [User, setUser] = useState({
    name: "",
    age: "",
  });
  
  const userList = useSelector((store) => store.users);

  const handleChange = (e) => {
    let tempuser = User;
    tempuser[e.target.name] = e.target.value;
    setUser({ ...tempuser });
  };

  const UpdateUserDetails = () => {
    if (!User.id) {
      const newUser = { ...User };
      newUser.id = Math.floor(Math.random() * 901);
      dispatch(addUser(newUser));
    } else {
      const editedUser = { ...User };
      dispatch(editUser(editedUser));
    }
  };

  const DeleteUser = (ID) => {
    dispatch(deleteUser(ID));
  };

  const ClearUser = () => {
    setUser({
      name: "",
      age: "",
    });
  };

  const EditUser = (data) => {
    setUser({ ...data });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Redux Crud App.</h3>
        <Form>
          <FormGroup>
            <Col sm={{ size: 12 }}>
              <Label for='exampleEmail'>Name</Label>
              <Input
                type='text'
                name='name'
                id='username'
                value={User.name}
                onChange={handleChange}
                placeholder='Enter name of user'
              />
              <Label for='exampleEmail'>Age</Label>
              <Input
                type='number'
                name='age'
                id='userage'
                value={User.age}
                onChange={handleChange}
                placeholder='Enter age of user'
              />
            </Col>
          </FormGroup>
          <Button onClick={UpdateUserDetails}>Submit</Button>{" "}
          <Button color='warning' onClick={ClearUser}>
            Clear
          </Button>
        </Form>
      </header>
      <section sm={6}>
        <Table bordered size={"md"}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList &&
              userList.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>
                      <Button color='primary' onClick={() => EditUser(user)}>
                        Edit
                      </Button>{" "}
                      <Button
                        color='danger'
                        onClick={() => DeleteUser(user.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default App;
