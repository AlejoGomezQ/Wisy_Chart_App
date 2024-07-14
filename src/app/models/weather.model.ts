export interface Properties {
    properties: ForecastedTemperature
}

export interface ForecastedTemperature {
    properties?: any;
    number?:                     number;
    name:                       string;
    temperature:                number;
    temperatureUnit?:            TemperatureUnit;
}

enum TemperatureUnit {
    F = "F",
}
