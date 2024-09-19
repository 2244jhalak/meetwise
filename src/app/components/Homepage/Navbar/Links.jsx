import React from 'react';
import NavLink from './NavLink';




const Links = () => {
    const links = [
        {
            path : '/',
            element : 'Home'
        },
        {
            path : '/contact',
            element : 'Contact'
        },
        {
            path : '/about',
            element : 'About Us'
        },
        {
            path : '/login',
            element : 'Login'
        }
    ]
    // const session = true;
    // const isAdmin = true;

    return (
        <div className='flex lg:flex-row flex-col'>
            {
                links.map(link=><NavLink key={link.element} className='pr-16' link={link}></NavLink>)
            }
            {/* {
                session?
                <>
                {isAdmin && 
                    <NavLink className='pr-16' link={{path : '/admin',
                        element : 'Admin'}}></NavLink>
                }
                <button>Logout</button>
            
                </>
                
                :
                
                <NavLink className='pr-16' link={{path : '/login',
                    element : 'Login'}}></NavLink>
                
            } */}
            
        </div>
    );
};

export default Links;