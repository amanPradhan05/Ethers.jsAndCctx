# Ethereum and Cryptocurrency Exchange APIs Documentation

This API provides functionality related to Ethereum addresses, wallets,Latest TRansactions and cryptocurrency exchange information.

## API Endpoints

### 1. Validate Ethereum Address

**Endpoint:** `/isValidAddress`
**Method:** POST

Check if a given Ethereum address is valid.

**Request**

json body->

{
"address": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
}
**Response**
{
"isValid": true
}

### 2. Create Ethereum Wallet

**Endpoint:** `/createWallet`
**Method:** GET

Generate a new random Ethereum wallet.

**Response**
{
"wallet": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
"privateKey": "0x0102030405060708091011121314151617181920212223242526272829303132"
}

### 4. Get Latest Transactions

**Endpoint:** `/latestTransactions`
**Method:** GET

Fetch the latest 1000 Ethereum transactions along with their details.

**Response**
{
"transactions": [
{
"hash": "0x...",
"sender": "0x...",
"receiver": "0x...",
"amount": "0.123",
"blockNumber": 12345
},
// ... other transaction objects
]
}

### 4. Get Tradable Coins

**Endpoint:** `/tradable-coins`
**Method:** GET

Returns a list of tradable coins available on the cryptocurrency exchange.

**Response**
[
"BTC/USDT",
"ETH/USDT",
// ... other tradable coin symbols
]

### 5. Get Average Prices

**Endpoint:** `/average-prices`
**Method:** GET

Returns the average prices of USDT trading pairs for each tradable coin.

**Response**
{
"BTC/USDT": 45000.25,
"ETH/USDT": 3000.15,
// ... other coin symbols and average prices
}
