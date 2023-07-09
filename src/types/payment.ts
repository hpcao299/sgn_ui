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

export interface ConfirmOrderDto {
    name: string;
    phone: string;
    email: string;
    address: string;
    message: string;
}
