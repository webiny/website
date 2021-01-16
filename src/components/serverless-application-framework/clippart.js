import React from "react";
import "./clip.css"

class CodeSample extends React.Component {
    
    handleDidCopy() {
      this.setState({
        pop: "clip-pop"
      })
    }
    
    handleMouseOut() {
        if(this.state && this.state.pop) {
            this.setState({
                pop: null
            })
        }
    }
    
    handleCopy() {
        const range = document.createRange()
        const selection = window.getSelection()
        range.selectNode(this.sample)
        selection.empty()
        selection.addRange(range)
    
        if (document.execCommand('copy')){
            this.handleDidCopy()
        } else {
            console.log('Copy failed');
        }
    }
    
    render() {
        const FakeButton = ({text, onMouseOut}) => (
            <div className="clip-button" onMouseOut={onMouseOut}>
                {text}
            </div>
        )
        
        const Pre = ({setRef, text}) => (
            <pre ref={setRef}>
                {text}
            </pre>
        )
        try {
            const {pop} = this.state || {},
                classNames = `code-sample ${pop || ''}`
    
            return (
                <div className={classNames} onClick={ () => this.handleCopy() } onMouseOut={ () => this.handleMouseOut() }>
                    <Pre setRef={(r) => this.sample = r } text={this.props.text}/>
                    <FakeButton text="Copy"/>
                </div>
            )
        } catch (e) {
            debugger
        }
    }
}

export default CodeSample
