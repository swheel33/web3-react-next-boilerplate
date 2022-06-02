import { Button } from "@chakra-ui/react"
import { Web3Provider } from "@ethersproject/providers"
import truncateEthAddress from 'truncate-eth-address'


export default function DApp({chainId, accounts, error, isActivating, isActive, provider, ENSNames} : {
    chainId: number,
    accounts: string[],
    error: Error,
    isActivating: boolean,
    isActive: boolean,
    provider: Web3Provider,
    ENSNames: string[]
}) {

    const signer = provider.getSigner();

    return (
        <div>
            {isActive && <Button>{ENSNames[0] ? ENSNames[0] : truncateEthAddress(accounts[0])}</Button>}
        </div>
    )
}