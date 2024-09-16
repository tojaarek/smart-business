interface SearchItemProps {
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

const SearchInput: React.FC<SearchItemProps> = ({ placeholder, value, onChange }) => {
  return <input type='text' placeholder={placeholder} value={value} onChange={onChange}/>;
};

export default SearchInput;
