export function formattedDate(timestamp: string): string {
    const date = new Date(timestamp);

    const formattedDate = date.toLocaleString('vi-VN');

    return formattedDate;
}
