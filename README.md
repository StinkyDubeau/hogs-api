# hogs-api
This is the home of the hogs-api application. It will serve both the game Hogs and the webapp Hogs.

## Documentation
Go checkout `./API Documentation.md`.

## To install an instance of the server:
*These steps should be compatible with AWS EC2 Virtual Machines*

Prerequisites:
- Nodejs (v16 or higher)
- An open port (of your choice, but our interal applications will prefer port 3001).

1. Navigate to a desired directory and clone:

```
git clone https://github.com/StinkyDubeau/hogs-api.git
```

2. Open the project and install dependencies:

```
cd hogs-api
npm i
```

3. Configure environment variables

Create a file called `.env` in the root of the project, and specify your API key as well as the desired port to run the server

```
touch .env
```
```
--- [.env] ---
API_KEY=<your_api_key>
PORT=3001
--------------
```

4. Run the project

For deployment:

```
npm start
```

For development (server will restart when changes made to the code):

```
npm i nodemon
npm run dev
```

5. The server should now be running, and you should be greeted with:

```
Running on port 3001.
```