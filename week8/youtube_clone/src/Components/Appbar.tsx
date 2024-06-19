import { SearchBar } from "./SearchBar";

export const Appbar = () => {
  return (
    <div className="flex justify-between">
      <div>youtube</div>
      <div>
        <SearchBar />
      </div>
      <div>sign in</div>
    </div>
  );
};
