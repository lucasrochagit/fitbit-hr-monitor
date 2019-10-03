# fitbit-hr-monitor

A simple Fitbit HR Monitor using the Companion to comunicate with a external service.


## Getting Started
### Prerequisites

* NodeJS: v8.0.0 or later
* Fitbit Studio: v3.0.0 or later
* Fitbit Dev Account: A Fitbit Developer Account to install the application into a device.
* Fitbit Ionic: A Fitbit Ionic Device to compile the application.
* A Internet Connection to provide the communication from device to server.

### Installing
#### Server App

Run the dependencies install
```
npm i
```
Go to the `index.js` file and set the application port on `app.listen(PORT, () => {})` function. (default is 3000). 

After that, run the application with the commnand bellow:

```
npm run dev
```
#### Fitbit Ionic

Copy the content of the `fitbit-app` path and paste into a blank project using the [Fitbit Studio](https://studio.fitbit.com). After that, go to the file `companion/server.js` and past the external service host instead of `HOST` constant value. The host should be using a HTTPS protocol. I recommend that you use the tool [ngrok](https://ngrok.com/) to generate a external HTTPS host from your local server app.


## Built With

* [Fitbit Studio](https://studio.fitbit.com) - The Fitbit Ionic framework used
* [NodeJS](https://nodejs.org/en/) - The web framework used

## Authors

* **Lucas Rocha** - *Initial work* - [Github](https://github.com/lucasrochagit) [Email](mailto:lucas_rocha2@hotmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/lucasrochagit/fitbit-hr-monitor/blob/master/README.md) file for details
