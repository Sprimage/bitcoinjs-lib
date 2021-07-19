const bip39 = require('bip39')
const bip32 = require('bip32')
const bitcoin = require('bitcoinjs-lib')

const mnemonic = "step model pattern onion pulp lounge left also hill what corn approve fun despair mail resist liar energy country wife test monkey multiply faculty"


let phrase = bip39.generateMnemonic();
let seedBitcoin = bip39.mnemonicToSeed(mnemonic)
const get = async()=>{
	const buffer = await seedBitcoin
	let masterNode = bip32.fromSeed(buffer)
	let accountNode = masterNode.derivePath("m/44'/0'/6'");
	let keypoint = accountNode.derivePath('0/0');
	console.log(keypoint.toWIF())
}
get()



