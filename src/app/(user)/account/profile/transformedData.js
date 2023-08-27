const transformedData = data => {
    return data.reduce((result, item) => {
        // Find the corresponding group in the result array based on the 'order_id'
        const group = result.find(group => group.order_id === item.order_id);

        if (group) {
            // If the group already exists, add the item to the 'items' array
            group.items.push(item);
        } else {
            // If the group doesn't exist, create a new group with the 'order_id' and 'orderred_at'
            const newGroup = {
                order_id: item.order_id,
                orderred_at: item.orderred_at,
                items: [item],
            };
            result.push(newGroup);
        }

        return result;
    }, []);
};

export default transformedData;
