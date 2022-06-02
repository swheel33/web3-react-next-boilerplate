import { useEffect, useState } from 'react'
import { hooks as metamaskHooks} from '../connectors/metaMask'
import { hooks as coinbaseWalletHooks } from '../connectors/coinbaseWallet'
import { hooks as walletConnectHooks } from '../connectors/walletConnect'
import ConnectModal from './ConnectModal';
import MetamaskDApp from './MetamaskDApp';
import CoinbaseWalletDApp from './CoinbaseWalletDApp';
import WalletConnectDApp from './WalletConnectDApp';


export default function App() {
    const { useIsActive: useIsActiveMM } = metamaskHooks;
    const { useIsActive: useIsActiveCB } = coinbaseWalletHooks;
    const { useIsActive: useIsActiveWC } = walletConnectHooks;

    const isActiveMM = useIsActiveMM();
    const isActiveCB = useIsActiveCB();
    const isActiveWC = useIsActiveWC();
    
    const [connector, setConnector] = useState('');
   
    useEffect(() => {
        if (isActiveMM) {
            setConnector('Metamask');
        } else if (isActiveCB) {
            setConnector('Coinbase Wallet');
        } else if (isActiveWC) {
            setConnector('Wallet Connect')
        } else {
            setConnector('');
        }
    }, [isActiveMM, isActiveWC, isActiveCB])
    
    return (
        <div>
            {!connector && <ConnectModal />}
            {connector === 'Metamask' && <MetamaskDApp />}
            {connector === 'Coinbase Wallet' && <CoinbaseWalletDApp />}
            {connector === 'Wallet Connect' && <WalletConnectDApp />}
        </div>
    )
}