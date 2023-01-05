export default interface IItem {
    title: string;
    photo: string;
    price: number;
    description: string;
    favorite?: boolean;
    id: string;
    cart?: boolean;
    quantity?: number;
  }