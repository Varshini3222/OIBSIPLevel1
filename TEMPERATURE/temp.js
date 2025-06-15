function convertTemperature() {
    let temp = parseFloat(document.getElementById("temperatureInput").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let result;

    if (isNaN(temp)) {
        alert("Please enter a valid number!");
        return;
    }

    if (fromUnit === toUnit) {
        result = temp;
    } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        result = (temp * 9/5) + 32;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        result = temp + 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        result = (temp - 32) * 5/9;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        result = (temp - 32) * 5/9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        result = temp - 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        result = (temp - 273.15) * 9/5 + 32;
    }

    document.getElementById("result").innerText = `Converted Temperature: ${result.toFixed(2)}° ${toUnit}`;
}
