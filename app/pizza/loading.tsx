import ProductCardFallback from '@/components/ProductCardFallback';
import React from 'react';

const loading = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-11/12">
            {new Array(8).fill(true).map((item, index) => <ProductCardFallback key={index}/>)}
        </div>
    );
};

export default loading;