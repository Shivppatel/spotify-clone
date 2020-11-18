import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();

    return (
        <div className='sidebar'>
            <img className="sidebar__logo" src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png' alt='spotify logo'/>
            < SidebarOption title="Home" Icon={ HomeIcon }/>
            < SidebarOption title="Search" Icon={ SearchIcon }/>
            < SidebarOption title="Your Library" Icon={ LibraryMusicIcon }/>
            <br/>
            <stong className="sidebar__title">PLAYLISTS</stong>
            < hr/>
            {playlists?.items?.map( playlist=> (
                <SidebarOption title={playlist.name}/>
                ))}
        </div>
    )
}

export default Sidebar
