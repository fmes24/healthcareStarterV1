export interface MenuDataType {
  id: string;
  title: string;
  href?: string;
  children?: MenuDataType[];
}
