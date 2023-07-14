export interface Product {
    id: number;

    title: string;
    slug: string;
    image_url: string;
    created_at: Date;

    price: number;
    has_sold: number;
    topic_id: number;
}

export interface ProductDetailsDto {
    topic_id: number;
    title: string;
    image_url: string;
    short_desc: string;
    full_desc: string;
    price: number;
}
