## Table of contents
* [Sports Store](#the-guardian)
* [Libraries](#libraries)
* [Building](#building)
* [Available Scripts](#available-scripts)
* [Deployment](#deployment)

# Sports Store
This is a sample learning application that uses some libraries to simulate a simple
shopping store, While reading **_Pro React 16_** book by **_Adam freeman_**.

## Libraries
This project uses:
- **Faker** to Generate Sample Data
- **Redux** as Data Store
- **Cypress** as Server for Simulating REST Services
- **Bootstrap** as UI Framework

## Building

Building The Guardian requires the following tools:

- Git (obviously)
- Node.js

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

All scripts that are available in create-react-app.

> You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
>
> To learn React, check out the [React documentation](https://reactjs.org/).

## Deployment

For deployment, you can use nginx as web server.

- First create the production build with this command:

  > npm run build

- Then download the [Nginx](https://nginx.org/en/download.html) and place extracted
  folder somewhere like: _C:/nginx_.

- After that, we must change the configuration file for serving the static files
  generated in step one.
  For this, Open the nginx.conf file located in: extractedPath/conf like: _C:/nginx/conf_.

Now assuming our application build folder is the following path:

_D:/projects/sports-store/build_

- In the conf file, change server part like below:

```text
server {
    
    listen       5050;  #or any other ports
    server_name  localhost;

    location / {
        root   "D:/projects/sports-store/build";    #the application build folder
        try_files  $uri /index.html;
    }
}
```
Done. Start the Nginx.
