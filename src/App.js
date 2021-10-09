//Imports
import React from 'react';
import './App.css';
import './komponenten/komponentencss/angebot.css';
import clsx from 'clsx';
import {  makeStyles, } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import $ from 'jquery';
//Eigene Komponenten
import Suchbox from './komponenten/suchbox';
import Navigationff from './komponenten/navigationff';
import Angebot from './komponenten/angebot';
import Detail from './komponenten/detail';
import Creator from './komponenten/creator';
import Profilfun from './komponenten/profil';
import Kalender from './komponenten/kalender';
//CSS
const drawerWidth = '100%';
const drawerHeight = '55px';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";'
    
  },
  appBar: {
    backgroundColor: '#730039',
    height: drawerHeight,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  SearchIcon: {
    marginLeft: theme.spacing(1),
  },
  drawer: {
    width: 0,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#730039',
    color: '#ffffff',
    
    
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  teachgym: {
    fontSize: '1em',
    boxSizing: 'borderBox', 
  },
}));


export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const [open] = React.useState(false);
  
  const togglesearch = () => {
    $('.nav').fadeOut();
    $('.creator').fadeOut();
    $('.detailroot').fadeOut();
    $('.profilroot').fadeOut();
    $('#first').fadeToggle('slow');
  };

  const sectiononclick = () => {
    $('.detailroot').fadeToggle('slow')
}

  const togglenav = () => {
    $('.creator').fadeOut();
    $('.detailroot').fadeOut();
    $('.profilroot').fadeOut();
    $('#first').fadeOut()
    $('.nav').fadeToggle('slow')
  };

  const navprofil = () => {
    $('#first').fadeOut()
    $('.nav').fadeOut()
    $('.detailroot').fadeOut()
    $('.creator').fadeOut('slow') 
    $('.profilroot').fadeIn('slow')
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

  $('.getWidthButton').click(function(){
    let p = $('.innerht')
    let width = document.body.offsetWidth;
    p.html(width);
    console.log(width);
  })

  
  
  return (
    
        <div className={classes.root}>
      <CssBaseline />
      <AppBar
        id="appbar"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className="tool">
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={togglenav}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            id="navicon"
          >
            <MenuIcon />
          </IconButton>
          <Typography className="teachgym" variant="h5" >
            TeachGym
          </Typography>
          <ul className="navul">
            <li id="linkhome" onclick={navhome}>Home</li>
            <li id="linkprofil" onClick={navprofil}>Profil</li>
            <li id="linkdeinematches">Deine Matches</li>
            <li id="linkgebuchtematches">Gebuchte Matches</li>
            <li id="linkmatcherstellen" onClick={creattog}>Match erstellen</li>
          </ul>
          <IconButton id="searchclicki" aria-label="search" color="inherit" onClick={togglesearch} >
            <SearchIcon
             />
          </IconButton>
          
          
       
        </Toolbar>
      </AppBar>
      
      
      

      <Suchbox /> 
      <Navigationff />
      <Detail />
      <Creator />
      <Profilfun />
      <Kalender />
      <main>
      <div className="getWidth">
        <p className="innerht">0</p>
        <button className="getWidthButton"> Berechnen</button>
      </div>
      <div className="unterteilungangebot1"></div>
      <div className="unterteilungangebotext1">Deine Matches</div>
      <div className="angebotrootsection">
      <Angebot/>
      <Angebot />
      <div className="section" id="angebotdazu3" onClick={sectiononclick}>
            <div className="sectionheader">
                <div className="angebotbild"></div>
                <p className="angebotspanheader">Felix Meier</p>
                <p className="sectionun">Chemie</p>
            </div>
            <div className="sectionbody">
            </div>
            <div className="sectionfooter">
            <button className="sectionbutton">Details</button> 
            </div>
            
        </div> 
      
      
      
      </div>
      <div className="unterteilungangebot2"></div>
      <div className="unterteilungangebotext2">Erstellte Matches</div>
      <div className="angebotrootsection">
      <Angebot />
      <Angebot />
      <div className="section" id="angebotdazu3" onClick={sectiononclick}>
            <div className="sectionheader">
                <div className="angebotbild"></div>
                <p className="angebotspanheader">Felix Meier</p>
                <p className="sectionun">Chemie</p>
            </div>
            <div className="sectionbody">
            </div>
            <div className="sectionfooter">
            <button className="sectionbutton">Details</button> 
            </div>
            
        </div> 
      </div>
      <div className="unterteilungangebot3"></div>
      <div className="unterteilungangebotext3">Vorschläge für dich </div>
      <div className="angebotrootsection" id="sectionbeforefooter">
      <Angebot></Angebot>
      <Angebot></Angebot>
      <div className="section" id="angebotdazu3" onClick={sectiononclick}>
            <div className="sectionheader">
                <div className="angebotbild"></div>
                <p className="angebotspanheader">Felix Meier</p>
                <p className="sectionun">Chemie</p>
            </div>
            <div className="sectionbody">
            </div>
            <div className="sectionfooter">
            <button className="sectionbutton">Details</button> 
            </div>
            
        </div> 
      </div>
      </main>  
      </div>

  )}

      
