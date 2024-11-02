import { useState, useEffect } from 'react';

export const useFilter = (items, propiedad, filtro) => {
const [filteredItems, setFilteredItems] = useState([]);

useEffect(() => {
    if (filtro) {
      const filtered = items.filter((item) => item[propiedad] == filtro); //el array vacio o con algo
    setFilteredItems(filtered);
    } else {
    setFilteredItems(items);
    }
}, [filtro]);

return filteredItems;
};
