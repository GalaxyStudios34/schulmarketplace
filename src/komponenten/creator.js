import React from 'react';
import $ from 'jquery';
import './komponentencss/creator.css';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
export default function Creator(){
    const closecre = () => {
        $('.creator').fadeOut();
    }


    return(
        <div className="creator"> 
            <div className="creatordes">
                Erstelle ein neues Angebot
                <div className="detailclose " onClick={closecre}><IconButton className="closedetail"><CloseIcon/></IconButton></div>
            </div>
            <form className="creatorcenter">
                <ArrowDropDownIcon className="dropi"/>
                <label className="cformlabel" htmlFor="Deutsch">Fach</label>
                <select className="selectmenuma">
                    <option value="Deutsch">Deutsch</option>
                    <option value="Mathe">Mathe</option>
                    <option value="Englisch">Englisch</option>
                    <option value="Darstellendes Spiel">Darstellendes Spiel</option>
                </select>
                <label id="cformsecond" className="cformlabel" htmlFor="cformklasse">Klasse</label>
                <div className="cformdiv" id="cformklasse">9b</div>
                <label id="cformthird" className="cformlabel">Für welche Klasse</label>
                <input type="text" className="cforminput" placeholder="Z.B. 6-10"></input>
                <label id="cformfourth" className="cformlabel">Status</label>
                <select className="selectmenuma"> 
                    <option value="Frei">Frei</option>
                    <option value="Besetzt">Besetzt</option>
                    <option value="nichterreich">Nicht erreichbar</option>
                </select>
                <label id="cformfifth" className="cformlabel">Preis</label>
                <input type="number" className="cforminput" placeholder="Preis in Euro"></input>
                <div className="cformbuttong">
                <button id="cformbuttonone" className="cformbutton" type="submit">Erstellen</button>
                <button id="cformbuttontwo" className="cformbutton" type="reset">Zurücksetzten</button>
                </div>
            </form>

        </div>
    )
}