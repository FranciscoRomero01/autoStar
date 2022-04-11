import { useEffect, useState } from 'react';
import '../style/ItemDetail.css';
import ItemCount from './ItemCount';
import data from './product';

const ItemDetail = ({item}) => {

    function getFeatures() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(data[3].features);
            }, 2000 )
        });
    };

    const [features, setfeatures] = useState([]);

    useEffect(() => {
        const featuresData = async () => {
            let readyfeatures = await getFeatures();
            setfeatures(readyfeatures);
        }
        featuresData();
    });

    console.log(features);

    return(
        <>
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
                        <ItemCount />  
                    </div>
                </div>
            </div>
            <div className='description'>
                <h5>Características principales</h5>
                <div className='brand'>
                    <p className='descriptionBrand'>Marca:</p>
                    <p>{features.brand}</p>
                </div>
                <div className='model'>
                    <p className='descriptionModel'>Modelo:</p>
                    <p>{features.model}</p>
                </div>
                <div className='color'>
                    <p className='descriptionColor'>Color:</p>
                    <p>{features.color}</p>
                </div>
                <div className='fuelType'>
                    <p className='descriptionFT'>Tipo de combustibre:</p>
                    <p>{features.fuelType}</p>
                </div>
                <div className='doors'>
                    <p className='descriptionDoors'>Puertas:</p>
                    <p>{features.doors}</p>
                </div>
                <div className='transmission'>
                    <p className='descriptionT'>Transmisión:</p>
                    <p>{features.transmission}</p>
                </div>
                <div className='engine'>
                    <p className='descriptionEngine'>Motor:</p>
                    <p>{features.engine}</p>
                </div>
                <div className='bodyType'>
                    <p className='descriptionBT'>Tipo de carroceria</p>
                    <p>{features.bodyType}</p>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;
