import { Search } from "lucide-react";
import { Input } from ".";

export function SearchInput() {
  return (
    <div className="relative">
      <Search
        color="#71717A"
        size={16}
        className="absolute left-2 top-1/2 transform -translate-y-1/2"
      />
      <Input
        id="search"
        placeholder="Search screenshots"
        className="pl-8"
      ></Input>
    </div>
  );
}
