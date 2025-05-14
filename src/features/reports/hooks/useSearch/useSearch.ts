import { useState, useCallback, useEffect } from 'react';
import { debounce } from 'lodash';

interface UseSearchProps {
  initialQuery?: string;
  onSearch: (query: string) => void;
  debounceTime?: number;
}

export function useSearch({
  initialQuery = '',
  onSearch,
  debounceTime = 300,
}: UseSearchProps) {
  const [localQuery, setLocalQuery] = useState(initialQuery);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      onSearch(value);
    }, debounceTime),
    [onSearch, debounceTime],
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setLocalQuery(value);
      debouncedSearch(value);
    },
    [debouncedSearch],
  );

  useEffect(() => {
    setLocalQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return {
    query: localQuery,
    handleSearchChange,
    setLocalQuery,
  };
}
