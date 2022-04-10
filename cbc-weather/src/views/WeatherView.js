// Component where we render the data
import * as React from 'react';
import { connect } from 'react-redux';
import { loadWeather } from "../actions/actions";

class WeatherView extends React.Component {

    componentDidMount() {
        // can get location and pass it here...
        this.props.loadWeather(); // this makes it load 
        // we cant log it as this point can only log it on button click and loop through it
        // problem: API does not return an array.
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
                <button onClick={() => {
                    console.log(this.props.data);
                    console.log(Object.keys(this.props));
                    }}>Click me</button>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>body</th>
                            <th>post id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.props.data.map(l => // I can't map it, dont think its an array
                            <tr key={l.id}>
                                <td>joey</td>
                                <td>Joey</td>
                            </tr>
                        )} */}
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