import React, { useState } from 'react';
import {
  ChakraProvider,
  Center,  // Import Center component
  Input,
  Flex,
  Text,
  VStack,
  HStack,
  Circle,
  IconButton,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

interface Ticket {
  id: string;
  businessName: string;
  category: string;
}

const ticketData: Ticket[] = [
  { id: 'S00001', businessName: 'Green Food', category: 'Shop' },
  { id: 'T00001', businessName: 'Green Food', category: 'Table' },
  { id: 'M00001', businessName: 'Green Food', category: 'Menu' },
  { id: 'S00001', businessName: 'Green Food', category: 'Shop' },
  { id: 'S00001', businessName: 'Green Food', category: 'Shop' },
  { id: 'S00001', businessName: 'Green Food', category: 'Shop' },
];

const TicketBox: React.FC<Ticket> = ({ id, businessName, category }) => {
  return (
    <Link to={`/admin/approval/${id}`} style={{ textDecoration: 'none' }}>
      <Flex
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        mb={4}
        width="300px"
        textColor={"white"}
        justify="space-between"
        align="center"
      >
        <VStack align="start">
          <Text>Ticket ID: {id}</Text>
          <Text>Business Name: {businessName}</Text>
          <Text>Category: {category}</Text>
        </VStack>
        <ChevronRightIcon boxSize={6} color="white" />
      </Flex>
    </Link>
  );
};

const RequestPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredTickets = ticketData.filter((ticket) =>
    ticket.businessName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ChakraProvider>
      <Center>
        <VStack align="start" spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              placeholder="Search"
              bg={"white"}
              value={searchQuery}
              onChange={handleSearchChange}
              size="sm"
              width="200px"
              borderRadius="full"
            />
          </InputGroup>
          <HStack spacing={4}>
            <Circle size="15px" bg="gray.200">
              <IconButton
                aria-label="Filter"
              //    icon={<FilterIcon />}
                variant="ghost"
              />
            </Circle>
            <Circle size="15px" bg="gray.200">
              {/* Add the icon for Sort here */}
              {/* <IconButton
                aria-label="Sort"
                icon={<SortIcon />}
                variant="ghost"
              /> */}
            </Circle>
          </HStack>
          <Flex mb={4} flexDirection="column" gap={4}>
            {filteredTickets.map((ticket) => (
              <TicketBox key={ticket.id} {...ticket} />
            ))}
          </Flex>
        </VStack>
      </Center>
    </ChakraProvider>
  );
};

export default RequestPage;
    