interface ArrItems  {
    items: []
}

interface Url {
    url_570xN: string
}

interface Item {
    listing_id: string,
    url: string,
    MainImage: Url,
    title: string,
    currency_code: string,
    price: number,
    quantity: number,
}

function Listing({items}:ArrItems) {

    function setPrice(item: Item) {
        if (item.currency_code === 'USD') {
            return `$${item.price}`;
        } else if (item.currency_code === 'EUR') {
            return `€${item.price}`;
        } else {
            return `${item.price} GBP`;
        }
    }

    function setTitle(item: Item) {
        return item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title;
    }

    function setQuantity(item: Item) {
        return item.quantity <= 10 ? 'level-low' : item.quantity <= 20 && item.quantity > 10 ? 'level-medium' : 'level-high';
    }

    return (
        JSON.parse(JSON.stringify(items)).map((item: Item) => (
            <div className="item-list" key={item.listing_id}>
                <div className="item">
                    <div className="item-image">
                        <a href={item.url}>
                            <img className="image" src={item.MainImage.url_570xN} alt="" />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{setTitle(item)}</p>
                        <p className="item-price">{setPrice(item)}</p>
                        <p className={`item-quantity ${setQuantity(item)}`}>{item.quantity} left</p>
                    </div>
                </div>
            </div>
        ))
    );
}

export default Listing;