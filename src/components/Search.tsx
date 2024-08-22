import { CiSearch } from "react-icons/ci";
import "../styles/search.css";
import { FormEvent, useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const onFinish = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue)
  };
  return (
    <form onSubmit={onFinish}>
      <button>
        <CiSearch size={25} />
      </button>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        required
        type="text"
        placeholder="Search anywhere..."
      />
    </form>
  );
};

export default Search;
