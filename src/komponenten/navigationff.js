import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import {  useTheme } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import ContactsIcon from '@material-ui/icons/Contacts';
import $ from 'jquery';
import './komponentencss/navigationff.css';

export default function Navigationff() {

    const theme = useTheme();
    const togglenav = () => {
      $('.profilroot').fadeOut()
      $('.detailroot').fadeOut()
      $('.creator').fadeOut('slow') 
        $('#first').fadeOut()
        $('.nav').fadeToggle('slow')
    }
    const navhome = () => {
      $('.profilroot').fadeOut()
      $('#first').fadeOut()
      $('.detailroot').fadeOut()
      $('.creator').fadeOut('slow') 
      $('.nav').fadeOut('slow')
      window.location.href="#appbar"
    }
    const creattog = () => {
      $('.profilroot').fadeOut()
      $('#first').fadeOut()
      $('.nav').fadeOut()
      $('.detailroot').fadeOut()
      $('.creator').fadeIn('slow') 
    }
    const navprofil = () => {
      $('#first').fadeOut()
      $('.nav').fadeOut()
      $('.detailroot').fadeOut()
      $('.creator').fadeOut('slow') 
      $('.profilroot').fadeIn('slow')
    }
 
      return (
    <nav
        className='nav'  
      >
        <div className="drawerheader">
          <span id="navi">Navigation</span>
          <IconButton onClick={togglenav} className="clonav">
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem className="schnell" onClick={navhome}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
              <ListItemText>Home</ListItemText>
          </ListItem>    
          <ListItem className="schnell" onClick={navprofil}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
              <ListItemText>Profil</ListItemText>
          </ListItem>    
          <ListItem className="schnell">
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
              <ListItemText>Deine Matches</ListItemText>
          </ListItem>
          <ListItem className="schnell">
            <ListItemIcon>
              <ContactsIcon />
            </ListItemIcon>
              <ListItemText>Gebuchte Matches</ListItemText>
          </ListItem>
          <ListItem className="schnell" onClick={creattog}>
            <ListItemIcon>
              <ContactsIcon />
            </ListItemIcon>
              <ListItemText>Match erstellen</ListItemText>
          </ListItem>       
        </List>
        <Divider />  
      </nav>
      )     
}