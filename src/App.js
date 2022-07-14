import React, { useState, useEffect } from "react";

// import all the components we are going to use
import {
	SafeAreaView,
	View,
	Text,
	StyleSheet,
	Image,
	PermissionsAndroid,
	Platform,
	Button
} from "react-native";

//import all the components we are going to use.
import Geolocation from "@react-native-community/geolocation";
import DeviceInfo from "react-native-device-info";

const App = () => {
	const [currentLongitude, setCurrentLongitude] = useState("...");
	const [currentLatitude, setCurrentLatitude] = useState("...");
	const [locationStatus, setLocationStatus] = useState("");
	const watchID = DeviceInfo.getUniqueIdSync();

	useEffect(() => {
		const requestLocationPermission = async () => {
			if (Platform.OS === "ios") {
				getOneTimeLocation();
				subscribeLocationLocation();
			} else {
				try {
					const granted = await PermissionsAndroid.request(
						PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
						{
							title: "Location Access Required",
							message: "This App needs to Access your location"
						}
					);
					if (granted === PermissionsAndroid.RESULTS.GRANTED) {
						//To Check, If Permission is granted
						getOneTimeLocation();
						subscribeLocationLocation();
					} else {
						setLocationStatus("Permission Denied");
					}
				} catch (err) {
					console.warn(err);
				}
			}
		};
		requestLocationPermission();
		return () => {
			Geolocation.clearWatch(watchID);
		};
	}, []);

const sendDetails = async () => {
	if (typeof web3 != 'undefined') {
		console.log("Using web3 detected from external source like Metamask")
		this.web3 = new Web3(web3.currentProvider)
	} else {
		this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
	}
	const MyContract = web3.eth.contract([
		{
			"constant": false,
			"inputs": [],
			"name": "Complete",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "int256",
					"name": "latitude",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "longitude",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "timestamp",
					"type": "int256"
				}
			],
			"name": "IngestTelemetry",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "newCounterparty",
					"type": "address"
				}
			],
			"name": "TransferResponsibility",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "device",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "Employee",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "Employer",
					"type": "address"
				},
				{
					"internalType": "int256",
					"name": "MinLatitude",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "MaxLatitude",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "MinLongitude",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "MaxLongitude",
					"type": "int256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "ComplianceDetail",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "ComplianceSensorReading",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "ComplianceSensorType",
			"outputs": [
				{
					"internalType": "enum GeoConferenceRefund.SensorType",
					"name": "",
					"type": "uint8"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "ComplianceStatus",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "Counterparty",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "Device",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "Employee",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "Employer",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "InitiatingCounterparty",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "LastSensorUpdateTimestamp",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "MaxLatitude",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "MaxLongitude",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "MinLatitude",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "MinLongitude",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "Owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "PreviousCounterparty",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "State",
			"outputs": [
				{
					"internalType": "enum GeoConferenceRefund.StateType",
					"name": "",
					"type": "uint8"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		}
	]);
	this.state.ContractInstance = MyContract.at("0xd9145CCE52D386f254917e481eB44e9943F39138")
};

const getOneTimeLocation = () => {
	setLocationStatus("Getting Location ...");
	Geolocation.getCurrentPosition(
		//Will give you the current location
		(position) => {
			setLocationStatus("You are Here");

			//getting the Longitude from the location json
			const currentLongitude = JSON.stringify(position.coords.longitude);

			//getting the Latitude from the location json
			const currentLatitude = JSON.stringify(position.coords.latitude);

			//Setting Longitude state
			setCurrentLongitude(currentLongitude);

			//Setting Longitude state
			setCurrentLatitude(currentLatitude);
		},
		(error) => {
			setLocationStatus(error.message);
		},
		{
			enableHighAccuracy: false,
			timeout: 30000,
			maximumAge: 1000
		}
	);
};

const subscribeLocationLocation = () => {
	watchID = Geolocation.watchPosition(
		(position) => {
			//Will give you the location on location change

			setLocationStatus("You are Here");
			console.log(position);

			//getting the Longitude from the location json
			const currentLongitude = JSON.stringify(position.coords.longitude);

			//getting the Latitude from the location json
			const currentLatitude = JSON.stringify(position.coords.latitude);

			//Setting Longitude state
			setCurrentLongitude(currentLongitude);

			//Setting Latitude state
			setCurrentLatitude(currentLatitude);
		},
		(error) => {
			setLocationStatus(error.message);
		},
		{
			enableHighAccuracy: false,
			maximumAge: 1000
		}
	);
};

return (
	<SafeAreaView style={{ flex: 1 }}>
		<View style={styles.container}>
			<View style={styles.container}>
				<Image
					source={{
						uri:
							"https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png"
					}}
					style={{ width: 100, height: 100 }}
				/>
				<Text style={styles.boldText}>{locationStatus}</Text>
				<Text
					style={{
						justifyContent: "center",
						alignItems: "center",
						marginTop: 16
					}}
				>
					Longitude: {currentLongitude}
				</Text>
				<Text
					style={{
						justifyContent: "center",
						alignItems: "center",
						marginTop: 16
					}}
				>
					Latitude: {currentLatitude}
				</Text>
				<View style={{ marginTop: 20 }}>
					<Button title="Get Location Details" onPress={getOneTimeLocation} />
				</View>
				<View style={{ marginTop: 20 }}>
					<Button title="Send Transaction" onPress={sendDetails} />
				</View>
			</View>
		</View>
	</SafeAreaView>
);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		padding: 10,
		alignItems: "center",
		justifyContent: "center"
	},
	boldText: {
		fontSize: 25,
		color: "red",
		marginVertical: 16
	}
});

export default App;
