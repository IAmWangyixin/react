import React, { Component } from 'react';

import {connect} from 'react-redux';
import actions from '../../store/actions/counter';

class Counter extends Component {
    render() {
        const { add, minus, number } = this.props;
        return (
            <div>
                <button onClick={() => minus(1)}>-</button>
                {number}
                <button onClick={() => add(3)}>+</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        number: state.counter.number
    };
}

const mapDispatchToProps = dispatch => {
    return {
        add: (n) => dispatch(actions.add(n)),
        minus: (n) => dispatch(actions.minus(n))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);