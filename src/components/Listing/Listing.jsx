
function Listing({ items }) {

    function setPrice(item) {
        if (item.currency_code === 'USD') {
            return `$${item.price}`;
        } else if (item.currency_code === 'EUR') {
            return `€${item.price}`;
        } else {
            return `${item.price} GBP`;
        }
    }

    function setTitle(item) {
        return item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title;
    }

    function setQuantity(item) {
        return item.quantity <= 10 ? 'level-low' : item.quantity <= 20 && item.quantity > 10 ? 'level-medium' : 'level-high';
    }

    return (
        JSON.parse(JSON.stringify(items)).map((item) => (
            <div className="item-list" key={item.listing_id}>
                <div className="item">
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} alt="" />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{setTitle(item)}</p>
                        <p className="item-price">{setPrice(item)}</p>
                        <p className={`item-quantity ${setQuantity(item)}`}>{item.quantity}</p>
                    </div>
                </div>
            </div>
        ))
    );
}

export default Listing;