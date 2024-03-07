import React from 'react';
import SidebarProps from './SidebarProps';
import { MdGTranslate } from "react-icons/md";
import { BsDisplay } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { CgMenuGridR } from "react-icons/cg";
import { IoText } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function Sidebar() {

    const allData = [
        {
            icon: <BsDisplay className='monitor-icon' />,
            title: 'Bots',

        },
        {
            icon: <MdGTranslate />,
            title: 'Translate',

        },
        {
            icon: <ImStatsDots />,
            title: 'Sentiment',

        },
        {
            icon: <CgMenuGridR className='menu-icon' />,
            title: 'Aspect Base Sentiment',
        },
        {
            icon: <IoText />,
            title: 'Text Analysis',
        },
    ]

    return (
        <>
            <div className='sidebar'>
                <div className='sidebar-title'>HİZMETLERİMİZ</div>

                <div className='sidebar-container'>
                    <NavLink to="/services/bots"><SidebarProps serviceIcon={allData[0].icon} serviceTitle={allData[0].title} /></NavLink>
                    <SidebarProps serviceIcon={allData[1].icon} serviceTitle={allData[1].title} />
                    <SidebarProps serviceIcon={allData[2].icon} serviceTitle={allData[2].title} />
                    <SidebarProps serviceIcon={allData[3].icon} serviceTitle={allData[3].title} />
                    <NavLink to="text-analysis"><SidebarProps serviceIcon={allData[4].icon} serviceTitle={allData[4].title} /></NavLink>
                </div>
            </div>
        </>
    )
}

export default Sidebar;