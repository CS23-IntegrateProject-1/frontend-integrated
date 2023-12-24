export interface PromotionProps {
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  image_url: string;
  menuId: number;
  venueId: number;
  branchId: number;
  discount_price: number;
}

export const initialStatePromotionProp = {
  name: "",
  description: "",
  start_date: "",
  end_date: "",
  image_url: "",
  menuId: 0,
  venueId: 0,
  branchId: 0,
  discount_price: 0,
};
