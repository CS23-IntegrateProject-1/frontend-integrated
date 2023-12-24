import React, { useState } from 'react'
import {
  ChakraProvider,
  Input,
  VStack,
  InputGroup,
  InputLeftElement,
  Flex,
  Text,
  List,
  ListItem,
  Radio
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

interface Promotion {
  name: string
  description: string
}

const promotionData: Promotion[] = [
  {
    name: 'Product z launch',
    description: 'Lorem ipsum dolor sit amet, consecture adipiscing elit'
  },
  {
    name: 'Product z launch',
    description: 'Lorem ipsum dolor sit amet, consecture adipiscing elit'
  },
  {
    name: 'Product z launch',
    description: 'Lorem ipsum dolor sit amet, consecture adipiscing elit'
  },
  {
    name: 'Product z launch',
    description: 'Lorem ipsum dolor sit amet, consecture adipiscing elit'
  },
  {
    name: 'Product z launch',
    description: 'Lorem ipsum dolor sit amet, consecture adipiscing elit'
  },
  {
    name: 'Product z launch',
    description: 'Lorem ipsum dolor sit amet, consecture adipiscing elit'
  },
  {
    name: 'Product z launch',
    description: 'Lorem ipsum dolor sit amet, consecture adipiscing elit'
  },
  {
    name: 'Product z launch',
    description: 'Lorem ipsum dolor sit amet, consecture adipiscing elit'
  }

]

const PromotionBox: React.FC<Promotion> = ({ name, description }) => {
  return (
<Flex
    borderWidth="1px"
    borderRadius="lg"
    p={4}
    mb={4}
    width="300px"
    textColor="white"
    justify="space-between"
    align="center"

>
    <VStack align="start">
        <Text>Name:
        {name}
    </Text>
    <Text>Description:{description}</Text>
    </VStack>
</Flex>
  )
}

const PromotionPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isFilterActive, setIsFilterActive] = useState(false)
  const [sortByName, setSortByName] = useState(false)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value)
    setIsFilterActive(event.target.value !== '')
  }

  const handleSortChange = (): void => {
    setSortByName(!sortByName)
  }

  const filteredPromotions = promotionData
    .filter((promo) =>
      promo.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => (sortByName ? a.name.localeCompare(b.name) : 0))

  return (
    <ChakraProvider>
        <VStack align="start" spacing={4} p={4}>
        <InputGroup>
        <InputLeftElement pointerEvents="none">
    <SearchIcon color="gray.300" />
    </InputLeftElement>
            <Input
            placeholder="Search "
            bg="white"
            value={searchQuery}
            onChange={handleSearchChange}
            size="sm"
            width="300px"
            borderRadius="full"
            />
        </InputGroup>
        <Flex mb={4} flexDirection="column" gap={4}>
            <List styleType="none" pl={0} textColor="white">
            <ListItem display="inline" mr={4}>
                <Radio
                as="span"
                style={{ textDecoration: isFilterActive ? 'underline' : 'none' }}
                >
                Filter
                </Radio>
            </ListItem>
            <ListItem
                display="inline"
                mr={4}
                _hover={{ cursor: 'pointer' }}
                onClick={handleSortChange}
            >
                <Radio
                as="span"
                style={{ textDecoration: sortByName ? 'underline' : 'none' }}
                >
                Sort
                </Radio>
            </ListItem>
            </List>
            {filteredPromotions.map((promo, index) => (
            <PromotionBox key={index} {...promo} />
            ))}
        </Flex>
        </VStack>
    </ChakraProvider>
  )
}

export default PromotionPage
