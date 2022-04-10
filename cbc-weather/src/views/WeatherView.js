// Component where we render the data
import * as React from 'react';
import { connect } from 'react-redux';
import { loadWeather } from "../actions/actions";

class WeatherView extends React.Component {

    componentDidMount() {
        // can get location and pass it here...
        this.props.loadWeather(); // this makes it load 
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
                    console.log(this.props.data.data);
                    console.log(this.props.data.data.getCityByName);
                    console.log(this.props.data.data.getCityByName.name);
                    console.log(this.props.data.data.getCityByName.country);
                    console.log(this.props.data.data.getCityByName.weather);
                    console.log(this.props.data.data.getCityByName.weather.summary);
                    console.log(this.props.data.data.getCityByName.weather.summary.description);
                }}>Click me</button>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>body</th>
                            <th>post id</th>
                            {/* <th>{this.props.data.data.getCityByName.name}</th> */}
                        </tr>
                    </thead>
                    <tbody>

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