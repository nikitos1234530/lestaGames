import { useState, useCallback, useMemo } from 'react'
import './ShipWrapper.css'
import { useQuery } from "@apollo/client";
import { GET_VEHICLES } from "../../graphQl/models/vehicles";
import ShipItem from '../ShipItem/ShipItem';
import { Vehicle } from '../../types/apollo/vehicles'
import { ShipOption, ShipLevelOption } from '../../types/apollo/filterOptions'
import { SingleValue } from 'react-select'
import { ShipFilters } from '../ShipFilters/ShipFilters'
import { Stub } from '../Stub/Stub'
import { Pagination } from '../Pagination/Pagination'

const ITEMS_PER_PAGE = 12;

const ShipWrapper = () => {
    const { loading, error, data } = useQuery(GET_VEHICLES);
    const [levelFilter, setLevelFilter] = useState<string | number>('all');
    const [nationFilter, setNationFilter] = useState<string>('all');
    const [typeFilter, setTypeFilter] = useState<string>('all');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredData = useMemo(() => {
        if (!data) return [];
        return data.vehicles.filter((vehicle: Vehicle) => {
            return (
                (levelFilter === 'all' || vehicle.level === levelFilter) &&
                (nationFilter === 'all' || vehicle.nation.name === nationFilter) &&
                (typeFilter === 'all' || vehicle.type.name === typeFilter)
            );
        });
    }, [data, levelFilter, nationFilter, typeFilter]);
    

    const handleFilterChange = useCallback((type: string, selectedOption: SingleValue<ShipOption | ShipLevelOption>) => {
        const value = selectedOption ? selectedOption.value : 'all';
        
        if (type === 'level') setLevelFilter(value);
        if (type === 'nation') setNationFilter(value as string);
        if (type === 'type') setTypeFilter(value as string);
        setCurrentPage(1);
    }, []);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        return filteredData.slice(startIndex, endIndex);
    }, [filteredData, currentPage]);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };



    if (loading) return <Stub text='Загрузка'/>;
    if (error) return <Stub text={error.message}/>;

    return (
        <>  
            <ShipFilters
                className='ShipsWrapper__Filters'
                handleFilterChange={handleFilterChange}
            />
            <div className="ShipWrapper">
                {paginatedData.length > 0 ? paginatedData.map((item: Vehicle) => {
                    return (
                        <ShipItem 
                            key={item.title + item.description} 
                            title={item.title} 
                            description={item.description} 
                            nation={item.nation} 
                            level={item.level} 
                            icons={item.icons}
                            shipClass={item.type.title}/>
                    )
                }) 
                :
                <Stub text='Ничего не найдено'/>}
            </div>
            <Pagination
                itemsPerPage={ITEMS_PER_PAGE}
                totalItems={filteredData.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    )
}

export default ShipWrapper