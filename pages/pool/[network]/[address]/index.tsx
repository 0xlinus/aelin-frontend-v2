import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { isAddress } from '@ethersproject/address'
import nullthrows from 'nullthrows'

import { Loading } from '@/src/components/common/Loading'
import { genericSuspense } from '@/src/components/helpers/SafeSuspense'
import PoolMain from '@/src/components/pools/PoolMain'
import { Chains, ChainsKeys } from '@/src/constants/chains'

const PoolDetailsPage: NextPage = () => {
  const router = useRouter()
  const { address: poolAddress, network } = router.query

  if (!poolAddress || !network) {
    return null
  }

  const chainId = nullthrows(
    Object.keys(Chains).includes(network as string) ? Chains[network as ChainsKeys] : null,
    'Unsupported chain passed as url parameter.',
  )

  if (!isAddress((poolAddress as string).toLowerCase())) {
    throw Error('Pool address is not a valid address.')
  }

  return <PoolMain chainId={chainId} poolAddress={poolAddress as string} />
}

export default genericSuspense(PoolDetailsPage, () => <Loading />)