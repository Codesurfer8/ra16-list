
function Listing({ items }) {

    return (
        JSON.parse(JSON.stringify(items)).map((item) => (
            <div className="item-list" key={item.listing_id}>
                <div className="item">
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} alt=""/>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">Woodland Fairy</p>
                        <p className="item-price">$3.99</p>
                        <p className="item-quantity level-medium">12 left</p>
                    </div>
                </div>
            </div>
        ))
    );
}

export default Listing;