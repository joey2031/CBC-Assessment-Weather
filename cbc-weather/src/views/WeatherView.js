// Component where we render the data
import * as React from 'react';
import { connect } from 'react-redux';
import { loadWeather } from "../actions/actions";

class WeatherView extends React.Component {

    // state = {
    //     data: []
    // };

    componentDidMount() {
        this.props.loadWeather();
        //this.setState({ data: this.props.loadWeather() })
    };

    render() {
        if (this.props.loading) {
            return <div>Loading</div>
        }

        if (this.props.error) {
            return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
        }

        return (

            <div>
                <button onClick={() => { console.log(this.state.data) }}>Click me</button>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>body</th>
                            <th>post id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(u =>// Cannot read properties of undefined (reading 'map')
                        <tr key={u.id}>
                            <td>joey</td>
                            <td>Joey</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(WeatherView);