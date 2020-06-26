import React from "react";

class PipeDriveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomId: "id" + Math.random().toString(36).substring(7),
    };
  }

  render() {
    let url = "https://www.webiny.com/";

    return (
      <div
        className="pipedriveWebForms"
        data-pd-webforms={`https://pipedrivewebforms.com/form/${this.props.formId}`}
        id={this.state.randomId}
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          minWidth: "320px",
          position: "relative",
        }}
      >
        <iframe
          src={`https://pipedrivewebforms.com/form/${this.props.formId}?embeded=1&uuid=${this.state.randomId}`}
          name={`${url}-${this.state.randomId}`}
          scrolling="no"
          seamless="seamless"
          style={{
            border: "none",
            overflow: "hidden",
            width: "100%",
            minWidth: "100%",
            height: "580px",
            position: "relative",
          }}
        />
      </div>
    );
  }
}

export default PipeDriveForm;
