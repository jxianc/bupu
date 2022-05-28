import gql from 'graphql-tag'
import * as Urql from '@urql/vue'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Bp = {
  __typename?: 'Bp'
  bp: Scalars['Int']
  id: Scalars['Int']
}

export type Mutation = {
  __typename?: 'Mutation'
  addBupu: Bp
}

export type Query = {
  __typename?: 'Query'
  getBupu: Bp
}

export type Subscription = {
  __typename?: 'Subscription'
  booped: Scalars['Int']
}

export type BoopedSubscriptionVariables = Exact<{ [key: string]: never }>

export type BoopedSubscription = { __typename?: 'Subscription'; booped: number }

export type GetBupuQueryVariables = Exact<{ [key: string]: never }>

export type GetBupuQuery = {
  __typename?: 'Query'
  getBupu: { __typename?: 'Bp'; id: number; bp: number }
}

export const BoopedDocument = gql`
  subscription Booped {
    booped
  }
`

export function useBoopedSubscription<R = BoopedSubscription>(
  options: Omit<
    Urql.UseSubscriptionArgs<never, BoopedSubscriptionVariables>,
    'query'
  > = {},
  handler?: Urql.SubscriptionHandlerArg<BoopedSubscription, R>,
) {
  return Urql.useSubscription<
    BoopedSubscription,
    R,
    BoopedSubscriptionVariables
  >({ query: BoopedDocument, ...options }, handler)
}
export const GetBupuDocument = gql`
  query GetBupu {
    getBupu {
      id
      bp
    }
  }
`

export function useGetBupuQuery(
  options: Omit<Urql.UseQueryArgs<never, GetBupuQueryVariables>, 'query'> = {},
) {
  return Urql.useQuery<GetBupuQuery>({ query: GetBupuDocument, ...options })
}
