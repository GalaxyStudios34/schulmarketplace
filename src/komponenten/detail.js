import React from 'react';
import './komponentencss/detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVial } from '@fortawesome/free-solid-svg-icons';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import $ from 'jquery';
export default function Detail() {
    const closede = () => {
        $('.detailroot').fadeOut('slow')
    }

    const openKalender = () => {
        $('.kalenderroot').fadeIn('slow')
    }
    return (
        <div className="detailroot">
            <div id="detailflex">
                <div className="detailheader">
                    <strong>Chemie</strong>
                    <div className="detailclose" onClick={closede}><IconButton className="closedetail"><CloseIcon/></IconButton></div>
                    <br></br>
                    <span>Max Mustermann</span>
                </div>
                <h2>Informationen</h2>
                <div className="detailtabel">
                    
                    <div className="tabelrow">
                        <p className="detailfirst">Fach</p>
                        <FontAwesomeIcon className="fficon" icon={faVial} />
                        <p className="detailsecond">Chemie</p>
                    </div>
                    <div className="tabelrow">
                        <p className="detailfirst">Klasse</p>
                        <p className="detailsecond">9b</p>
                    </div>
                    <div className="tabelrow">
                        <p className="detailfirst">Für</p>
                        <p className="detailsecond">Klasse: 6-10</p>
                    </div>
                    <div className="tabelrow">
                        <p className="detailfirst">Status</p>
                        <p className="detailsecond">Besetzt</p>
                    </div>
                    <div className="tabelrow">
                        <p className="detailfirst">Preis</p>
                        <p className="detailsecond">30 Euro</p>
                    </div>
                    <div className="tabelrow">
                        <p className="detailfirst">Likes</p>
                        <p className="detailsecond">7</p>
                    </div>
                </div>
                <h2>Beschreibung</h2>
                <div className="detailbeschreibung">
                    <p className="detailtext">Hier gibt es den besten Unterricht überhaupt.
                     Ich gebe in Chemie Hilfe und arbeitete gerne! </p>
                </div>
                <h2>Termin</h2>
                <div className="detailbeschreibung" id="detailkal">
                    <button className="detailbutton" onClick={openKalender}>Kalender öffnen</button>
                </div>
                <h2>Liken</h2>
                <IconButton > 
                    <FavoriteBorderIcon id="favoriteicon" />
                </IconButton>
                <h2>Schreiben</h2>
                <div className="detailbeschreibung">
                    <button className="detailbutton">Schreiben</button>
                </div>
                <div className="langmacher">hi</div>
           
            </div>
        </div>
    )
}