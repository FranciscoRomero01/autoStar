import '../style/ItemDetail.css';

const ItemDetail = ({item}) => {

    return(
        <div className="item">
            <div className="itemImg">
                <img src={item.img}/>
            </div>
            <div className="itemDetail">
                <h2 className='itemDetailTitle'>{item.name}</h2>
                <h3 className='itemDetailPrice'>$ {item.price}</h3>
                <div className='itemDetailYK'>
                    <h4>Año: {item.year}</h4>
                    <h4>Kilometros: {item.kilometres}</h4>
                </div>
                <div>
                    <p>
                        
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
