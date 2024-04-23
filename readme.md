# Cryptocurrency

### Cryptocurrency vs Cryptocurrency Token

### Proof of Work
A decentralized consensus mechanism that requires members to expend effort solving an encrypted hexadecimal number. Sometimes also called "mining" in reference to receiving a reward for work being done. Proof of work allows for peer-topeer transaction processing w/o needing a trusted third party.
- A bitcoin is technically a token
- Blockchains are just distributed ledgers that record all bitcoin transactions. Each block holds n number of transactions. Some of the information stored in a block are...
    - transaction amounts, wallet addresses, timestamps etc.
- All of this block data is encrypted into a "block header" which is just a hexidecimal number created via blockchain's hashing function
- The hash from each block is used by the next block to ensure the ledger cannot be altered
- #### Hashes....
    - When a block is closed, the hash must be verified before a new block can be opened.
    - This is where proof of work comes in.
- #### Nonces
    - A hash including a series of numbers is called the nonce "number used once". When a miner begins mining, it generates a hash from publicly available informationm using a nonce equal to zero.
- #### Solving the hash...
    - If the hash is lower than the current network target, the miner successfully solved the hash.
    - The network target is a mathemathical result of a formula converted to a hexidecimal number that dictates the mining difficulty
    - If the hash is greater than the target, the mining program adds a value of 1 to the nonce & generates the hash again.
    - The entire network of miners tries to solve the hash this way. On Bitcoin blockchain, the miner that solves the hash is given the retard for the work being done.
- #### Takeaways (Mainly for comparison to PoS)
    - Validation is done by a network of miners
    - Bitcoin paid as a reward for transaction fees
    - Competitive nature uses A LOT of energy and computational power

### Mining


### Proof of Stake
- This was popularized by Etherum

### Proof of History
- Popularized by Solana

# Bitcoin

### What is Bitcoin
Peer to peer currency via blockchain. 

- Think of it as a bunch of decentralized databases, where each database is shares a synchronized instance of the ledger.
- The ledger is basically just a list of all the transactions that happened across the blockchain
- The block is essentially a group of transactions. Think a linked list, where each node represents a group of transactions (a block).
- The chain is the entirety of the linked list essentially.
- Each new block is linked to the previous block
- Each user (or wallet) has a public key for receiving money and a private key for spending money
- Each transaction has a hash / cryptographic representation of the previous transaction and the new owners public key. The hash is then signed with the previous owner's private key

### What is Blockchain (For Bitcoin)
Blockchain is just a distributed ledger, where data is chained together via cryptographic technique(s)
- A block on the blockchain can be thought of as a cell in a spread sheet or a node in a linked list. The chain contains a block header, transaction counter, and the transactions recorded in the block. The block header consists of the following...
- Software version
- Previous block hash
- Merkle root - a single has that contains all the hashed info from previous transactions
- Timestamp
- Difficultyy target
- Nonce




# Solana
Is a decentralized smart contracts block chain for decentralizing compute.

### What is Solana
Solana is