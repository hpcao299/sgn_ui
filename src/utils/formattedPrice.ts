export function formattedPrice(price: number): string {
    if (!price) {
        return '';
    }

    return `${Number(price).toLocaleString()} VNĐ`;
}
