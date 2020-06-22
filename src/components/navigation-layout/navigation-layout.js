import React from 'react';
import { Link } from 'react-router-dom';

import './navigation-layout.css';

export const NavigationLayout = (props)=> {
    
    const { activeLink } = props;

    const navigationList = [
        { title: 'Featured picture', link: '/featured_picture' },
        { title: 'Gallery', link: '/gallery' }
    ];

    return(
        <div className='navigation-layout'>
            <ul className='navigation-list'>
                {navigationList.map((el, index) => {
                    return(<li key={index}>
                        <Link className={el.title===activeLink ? 'active-link' : 'link'} to={el.link}>
                            {el.title}
                        </Link>
                    </li>);
                })}
            </ul>
        </div>
    )
}