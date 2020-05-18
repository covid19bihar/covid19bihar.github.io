import React from 'react';
import cn from 'classnames';
import style from './PreLoder.module.css';

const PreLoader = () => {
    return ( 
        <>
        <div className={cn(style.outer)}>
            <div className={cn(style.inner)}>
               <h3>Loading...</h3>
            </div>
            </div>
        </>
     );
}
 
export default PreLoader;