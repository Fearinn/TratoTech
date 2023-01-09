export default interface IItem {
  title: string;
  photo: string;
  price: number;
  description: string;
  category: string;
  id: string;
  favorite?: boolean;
  cart?: boolean;
  quantity?: number;
}
