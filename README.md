# express-socket #

A demonstration of how to use `express.js`, `socket.io` and `React`

- The back-end socket connection
- Author: [Francis Rodrigues][1]
- Based on [video tutorial][6] in (pt-BR)

## Dependencies ##

- [Express - Fast, unopinionated, minimalist web framework for Node.js][2]
- [ngrok - Public URL for exposiong your local web server][3]

## Get started ##

Clone the repository on github

```bash
~$ git clone <repo-here>
```

Install dependencies:

```bash
~$ npm install
```

Execute the npm command on console:

```bash
~$ npm run dev
```

Execute the `ngrok` with the local-server port

Open your *ngrok endpoint* on browser

> Obs.: To connect to the client, see the [React front-end client connection code][5]

## Test socket connection ##

You can test the socket connection using [socketio-client-tool][4]

## License ##

MIT


[1]: https://github.com/francisrod01
[2]: https://expressjs.com/en/starter/installing.html
[3]: https://dashboard.ngrok.com/get-started
[4]: https://amritb.github.io/socketio-client-tool/
[5]: https://codesandbox.io/s/456vz7lj7
[6]: https://youtu.be/gWD8LRjquv8
