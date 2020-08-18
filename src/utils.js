export const handleActons = (action, prevItems, item) => {
    let items = prevItems;
    let index;
    switch(action) {
        case "add":
            items = [...prevItems];
            index = items.indexOf(item);
            items[index] = { ...items[index] };
            items[index].quantity++;
            return items;
        case "minus":
            items = [...prevItems];
            index = items.indexOf(item);
            items[index] = { ...items[index] };
            items[index].quantity--;
            return items;
        case "delete":
            items = prevItems.filter(c => c.id !== item);
            return items;
        case "reset":
            items = prevItems.map(c => {
                c.quantity = 0;
                return c;
            });
            return items;
        default:
            return items;
    }
}