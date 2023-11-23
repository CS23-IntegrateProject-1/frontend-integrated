import { Stack, VStack } from '@chakra-ui/react'
import { ShortRedeemCard } from '../../components/membership/ShortRedeemCard';
import React from 'react'

type voucher = {
  key : number
  name : string
  description : string
}

let cards : voucher[] = [
  {
    key : 1,
    name : "freefood",
    description : "buy 1 free 1"
  },
  {
    key : 2,
    name : "discount 20%",
    description : "maximum 200 bath"
  },
  {
    key : 3,
    name : "freefood",
    description : "buy 6 free 4"
  },
  {
    key : 4,
    name : "discount 50%",
    description : "maximum 20 bath"
  },
]

const RedeemList = () => {
  return (
    <Stack padding="20px">
        {cards.map((card) => (
          <ShortRedeemCard key={card.key} voucher_name={card.name} description={card.description}/>
        ))}
    </Stack>
  )
}

export default RedeemList