import { Box, OutlinedInput } from '@mui/material';
import { useSearch } from '../../hooks';

interface SearchBarProps {
  initialQuery?: string;
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  initialQuery = '',
  onSearch,
  placeholder = 'Search...',
}) => {
  const { query, handleSearchChange } = useSearch({
    initialQuery,
    onSearch,
  });

  return (
    <Box sx={{ mb: 4 }}>
      <OutlinedInput
        id="search-input"
        fullWidth
        value={query}
        onChange={handleSearchChange}
        placeholder={placeholder}
      />
    </Box>
  );
};
