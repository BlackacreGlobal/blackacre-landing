export type MenuItem = {
  id: string;
  name: string;
  imgSrc: string;
  content: React.ReactNode;
};

export interface MenuProps {
  items: MenuItem[];
  activeMenuIndex: number;
}
