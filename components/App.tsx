import { Box } from '@chakra-ui/react';
import { useEffect } from 'react'
import { hooks as metaMaskHooks, metaMask } from '../connectors/metaMask'
import { hooks as coinbaseWalletHooks, coinbaseWallet } from '../connectors/coinbaseWallet'
import { hooks as walletConnectHooks, walletConnect} from '../connectors/walletConnect'
import ConnectModal from './ConnectModal';


export default function App() {

    const { useChainId: useChainIdMM, useAccounts: useAccountsMM, useError: useErrorMM,
            useIsActivating: useIsActivatingMM, useIsActive: useIsActiveMM, useProvider: useProviderMM, useENSNames: useENSNamesMM } = metaMaskHooks;
    const chainIdMM = useChainIdMM()
    const accountsMM = useAccountsMM()
    const errorMM = useErrorMM()
    const isActivatingMM = useIsActivatingMM()
    const isActiveMM = useIsActiveMM()
    const providerMM = useProviderMM()
    const ENSNamesMM = useENSNamesMM(providerMM)

    const { useChainId: useChainIdCB, useAccounts: useAccountsCB, useError: useErrorCB,
        useIsActivating: useIsActivatingCB, useIsActive: useIsActiveCB, useProvider: useProviderCB, useENSNames: useENSNamesCB } = coinbaseWalletHooks;
    const chainIdCB = useChainIdCB()
    const accountsCB = useAccountsCB()
    const errorCB = useErrorCB()
    const isActivatingCB = useIsActivatingCB()
    const isActiveCB = useIsActiveCB()
    const providerCB = useProviderCB()
    const ENSNamesCB = useENSNamesCB(providerCB)

    const { useChainId: useChainIdWC, useAccounts: useAccountsWC, useError: useErrorWC,
        useIsActivating: useIsActivatingWC, useIsActive: useIsActiveWC, useProvider: useProviderWC, useENSNames: useENSNamesWC } = walletConnectHooks;
    const chainIdWC = useChainIdWC()
    const accountsWC = useAccountsWC()
    const errorWC = useErrorWC()
    const isActivatingWC = useIsActivatingWC()
    const isActiveWC = useIsActiveWC()
    const providerWC = useProviderWC()
    const ENSNamesWC = useENSNamesWC(providerWC)
    
    let chainId;
    let accounts;
    let ENSNames;
    let isActive;
    let provider;

    if (isActiveMM) {
        chainId = chainIdMM;
        accounts = accountsMM;
        ENSNames = ENSNamesMM;
        isActive = isActiveMM;
        provider = providerMM;
    } else if (isActiveCB) {
        chainId = chainIdCB;
        accounts = accountsCB;
        ENSNames = ENSNamesCB;
        isActive = isActiveCB;
        provider = providerCB;
    } else if (isActiveWC) {
        chainId = chainIdWC;
        accounts = accountsWC;
        ENSNames = ENSNamesWC;
        isActive = isActiveWC;
        provider = providerWC;
    }
   
    
    return (
        <Box>
            <ConnectModal accounts={accounts} chainId={chainId} ENSNames={ENSNames} isActive={isActive}/>
        </Box>
    )
}