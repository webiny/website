import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";

const ClipBoardItem = styled("div")(
  {
    "&.code-sample" : {
      position: "relative",
      marginBottom: 11,
      overflow: "hidden",
      textOverflow: "wrap",
      cursor: "pointer",
      width: "100%",
      color: theme.color.white,
      backgroundColor: theme.color.black,
      borderRadius: 8,

      "&:hover" : {
        "& .clip-button": {
          opacity: 1
        }
      },

      "& pre": {
        padding: 20,
        margin: 0,
      },

      "& .clip-button": {
        position: "absolute",
        opacity: 0,
        right: 5,
        top: 5,
        padding: "2px 4px",
        fontSize: "1rem",
        color: theme.color.black,
        background: theme.color.white,
        transition: "all 0.2s ease",
        borderRadius: 4,
      }
    }
  },
  mq({
    "& pre": {
      fontSize: [14, 16]
    }
  })
)

class ClipBoard extends React.Component {
    
    handleDidCopy() {
      console.log('Copied content');
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
                <ClipBoardItem className={classNames} onClick={ () => this.handleCopy() } onMouseOut={ () => this.handleMouseOut() }>
                    <Pre setRef={(r) => this.sample = r } text={this.props.text}/>                    
                    {pop === "clip-pop" ? <FakeButton text="Copied"/> : <FakeButton text="Copy"/>}
                </ClipBoardItem>
            )
        } catch (e) {
            debugger
        }
    }
}

export default ClipBoard
