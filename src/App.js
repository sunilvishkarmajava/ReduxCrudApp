import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col,Table,Button,Form,FormGroup,Label,Input } from "reactstrap";
import { addUser, editUser, deleteUser } from "./actions/actions";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((store) => store.users);
  const [User, setUser] = useState({
    name: "",
    age: "",
  });
  
// update the change in input field with state.
  const handleChange = (e) => {
    let tempuser = User;
    tempuser[e.target.name] = e.target.value;
    setUser({ ...tempuser });
  };

  // Add and update exiting user details.
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

  // Detete user
  const DeleteUser = (ID) => {
    dispatch(deleteUser(ID));
    ClearUser();
  };

  // Clear the form user
  const ClearUser = () => {
    setUser({
      name: "",
      age: "",
    });
  };

  // Edit user.
  const EditUser = (data) => {
    setUser({ ...data });
  };

  const TableRow = (user, index) => {
        return (
          <tr key={index}>
            <th scope='row'>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>
              <Button color='info' onClick={() => EditUser(user)}>
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
  }

  return (
    <div className='App'>
      <section className='App-header'>
        <h1>Redux Crud App</h1>
        <Form className={"form-style"}>
        <h3>Add/Update user details</h3>
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
          <Button color='primary' onClick={UpdateUserDetails}>Submit</Button>{" "}
          <Button color='warning' onClick={ClearUser}>
            Clear
          </Button>
        </Form>
      </section>
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
            {userList && userList.map((user, index) => {
              return TableRow(user, index)
            })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default App;
