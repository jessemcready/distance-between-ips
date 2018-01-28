# distance-between-ips

This web application is written using React along with both the GraphQL API and Google Maps Distance Matrix.

# purpose

Taking in two IP Addresses, the application geolocates the IP address and then tells you how long it will take to drive between the two.

# configure

After cloning the repo, make a .env file in the root directory with your own Google API Key. Then npm start.
To test locally, you may run into CORS errors.  The work-around I found was to : 1) Close all chrome instances, 2) open up your terminal and run
```
chrome.exe --disable-web-security --user-data-dir
```
