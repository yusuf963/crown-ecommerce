import React from 'react';
import CollectionItem from '../collection-item/collection-item'
import './preview-collection.scss';

const CollectionPerview =({title, items})=>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {items
        .filter((item, index)=> index<4)
        .map((item) =>(
            <CollectionItem key={item.indexid} item={item}/>
        ))}
        </div>
    </div>
)


export default CollectionPerview;