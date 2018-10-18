var React = require('react');

var AddTodo = React.createClass({

    onSubmit: function(e) {
        e.preventDefault();

        var text = this.refs.todoText.value;

        if (text !== '' && typeof text == 'string') {
            this.refs.todoText.value = '';
            this.props.onAddTodo(text);
        } else {
            this.refs.todoText.focus();
        }
    },

    render: function () {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit}>
                    <input ref="todoText" type="text" placeholder="Type in your Todo"/>
                    <button className="button expanded" type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;