import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem
} from "reactstrap";

export default class ToDoAppSingleComp extends Component {
  // 💎 STATE 💎
  state = {
    grbbedValue: "",
    toDoList: [
      {
        todoText: "Eat a Healthy Breakfast",
        isComplete: false
      },
      {
        todoText: "Destroy Life On Earth 👽",
        isComplete: false
      },
      {
        todoText: "Brush Teeth",
        isComplete: false
      }
    ]
  };

  // 🤖 HANDLERS 🤖
  handleOnChange = e => {
    this.setState({
      grbbedValue: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    if (this.state.grbbedValue) {
      this.setState({
        toDoList: [
          ...this.state.toDoList,
          { todoText: this.state.grbbedValue, isComplete: false }
        ],
        grbbedValue: ""
      });
    } else {
      alert("maha2ah");
    }
  };

  handleDelete = i => {
    // **** FILTER METHOD
    this.setState({
      toDoList: this.state.toDoList.filter((el, index) => index !== i)
    });

    // **** SPLICE METHOD
    // let tempTab = this.state.toDoList;
    // tempTab.splice(i, 1);
    // this.setState({
    //   toDoList: tempTab
    // });
  };

  handleDone = i => {
    this.setState({
      toDoList: this.state.toDoList.map((el, index) =>
        index === i ? { ...el, isComplete: !el.isComplete } : el
      )
    });
  };

  // 🔮 RENDERING 🔮
  render() {
    return (
      <div>
        {/* ToDo Header */}
        <Card className={"bg-primary"}>
          <CardBody>
            <h1 className={"text-white "}>To-Do App!</h1>
            <Form
              for={"text"}
              className={"text-white"}
              onSubmit={this.handleOnSubmit}
            >
              <FormGroup>
                <Label>Add New To-Do</Label>
                <Input
                  type={"text"}
                  id={"text"}
                  value={this.state.grbbedValue}
                  placeholder="Enter a task"
                  onChange={this.handleOnChange}
                />
                <Button color={"success"} className={"mt-2 text-center"}>
                  Add
                </Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>

        <ListGroup>
          {this.state.toDoList.map((el, i) => (
            <ListGroupItem className={"ListGroupItem"} key={i}>
              <Button
                color={"success"}
                className={"m-1"}
                onClick={() => this.handleDone(i)}
              >
                {el.isComplete ? "Undo" : "Done"}
              </Button>
              <Button
                color={"danger"}
                className={"m-1"}
                onClick={() => this.handleDelete(i)}
              >
                Delete
              </Button>
              <p
                style={{
                  display: "inline",
                  textDecoration: el.isComplete ? "line-through" : "none"
                }}
                className={"m-2"}
              >
                {el.todoText}
              </p>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
