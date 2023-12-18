import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'

interface Card {
  voucher_name : string
  description : string
}

export const ShortMyprivilegeCard = (props : Card) => {
  return (
    <Card variant="filled" backgroundColor="brand.100">
          <CardHeader>
              <Heading size='md'> {props.voucher_name}</Heading>
          </CardHeader>
          <CardBody>
              <Text>{props.description}</Text>
          </CardBody>
    </Card>
  )
}
