export function formattedDate(timestamp: string): string {
    const date = new Date(timestamp);

    // Plus 7 hours to date to UTC+7
    date.setTime(date.getTime() + 7 * 60 * 60 * 1000);

    const formattedDate = date.toLocaleString('vi-VN');

    return formattedDate;
}
