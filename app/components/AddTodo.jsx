var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({

    onSubmit: function(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var text = this.refs.todoText.value;

        if (text !== '' && typeof text == 'string') {
            this.refs.todoText.value = '';
            dispatch(actions.addTodo(text));
        } else {
            this.refs.todoText.focus();
        }
    },

    render: function () {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit}>
                    <input ref="todoText" type="text" placeholder="Type in your Todo"/>
                    <button className="button expanded" type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
});

export default connect()(AddTodo);