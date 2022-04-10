// Component where we render the data
import React from 'react'; 
import { connect } from 'react-redux';
import { loadWeather } from "../actions/actions";

class WeatherView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: "",
            countryName: "",
            humidity: "",
            description: "",
            icon: "", // not sure about this add later?
            actual: "",
            feelsLike: "",
            windSpeed: ""
        }
    }

    componentDidMount() {
        // can get location and pass it here...
        this.props.loadWeather(); // this makes it load        
    };

    callAPI() {
        this.props.loadWeather();
    }

    // https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/
    getData = () => {
        return this.setState({
            cityName: this.props.data.data.getCityByName.name,
            countryName: this.props.data.data.getCityByName.country,
            humidity: this.props.data.data.getCityByName.weather.clouds.humidity,
            description: this.props.data.data.getCityByName.weather.summary.description,
            icon: this.props.data.data.getCityByName.weather.summary.icon,
            actual: this.props.data.data.getCityByName.weather.temperature.actual,
            feelsLike: this.props.data.data.getCityByName.weather.temperature.feelsLike,
            windSpeed: this.props.data.data.getCityByName.weather.wind.speed
        });
    }

    render() {
        if (this.props.loading) {
            return <div>Loading</div>
        }

        if (this.props.error) {
            return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
        }
        return (

            <div>
                <button onClick={() => { this.callAPI(); this.getData(); }}>Get Weather/refresh info</button>
                <table>
                    <thead>
                        <tr>
                            <th>City Name</th>
                            <th>Country name</th>
                            <th>Humidity</th>
                            <th>Description</th>
                            <th>Actual</th>
                            <th>Feels Like</th>
                            <th>wind Speed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>{this.state.cityName}</td>
                        <td>{this.state.countryName}</td>
                        <td>{this.state.humidity}</td>
                        <td>{this.state.description}</td>
                        <td>{this.state.actual}</td>
                        <td>{this.state.feelsLike}</td>
                        <td>{this.state.windSpeed}</td>
                        <td><img alt="" src={`https://openweathermap.org/img/w/${this.state.icon}.png`}></img></td>
                    </tbody>
                </table>
            </div>

        );
    }
}


const mapStateToProps = state => ({
    data: state.data,
    loading: state.loading,
    error: state.error,
});

const mapDispatchToProps = {
    loadWeather
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherView);