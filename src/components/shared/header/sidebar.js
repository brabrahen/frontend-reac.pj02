import React from 'react'
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";

export const sidebarDados = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Cadastro',
        path: '/add',
        icon: <BiIcons.BiNotepad />,
        cName: 'nav-text'
    },

]