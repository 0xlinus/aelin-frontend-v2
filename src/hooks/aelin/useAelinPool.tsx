import { useMemo } from 'react'

import { BigNumber } from '@ethersproject/bignumber'
import { ClientError } from 'graphql-request'
import { KeyedMutator, SWRConfiguration } from 'swr'

import { PoolByIdQuery } from '@/graphql-schema'
import { ChainsValues } from '@/src/constants/chains'
import { ZERO_BN } from '@/src/constants/misc'
import useAelinPoolCall from '@/src/hooks/aelin/useAelinPoolCall'
import {
  getAmountFunded,
  getAmountInPool,
  getAmountWithdrawn,
  getDealDeadline,
  getPoolCreatedDate,
  getPurchaseExpiry,
  getPurchaseTokenCap,
  getSponsorFee,
} from '@/src/utils/aelinPool'
import getAllGqlSDK from '@/src/utils/getAllGqlSDK'

type DetailedNumber = {
  raw: BigNumber
  formatted: string | undefined
}

export type ParsedAelinPool = {
  start: Date
  investmentToken: string
  investmentTokenDecimals: number
  investmentDeadline: Date
  purchaseExpiry: Date
  dealDeadline: Date
  sponsor: string
  sponsorFee: DetailedNumber
  poolCap: DetailedNumber
  amountInPool: DetailedNumber
  funded: DetailedNumber
  withdrawn: DetailedNumber
}

export default function useAelinPool(
  chainId: ChainsValues,
  poolAddress: string,
  config?: SWRConfiguration<PoolByIdQuery, ClientError>,
): { refetch: KeyedMutator<PoolByIdQuery>; pool: ParsedAelinPool } {
  const allSDK = getAllGqlSDK()
  const { usePoolById } = allSDK[chainId]
  const { data, mutate } = usePoolById({ poolCreatedId: poolAddress }, config)
  const [poolTotalWithdrawn] = useAelinPoolCall(chainId, poolAddress, 'totalAmountWithdrawn', [])

  if (!data?.poolCreated) {
    throw Error('There was not possible to fetch pool id: ' + poolAddress)
  }

  if (!poolTotalWithdrawn) {
    throw Error('There was not possible to fetch poolTotalWithdrawn: ' + poolAddress)
  }

  const pool = data.poolCreated
  const purchaseTokenDecimals = pool.purchaseTokenDecimals

  // prevent TS error
  if (!purchaseTokenDecimals) {
    throw Error('PurchaseTokenDecimals is null or undefined for pool: ' + poolAddress)
  }

  const memoizedPool = useMemo(() => {
    return {
      start: getPoolCreatedDate(pool),
      investmentToken: pool.purchaseToken,
      investmentTokenDecimals: purchaseTokenDecimals,
      investmentDeadline: pool.purchaseDuration,
      sponsor: pool.sponsor,
      sponsorFee: getSponsorFee(pool),
      poolCap: getPurchaseTokenCap({ ...pool, purchaseTokenDecimals }),
      purchaseExpiry: getPurchaseExpiry(pool),
      dealDeadline: getDealDeadline(pool),
      amountInPool: getAmountInPool({ ...pool, purchaseTokenDecimals }),
      funded: getAmountFunded({ ...pool, purchaseTokenDecimals }),
      withdrawn: getAmountWithdrawn(poolTotalWithdrawn || ZERO_BN),
    }
  }, [pool, purchaseTokenDecimals, poolTotalWithdrawn])

  return {
    refetch: mutate,
    pool: memoizedPool,
  }
}