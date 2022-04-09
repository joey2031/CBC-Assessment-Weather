// Component where we render the data
import * as React from 'react';
import { connect } from 'react-redux';
import { loadWeather } from "./actions/actions";

class WeatherView extends React.Component {
    componentDidMount() {
        this.props.loadWeather();
        console.log(this.props.data);
    };

    render() {
        if (this.props.loading) {
            return <div>Loading</div>
        }

        if (this.props.error) {
            return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>body</th>
                        <th>post id</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map(u => // Will update this later
                        <tr key={u.id}>
                            <td>{u.body}</td>
                            <td>{u.postId}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

// Changed state.reduxThunk.data to state.data
const mapStateToProps = state => ({
    data: state.data,
    loading: state.loading,
    error: state.error,
});

const mapDispatchToProps = {
    loadWeather
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherView);