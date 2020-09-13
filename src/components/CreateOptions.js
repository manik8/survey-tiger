// import React from "react";

// export const CreateOptions = () => {
//   return (
//     <div className="input">
//       <input type="text" size="80" className="option-survey" />
//       <div className="options" onClick={}>+</div>
//       <div className="options">-</div>
//     </div>
//   );
// };

import React from "react";
import ReactDOM from "react-dom";

import { CreateQuestion } from "./CreateQuestion";
import { Button } from "./Button";

class CreateOptions extends React.Component {
  state = { values: [{ value: null }], form: [{ formValues: null }] };

  createUI() {
    return this.state.values.map((el, i) => (
      <div key={i}>
        <input
          type="text"
          value={el.value || ""}
          onChange={this.handleChange.bind(this, i)}
        />
        <input
          type="button"
          value="remove"
          onClick={this.removeClick.bind(this, i)}
        />
      </div>
    ));
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    // if (localStorage.getItem("user")) {
    //   this.setState({
    //     values: [{ value:null }],
    //   });
    // } else {
    if (!localStorage.getItem("user")) {
      this.setState({
        values: [{ value: null }],
      });
      //}
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }
  handleChange(i, event) {
    let values = [...this.state.values];
    values[i].value = event.target.value;
    this.setState({ values });
  }

  addClick() {
    this.setState((prevState) => ({
      values: [...prevState.values, { value: null }],
    }));
  }

  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.setState({
    //   form: [{ formValues: this.state.values }],
    // });
    console.log(this.state.values);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {this.state.values.map((el, i) => (
            <div key={i} className="input">
              <input
                type="text"
                size="80"
                className="option-survey"
                value={el.value || ""}
                onChange={(e) => this.handleChange(i, e)}
              />
              <div className="options" onClick={() => this.addClick()}>
                +
              </div>
              <div className="options" onClick={() => this.removeClick(i)}>
                -
              </div>
            </div>
          ))}
          <input type="submit" value="submit" name="submit" />
        </form>
        {this.state.values.length === 4 && (
          <>
            <Button text="Add Question" />
            <Button text="Publish" />
          </>
        )}
      </>
    );
  }
}

export default CreateOptions;
