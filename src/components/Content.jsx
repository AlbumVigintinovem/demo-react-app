import React from 'react'
import Home from './Home'
import Sidebar from './Sidebar'
import classNames from 'classnames';
import { useSiteContext } from '../context/SettingsContext';

const Content = () => {
    const { sidebarIsActive } = useSiteContext();

    return (
        <>
            <Sidebar />
            <div className={classNames({
                'content-area': sidebarIsActive,
                'content-area-expended': sidebarIsActive === false,
            })} >

                <Home />


            </div>
        </>

    )
}

export default Content