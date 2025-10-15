import React, { useEffect } from 'react';
import UserProfile from './UserProfile';
import { useUser } from '../Contexts/UserContext';

const Sidebar: React.FC = () => {
    
    return (
        <aside>
            <UserProfile />
            </aside>
    );
};

export default Sidebar;
