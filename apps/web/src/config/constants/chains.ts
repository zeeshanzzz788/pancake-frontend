import { ChainId } from '@pancakeswap/sdk'

export const SIDRA = {
  id: 97453,
  name: 'SidraChain',
  nativeCurrency: { name: 'SDA', symbol: 'SDA', decimals: 18 },
  rpcUrls: { default: { http: ['https://node.sidrachain.com'] } },
  blockExplorers: { default: { url: 'https://ledger.sidrachain.com' } },
} as const

export const CHAINS = [SIDRA] as const

export const CHAIN_QUERY_NAME = {
  [SIDRA.id]: 'sidra',
} as const

export const DEFAULT_CHAIN_ID = 97453

export const SUPPORTED_CHAINS = [SIDRA] as const
