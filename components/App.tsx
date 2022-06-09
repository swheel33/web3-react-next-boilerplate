import ConnectModal from './connect-modal/ConnectModal'
import { useWeb3React } from '@web3-react/core'

export default function App() {
    
    const { chainId, accounts, isActive, account, provider, ENSNames, connector } = useWeb3React();
    
    return (
        <div>
            <ConnectModal />
        </div>
    )
}