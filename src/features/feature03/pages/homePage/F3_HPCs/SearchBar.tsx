import { Input } from "@chakra-ui/react";
import { FC } from "react";

interface SearchBarProps {
  searchFilter: string;
  setSearchFilter: (filter: string) => void;
  onSubmit?: () => void;
}

export const SearchBar: FC<SearchBarProps> = ({
  searchFilter,
  setSearchFilter,
  onSubmit
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value;
    setSearchFilter(newFilter);
  };

  const handleInputSubmit = (e: KeyboardEvent) => {
    if(e.keyCode === 13){ 
      onSubmit?.();
    }
  }

  return (
    <Input
      w={"95%"}
      borderColor={"black"}
      background={"white"}
      textColor={"black"}
      placeholder="search"
      value={searchFilter}
      onChange={handleInputChange}
      onKeyUp={handleInputSubmit}
    />
  );
};
