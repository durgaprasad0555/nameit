import React from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const name=require('@rstacruz/startup-name-generator');

class App extends React.Component{

// state ={
//     headerText:"Name it!",
// }
constructor(){
    super();
    this.state={
        headerText:"Name it!",
        headerExpanded:true,
        suggestedNames:[],
    };
}
handleInputChange=(inputText)=>{
   console.log("input text is:",inputText);
   name(inputText);
    // console.log("hi this sp");
    this.setState({
        headerExpanded:!inputText,
        suggestedNames:inputText?name(inputText):[]
    
    })
};

    render(){

        // console.log(name('cloud'));
      return (
        <div>
            <Header  headerExpanded={this.state.headerExpanded} headtitle={this.state.headerText}/>
            {/* <h3>{this.state.headerText}</h3> */}
            {/* <button onClick={()=>
                {
                this.setState({
                    headerText:"hii this is dp from unduru"
                })
            }
            }
                >Magic Happens Here</button> */}
            <SearchBox onInputChange={this.handleInputChange} />
            < ResultsContainer suggestedNames ={this.state.suggestedNames} />
        </div>
      )
    }
}

export default App;
