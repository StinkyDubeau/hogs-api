# hogs-api
This is the home of the hogs-api application. It will serve both the game Hogs and the webapp Hogs.

## Documentation
Go checkout `./API Documentation.md`.

## Installation:
*These steps are compatible with AWS EC2 Virtual Machines.*

**If you don't know what you're doing, start [here](#installation-for-dummies).**


Prerequisites:
- Nodejs (v16 or higher)
- An open port (of your choice, but our internal applications will prefer port 3001).

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

Create a file called `.env` in the root of the project, and specify your:
- API key (API_KEY)
- Desired port (PORT)
- MongoDB cluster connection string (CONNECTION_STRING)

```
touch .env
```
```
--- [.env] ---
API_KEY=<your_api_key>
CONNECTION_STRING=mongodb+srv://<username>:<password>@clusterX.k4sdkm.mongodb.net/?retryWrites=true&w=majority&appName=ClusterX
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
Database connection established.
```

*If you do not see `Database connection established`, check that you have correctly entered your `CONNECTION_STRING`, and that you've registered your server's IP address in the mongodb dashboard.*

## Installation for dummies

These instructions should take you from nothing to fully hosted with AWS. If you didn't understand [installation](#installation), follow these steps.

The first two steps will be very generic and difficult, but they are well documented elsewhere if you get stuck. Almost any tutorial or guide you find online should suit you well.

*Hint: Google "EC2 Setup Guide" and come back here for [step 3](#3-download-the-hogs-api-project).*

### 1. Create an AWS account and launch an instance of a free-tier EC2 server

That sounds complicated, but Amazon has very good documentation. Follow [their instructions](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/get-set-up-for-amazon-ec2.html) and you'll be okay. If you're unsure of any parameters, and I haven't listed them below this paragraph, leave them as default.

- Your instance should run **Ubuntu Server 24.04.4 LTS**. Other distros can work fine too, but this guide is uses Ubuntu. *(Sue me.)*

### 2. Launch your instance and connect to it.

[This guide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html) can help you connect to your newly created EC2 instance. Keep your keys safe! Anybody with your key can do anything they want with your instance -- including rack up a huge AWS bill. Your key should be password protected and in a safe place.

AWS provides many ways of connecting to your instance. Do whatever sounds easiest to you -- I use OpenSSH. Once you have connected to your instance, and you're looking at a terminal prompt (I.e. `ubuntu@ip-555-12-34-567:`), you're ready to move to the next step.

### 3. Install prerequisites

Start by checking for updates. (There will be lots)
```bash
sudo apt update
sudo apt upgrade
```

Install nodejs and npm. Then we can use npm to update node to our desired version:

```bash
sudo apt install nodejs
sudo apt install npm
sudo npm i -g n
sudo n 20
```

Now we'll reboot to apply our updates:

```bash
sudo reboot now
```

Wait a few minutes (maybe 2 minutes), reconnect to your instance, and verify node is updated:

```bash
node -v
```

You should see `v20.11.1` appear. If not, try the above steps again or checkout [this great article](https://www.freecodecamp.org/news/how-to-update-node-and-npm-to-the-latest-version/) for more help.

### 4. Install hogs-api

Clone the git repository, open it, and install dependencies:

```bash
git clone https://github.com/StinkyDubeau/hogs-api.git
cd hogs-api
npm i -y
```

Now we need to create a file called `.env` that will contain information the API uses to run. The command `nano` will create this file, and then open it in a basic text editor.

We need to tell it our:
- API key (API_KEY)
- Desired port (PORT)
- MongoDB cluster connection string (CONNECTION_STRING)

```bash
nano .env
```

```conf
API_KEY=paste your api key here
CONNECTION_STRING=paste your connection string here
PORT=3001
```

Once you've added those lines, press `Ctrl+O` to save the file, `Enter` to name it, and then `Ctrl+X` to close nano.

*We're almost done*

### 5. Run the application

We should now have everything we need to run the server:

*Hint: We have to be inside of the `hogs-api` folder for this to work. If you've recently rebooted the EC2 instance, start by typing `cd hogs-api` before proceeding*:

If you are running the server in a production environment, use the start command:

```bash
npm start
```

If you are actively working on the script, use the dev command:

```bash
npm run dev
```

If you're not greeted with `Running on port 3001`, something has gone wrong. 
