# Repository Structure

```
.
├── screens
│   ├── ChallengePage.png
│   ├── LoginPage.png
│   └── TestingPage.png
|
├── backend
|   ├── app.js
│   ├── login_contract.js
│
├── frontend
|   ├── index.html
│   ├── script.js  // Javascript file
│   ├── bundle.js // Minifies file
│
├── solidity
│   ├── build
│   │   └── contracts
│   │       ├── Login.json
│   │       └── Migrations.json
│   ├── contracts
│   │   ├── Login.sol
│   │   └── Migrations.sol
│   ├── migrations
│   │   ├── 1_initial_migration.js
│   │   └── 2_deploy_contracts.js
│   └── truffle.js
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
├── README.md
└── SETUP.md
```

To develop, we will need to develop 3 folders.

## Solidity folder

Ensure that you have Ganache setup and running on `http://localhost:7545/`

1. Go to `solidity/` folder
2. Run `truffle deploy`

This will deploy to Ganache.

## Backend folder

Ensure that you have nodejs and npm installed.

1. Go to `backend/` folder.
2. Run `npm install`.
3. Run `npm start`.

## Frontend folder

1. Go to `frontend/` folder.
2. Run `npm install`.
3. Run `npm run build`.
4. Run `npx static-server`.

After all these steps:
1. Frontend should be hosted on `http://localhost:9080/`
2. Backend should be hosted on `http://localhost:3000/`
3. Ganache should be working on `http://localhost:7545`.

Now we can perform all authentication systems.

### Truffle Console

> Truffle Console: A basic interactive console connecting to any Ethereum client

Steps to interact with the contract.

1. Go to `solidity/` folder and run `truffle console --network development`.
2. In the truffle console, run the following commands after you get the challenge string.

```bash
truffle(develop)> global = globalThis
truffle(develop)> let instance = await Login.deployed()
truffle(develop)> let result = instance.login("Challenge_String_Here")

```

If we go to Ganache, we'll see that the transaction is successful and the block is mined.