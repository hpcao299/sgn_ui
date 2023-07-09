export interface CartItem {
    id: number;
    quantity: number;
    total: number;
    original_price: number;

    title: string;
    slug: string;
    image_url: string;

    created_at: Date;
}
