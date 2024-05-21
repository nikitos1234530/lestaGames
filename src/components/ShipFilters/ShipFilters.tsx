import { memo } from 'react'
import Select, { SingleValue } from 'react-select'
import { ShipOption, ShipLevelOption } from '../../types/apollo/filterOptions'
import { shipTypeNamesOptions, shipNationNamesOptions, shipLevelsOptions } from '../../constants/shipsOptions'
import './ShipFilters.css'

interface IShipFiltersProps {
    className: string;
    handleFilterChange: (type: string, selectedOption: SingleValue<ShipLevelOption | ShipOption>) => void
}

export const ShipFilters =  memo((props: IShipFiltersProps) => {
    const { 
        handleFilterChange,
        className
    } = props;

    return (
        <div className={`ShipFilters ${className}`}>
            <Select
            className='ShipFilters__Item'
            options={shipLevelsOptions}
            onChange={(selectedOption) => handleFilterChange('level', selectedOption)}
            placeholder="Выберите уровень"
            
            />
            <Select
            className='ShipFilters__Item'
            options={shipNationNamesOptions}
            onChange={(selectedOption) => handleFilterChange('nation', selectedOption)}
            placeholder="Выберите нацию"
            />
            <Select
            className='ShipFilters__Item'
            options={shipTypeNamesOptions}
            onChange={(selectedOption) => handleFilterChange('type', selectedOption)}
            placeholder="Выберите класс"
            />
    </div>
    )
})