import { MenuProps } from "./types";

export default function Menu({ items }: MenuProps) {
  return (
    <nav className="text-white w-fit flex">
      <ul className="flex flex-row gap-12">
        {items?.map((item, i) => <li key={i}>{item.name}</li>)}
      </ul>
    </nav>
  );
}
