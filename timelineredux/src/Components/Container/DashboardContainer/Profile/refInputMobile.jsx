import React from 'react'


export default class RefInputMobile extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput = () => { 
    var value = this.textInput.current.value;
    if(value.length <= 12) { 
      if(value.length === 3 ) {   
        value = value.concat( '-' );  
        this.textInput.current.value = value;
      }
      if(value.length === 8 ) {   
        value = value.concat( '-' );
        this.textInput.current.value = value;  
      } 
    } else {
      this.textInput.current.value = value.substr(0, 12);
      console.log("ref value " + this.textInput.current.value);
      this.props.onRefMobile(this.textInput.current.value);
    }   
  } 

  render() {
    return (
      <CustomMobileInput ref={this.textInput} keyUpEvent={this.focusTextInput} />
    );
  }
}

const CustomMobileInput = React.forwardRef((props, ref) =>  ( 
  <> <input type="text" ref={ref} onKeyUp={() => props.keyUpEvent()} /> </>
  )
); 