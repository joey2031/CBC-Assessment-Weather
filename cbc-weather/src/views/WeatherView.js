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
            icon: "",
            actual: "",
            feelsLike: "",
            windSpeed: ""
        }
    }

    componentDidMount() {
        this.getLocation();
    };

    getLocation() {
        navigator.geolocation.getCurrentPosition(p => {
            fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${p.coords.latitude}&lon=${p.coords.longitude}&limit=3&appid=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    this.props.loadWeather(data[0].name);
                })
        })
    }

    callAPI() {
        this.getLocation();
    }

    getData = () => {
        const city = this.props.data.data.getCityByName;
        const weather = this.props.data.data.getCityByName.weather;
        return this.setState({
            cityName: city.name,
            countryName: city.country,
            humidity: weather.clouds.humidity,
            description: weather.summary.description,
            icon: weather.summary.icon,
            actual: weather.temperature.actual,
            feelsLike: weather.temperature.feelsLike,
            windSpeed: weather.wind.speed
        });
    }

    render() {
        if (this.props.loading) {
            return 'Loading'
        }

        if (this.props.error) {
            return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
        }
        return (
            <>
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
            </>

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
