export function formattedPrice(price: number): string {
    if (!price) {
        return '';
    }

    return `${price.toLocaleString()} VNĐ`;
}
