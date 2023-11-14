// SearchBar.tsx

import React, { useState } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // You can perform additional actions before calling the onSearch callback if needed
    onSearch(searchQuery);
  };

  return (
    
      <Input
        type="text"
        placeholder="Search theaters or cinemas"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        mb={7}
        mt={5}
        backgroundColor={"white"}
        borderRadius={"35px"}
        color={"black"}       
      />     
    
  );
};

export default SearchBar;
