import React, { Component } from "react";

class Editable extends Component {
    state  = {
        editIsOpen: false,
        editedText: "",
    }

    constructor(props) {
        super(props);

        this.toggleState = this.toggleState.bind(this);
        this.confirmOrCancel = this.confirmOrCancel.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        const { content } = this.props;
        if (content.text) this.setState({editedText: content.text});
    }

    toggleState() { 
        const { editIsOpen } = this.state;
        this.setState({
            editIsOpen: !editIsOpen
        });
    }

    onChange(event) {
        this.setState({
            editedText: event.target.value
        });
    }

    confirmOrCancel(event) {
        const { editIsOpen } = this.state;
        if (editIsOpen && event === "confirm") {
            // do some type of processing
        }
        this.setState({
            editIsOpen: false
        });
    }

    render() {
        const { content } = this.props;
        const { editIsOpen, editedText } = this.state;
        const { type, classes } = content;
        return (
            <div className="editable">
                {editIsOpen ?  <input type={type} value={editedText} onChange={this.onChange.bind(this)}/> : <p className={classes}  onClick={this.toggleState}>{editedText}</p>}
                {editIsOpen && 
                <div className="button-group">
                    <button className="confirm" onClick={this.confirmOrCancel.bind(this, "confirm")}>
                        <i className="fas fa-check"></i>
                    </button>
                    <button className="cancel" onClick={this.confirmOrCancel}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>}
            </div>
        );
    }
}

export default Editable;