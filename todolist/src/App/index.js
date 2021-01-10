import React, {Component, Fragment} from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./index.css";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            list: []
        }
        this.handleToggole = this.handleToggole.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
    }

    render() {
        return (
            <Fragment>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    onEntered={(el) => {el.style.color = 'blue'}}
                    appear={true}
                >
                    <div>hello</div>
                </CSSTransition>
                <TransitionGroup>
                {
                    this.state.list.map((item, index) => (
                        <CSSTransition
                            timeout={1000}
                            classNames='fade'
                            unmountOnExit
                            onEntered={(el) => {el.style.color = 'blue'}}
                            appear={true}
                            key={index}
                        >
                            <div>{item}</div>
                        </CSSTransition>
                    ))
                }
                </TransitionGroup>
                
                <button onClick={this.handleToggole}>toggle</button>
                <button onClick={this.handleAddItem}>toggle2</button>
            </Fragment>
        )
    }

    handleToggole() {
        this.setState((prevState) => ({
            show: !prevState.show 
        }))
    }

    handleAddItem() {
        this.setState((prevState) => ({
            list: [...prevState.list, 'item']
        }))
    }
}

export default App