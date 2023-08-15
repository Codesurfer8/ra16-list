
function Listing({ items }) {

    return (
        JSON.parse(JSON.stringify(items)).map((item) => (
            <div className="item-list" key={item.listing_id}>
                <div className="item">
                    <div className="item-image">
                        <a href={item.url}>
                            <img src="https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg" alt=""/>
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