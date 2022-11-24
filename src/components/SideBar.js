import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';

export const Sidebar =[
    {
        title: 'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        className:'nav-text'
    },
    {
        title: 'Projects',
        path:'/projects',
        icon:<FaIcons.FaCartPlus />,
        className:'nav-text'
    },
    {
        title: 'Skills',
        path:'/skills',
        icon:<IoIcons.IoMdPeople />,
        className:'nav-text'
    },
    
]