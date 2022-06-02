import { hooks } from '../connectors/coinbaseWallet'
import DApp from './DApp';


export default function CoinbaseWalletDApp() {
    const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks;

    const chainId = useChainId()
    const accounts = useAccounts()
    const error = useError()
    const isActivating = useIsActivating()
    const isActive = useIsActive()
    const provider = useProvider()
    const ENSNames = useENSNames(provider)

    return (
        <DApp 
        chainId={chainId}
        accounts={accounts}
        error={error}
        isActivating={isActivating}
        isActive={isActive}
        provider={provider}
        ENSNames={ENSNames}/>
    )
}