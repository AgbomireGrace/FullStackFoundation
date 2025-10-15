import React from "react";


interface GreetingClassProps{
    name:string;
}
class GreetingClass extends React.Component<GreetingClassProps>{
    render() {
        return <h2>Hello{this.props.name}</h2>
    }
}

export default GreetingClass