import './ShipItem.css'
import { Nation, Icons } from '../../types/apollo/vehicles'
import { FC } from 'react';

interface IShipItemProps {
    title: string;
    description: string;
    nation: Nation;
    level: number;
    icons: Icons;
    shipClass: string;
}

const ShipItem: FC<IShipItemProps> = ({ title, description, nation, level, icons, shipClass }) => {
    return (
        <div className="ShipItem">
            <div className='ShipItem__NationColor' style={{backgroundColor: nation.color}}></div>
            <div className='ShipItem__Wrapper'>
                <h5 className='ShipItem__Title'>{title}</h5>
                <span>{shipClass}</span>
                <img src={icons.large} className='ShipItem__Image'/>
                <p className='ShipItem__Description'>{description}</p>
                <div className='ShipItem__FooterWrapper'>
                    <div className='ShipItem__Nation'>
                        <p className='ShipItem__NationTitle' style={{color: nation.color}}>{nation.title}</p>
                        <img src={nation.icons.large} className='ShipItem__NationImage'/>
                    </div>
                    <p>Уровень: {level}</p>
                </div>
            </div>
        </div>
    )
}

export default ShipItem