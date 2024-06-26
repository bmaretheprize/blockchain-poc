import * as crypto from "crypto";

// A transaction is an object that contains the amount, the payer and the payee
class Transaction {
  constructor(
    public amount: number,
    public payer: string,
    public payee: string
  ) {}

  toString() {
    return JSON.stringify(this);
  }
}

// A block, contains a hash to the previous block, and the transaction object (or list of transactions)
// And a method to hash the entire block
class Block {
  public nonce = Math.round(Math.random() * 999999999);

  constructor(
    public prevHash: string,
    public transaction: Transaction,
    public ts = Date.now()
  ) {}

  get hash() {
    const str = JSON.stringify(this);
    const hash = crypto.createHash("SHA256");
    hash.update(str).end();
    return hash.digest("hex");
  }
}

// A chain is a list of blocks
// A chain contains a method to look up the last block and add a block
// To add a block we provide the transaction object and the sender's public key + signature
// We also need a method to mine the blockchain
class Chain {
  public static instance = new Chain();
  chain: Block[];

  constructor() {
    this.chain = [new Block("", new Transaction(100, "genesis", "pookie"))];
  }

  get lastBlock() {
    return this.chain[this.chain.length - 1];
  }

  mine(nonce: number) {
    let solution = 1;
    console.log("...mining...");

    while (true) {
      const hash = crypto.createHash("MD5");
      hash.update((nonce + solution).toString()).end();
      const attempt = hash.digest("hex");

      if (attempt.substring(0, 4) === "0000") {
        console.log(`Solved: ${solution}`);
        return solution;
      }
      solution += 1;
    }
  }

  addBlock(
    transaction: Transaction,
    senderPublicKey: string,
    signature: Buffer
  ) {
    const verifier = crypto.createVerify("SHA256");
    verifier.update(transaction.toString());
    const isValid = verifier.verify(senderPublicKey, signature);

    if (isValid) {
      const newBlock = new Block(this.lastBlock.hash, transaction);
      this.chain.push(newBlock);
    }
  }
}

// A wallet has a public and private key
// A wallet has a method to send money with the amount and the recipients public key.
class Wallet {
  public publicKey: string;
  public privateKey: string;

  constructor() {
    const keypair = crypto.generateKeyPairSync("rsa", {
      modulusLength: 2048,
      publicKeyEncoding: { type: "spki", format: "pem" },
      privateKeyEncoding: { type: "pkcs8", format: "pem" },
    });

    this.privateKey = keypair.privateKey;
    this.publicKey = keypair.publicKey;
  }
  sendMoney(amount: number, payeePublicKey: string) {
    const transaction = new Transaction(amount, this.publicKey, payeePublicKey);
    const sign = crypto.createSign("SHA256");
    sign.update(transaction.toString()).end();
    const signature = sign.sign(this.privateKey);
    Chain.instance.addBlock(transaction, this.publicKey, signature);
  }
}


const bmaretheprize = new Wallet();
const bob = new Wallet();
const alice = new Wallet();

bmaretheprize.sendMoney(50, bob.publicKey);
bob.sendMoney(23, alice.publicKey);
bob.sendMoney(5, bob.publicKey);
console.log(Chain.instance)