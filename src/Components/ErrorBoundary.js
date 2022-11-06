import { Component } from "react";
export class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }
    componentDidCatch(error, errorInfo){
        console.log("Logging", error, errorInfo)
    }
    render(){
        if(this.state.hasError) {
            return(<>
            <div className="errorhandler">
            <h1>Something isn't right!!</h1>
            <a href='/' className="btn">Back To Home</a>
            </div>
            </>)
        }
        return this.props.children
    }
}