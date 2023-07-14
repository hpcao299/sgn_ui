export interface GeneralStatistic {
    total_orders: number;
    total_revenue: number;
    total_sold_products: number;
}

export interface RecentOrderDetail {
    id: number;
    orderred_at: string;
    name: string;
    phone: string;
    total: number;
}

export interface ProductStatistic {
    id: number;
    has_sold: number;
    created_at: string;
    image_url: string;
    title: string;
    slug: string;
}
