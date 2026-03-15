import { ChainId } from '@pancakeswap/sdk'

export enum SupportedChainId {
  SIDRA = 97453,
}

export const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.SIDRA]: 'SidraChain',
} as const

export const DEFAULT_CHAIN_ID = SupportedChainId.SIDRA

export const SUPPORTED_CHAINS = [SupportedChainId.SIDRA] as const

export const CHAIN_INFO = {
  [SupportedChainId.SIDRA]: {
    chainId: SupportedChainId.SIDRA,
    name: 'SidraChain',
    nativeCurrency: { name: 'SDA', symbol: 'SDA', decimals: 18 },
    rpcUrls: { default: { http: ['https://node.sidrachain.com'] } },
    blockExplorerUrls: ['https://ledger.sidrachain.com'],
  },
} as const
