import * as ethers from 'ethers'
import contractAbi from '../utils/abi.json'
import Web3Modal from 'web3modal'

export const connectWallet = async () => {
	if (window.ethereum) {
		try {
			const addressArray = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			const obj = {
				status: "👆🏽 Write a message in the text-field above.",
				address: addressArray[0],
			};
			return obj;
		} catch (err) {
			return {
				address: "",
				status: "😥 " + err.message,
			};
		}
	} else {
		return {
			address: "",
			status: (
				<span>
					<p>
						{" "}
						🦊{" "}
						<a target="_blank" href={`https://metamask.io/download.html`} rel="noreferrer">
							You must install Metamask, a virtual Ethereum wallet, in your
							browser.
						</a>
					</p>
				</span>
			),
		};
	}
};

export const getCurrentWalletConnected = async () => {
	if (window.ethereum) {
		try {
			const addressArray = await window.ethereum.request({
				method: "eth_accounts",
			});
			if (addressArray.length > 0) {
				return {
					address: addressArray[0],
					status: "👆🏽 Write a message in the text-field above.",
				};
			} else {
				return {
					address: "",
					status: "🦊 Connect to Metamask using the top right button.",
				};
			}
		} catch (err) {
			return {
				address: "",
				status: "😥 " + err.message,
			};
		}
	} else {
		return {
			address: "",
			status: (
				<span>
					<p>
						{" "}
						🦊{" "}
						<a target="_blank" href={`https://metamask.io/download.html`} rel="noreferrer">
							You must install Metamask, a virtual Ethereum wallet, in your
							browser.
						</a>
					</p>
				</span>
			),
		};
	}
};

export const mint = async (kind, amount) => {
	const NODE_API_KEY = 'ec74d1b14a7948388274b61bbd842489';
	const providerOptions = {
		walletconnect: {
			// package: WalletConnectProvider,
			options: {
			rpc: {
				4: 'https://rinkeby.infura.io/v3/' + NODE_API_KEY
			},
			network: 'rinkeby',
			chainId: 4,
			infuraId: NODE_API_KEY,
			}
		}
	};
	const contractAddr = "0xf0bAb7d8b46F3fF40c36594856b6A47Bc07bE255"

	const web3modal = new Web3Modal({
		network: "rinkeby",
		cacheProvider: false, // optional
		providerOptions, // required
	})
	const connection = await web3modal.connect()
	const provider = new ethers.providers.Web3Provider(connection)
	const signer = provider.getSigner()

	const contract = new ethers.Contract(contractAddr, contractAbi, signer)
	const price = await contract.currentPrice();
	console.log('price', price);
	const transaction = await contract.mint(kind, amount, { value: (price * parseInt(amount)).toString() });
	// const transaction = await contract.mint(kind, amount);

	await transaction.wait()
}