import React, {useState} from "react";


class TestButton extends React.Component {
    state = { isClicked: false };
  
    onClick = () => {
      this.setState({ isClicked: !this.state.isClicked });
    };
  
    render() {
      const { isClicked } = this.state;
      const { icon, content } = this.props;
      return (
        <div
          className={`buttonList ${isClicked ? 'blue' : 'red'}`}
          onClick={this.onClick}
          // style={{ backgroudColor: isClicked ? 'blue' : 'red' }}
          // style={{ backgroudColor: 'red' }}
        >
          <a>
            <span className="icons">{icon}</span>
            {content}
          </a>
        </div>
      );
    }
  }

export default TestButton;