import React from "react";
import { Hello } from "./Hello";
import {Welcome} from "./Hello";

export class App extends React.Component {
    render(){
        return (
            <div>
                <Welcome name="Elga" age={30}/>
            </div>
        )
    }
}