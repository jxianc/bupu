import {
  defaultExchanges,
  subscriptionExchange,
  type ClientOptions,
} from '@urql/vue'
import { createClient as createWSClient } from 'graphql-ws'

const wsClient = createWSClient({
  url: 'ws://localhost:3030/graphql',
})

export const urqlOptions: ClientOptions = {
  url: 'http://localhost:3030/graphql',
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: (operation) => ({
        subscribe: (sink) => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    }),
  ],
}
