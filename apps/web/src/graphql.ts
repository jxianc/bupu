import { gql } from '@urql/vue'

const getBupuQuery = gql`
  query GetBupu {
    getBupu {
      id
      bp
    }
  }
`

export { getBupuQuery }
