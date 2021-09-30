import React from 'react';
import $ from 'jquery';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './komponentencss/profil.css';

export default function Profilfun() {
    const closepro = () => {
        $('.profilroot').fadeOut();
    } 
    return(
        <div className="profilroot">
            <div className="creatordes">
                Dein Profil
                <div className="detailclose" onClick={closepro}><IconButton className="closedetail"><CloseIcon/></IconButton></div>
            </div>
            <div className="proinfos">
                <div className="profilpic"></div>
                <p className="profiln">Felix Meier</p>
                <button className="bildbutton">Bild hochladen</button>
                <label className="cformlabel" id="profillabel1">Klasse</label>
                <select className="selectmenuma">
                    <option>Klasse 5</option>
                    <option>Klasse 6</option>
                    <option>Klasse 7</option>
                    <option>Klasse 8</option>
                    <option>Klasse 9</option>
                    <option>Klasse 10</option> 
                    <option>Klasse 11</option>
                    <option>Klasse 12</option>
                    <option>Klasse 13</option>
                </select>
                <label className="cformlabel" id="profillabel2">Meine Stärken</label>
                <input type="text" className="cforminput" placeholder="Stärken..."></input>
                <button className="profilbutton">Speichern</button>
                
            </div>
        </div>
    )
}