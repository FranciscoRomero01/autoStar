import '../style/ItemDetail.css';
import ItemCount from './ItemCount';
import data from '../utils/product';

const ItemDetail = ({item}) => {

    return(
        <>
            <div className="item">
                <div className="itemImg">
                    <img src={item.img}/>
                </div>
                <div className="itemDetail">
                    <h2 className='itemDetailTitle'>{item.name}</h2>
                    <div className='itemDetailPrice'>
                        <h3>Precio Deposito/Transferencia </h3>
                        <h3 className='red-text bold'>${item.price}</h3>
                    </div>
                    <div className='itemDetailPriceMP'>
                        <h3>Precio Mercado Pago</h3>
                        <h3 className='blue-text bold'>${item.priceMP}</h3>
                    </div>
                    <div className='itemDetailStock right'>
                        <h4> Stock disponible: {item.stock}</h4>
                        <ItemCount />  
                    </div>
                </div>
            </div>
            <div className='description'>
                <div className='general'>
                    <h5>General</h5>
                    <div className='family'>
                        <h6 className='descriptionFamily'>Familia</h6>
                        <p>{data[3].general.family}</p>
                    </div>
                    <div className='cores'>
                        <h6 className='descriptionCores'>Nucleos</h6>
                        <p>{data[3].general.cores}</p>
                    </div>
                    <div className='threads'>
                        <h6 className='descriptionThreads'>Hilos</h6>
                        <p>{data[3].general.threads}</p>
                    </div>
                    <div className='turboFrequency'>
                        <h6 className='descriptionTF'>Frecuencia Turbo</h6>
                        <p>{data[3].general.turboFrequency}</p>
                    </div>
                    <div className='frecuency'>
                        <h6 className='descriptionFrecuency'>Frecuencia Base</h6>
                        <p>{data[3].general.frequency}</p>
                    </div>
                    <div className='integratedGraph'>
                        <h6 className='descriptionIG'>Grafica Integrada</h6>
                        <p>{data[3].general.integratedGraph}</p>
                    </div>
                </div>
                <div className='coolersHeatsinks'>
                    <h5>Coolers Y Disipadores</h5>
                    <div className='cooler'>
                        <h6 className='descriptionCooler'>Incluye Cooler CPU</h6>
                        <p>{data[3].coolersHeatsinks.coolerCPU}</p>
                    </div>
                    <div className='tdp'>
                        <h6 className='descriptionTDP'>TDP</h6>
                        <p>{data[3].coolersHeatsinks.tdp}</p>
                    </div>
                    <div className='overclockeable'>
                        <h6 className='descriptionOverclockeable'>Desbloqueado - Overclockeable</h6>
                        <p>{data[3].coolersHeatsinks.overclockeable}</p>
                    </div>
                </div>
                <div className='memory'>
                    <h5>Memoria</h5>
                    <div className='l1'>
                        <h6 className='descriptionL1'>L1</h6>
                        <p>{data[3].memory.l1}</p>
                    </div>
                    <div className='l2'>
                        <h6 className='descriptionL2'>L2</h6>
                        <p>{data[3].memory.l2}</p>
                    </div>
                    <div className='l3'>
                        <h6 className='descriptionL3'>L3</h6>
                        <p>{data[3].memory.l3}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;
