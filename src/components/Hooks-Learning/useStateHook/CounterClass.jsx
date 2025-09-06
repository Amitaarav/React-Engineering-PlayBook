import React from "react";
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = { count : 0};
    }

    handleIncrement = () => {

        this.setState( prevState =>{
            return {
                count: prevState.count + 1
            }
        })
    }

    handleDecrement = () => {

        this.setState( prevState =>{
            return {
                count: prevState.count - 1
            }
        })
    }

    render () {
        return (
            <div className="counter flex  flex-col space-y-4 items-center justify-center">
                <h1 className="font-extrabold text-4xl">Count: {this.state.count}</h1>
                <div className="flex gap-2">
                    <button onClick={this.handleIncrement} className="bg-blue-700 text-white font-semibold p-2 rounded-lg">Increment</button>
                    <button onClick={this.handleDecrement} className="bg-blue-700 text-white font-semibold p-2 rounded-lg">Decrement</button>
                </div>
                
            </div>
        )
    }   
    
}

export default Counter