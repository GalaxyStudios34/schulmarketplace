import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import $ from 'jquery';


function Suchbox(){
    const seaclose = () => {
      $('.searchroot').fadeOut('slow');
    }
    return (
        <div className="searchroot" id="first">
          <div className="creatordes">
                Suche
                <div className="detailclose" onClick={seaclose}><IconButton className="closedetail"><CloseIcon/></IconButton></div>
            </div>
            <div className="formum">
          <form id="umschliessen">
        <label id="slabela" className="cformlabel">Suchen</label>
        <input id="firstinput" type="text" placeholder="Suche nach Matches" className="cforminput" >
        </input>
        <div className="searchic"> 
          <SearchIcon></SearchIcon> 
        </div>
        <label className="cformlabel" id="slabelb">Kategorie</label>
        <select placeholder="Wähle eine Kategorie" className="cforminput" id="firstselect">
          <option>Deutsch</option>
          <option>Mathematik</option>
          <option>Informatik</option>
          <option>Darstellendes Spiel</option>
          <option>Sport</option>
          <optgroup label="Naturwissenschaften">
          <option>Chemie</option>
          <option>Physik</option>
          <option>Biologie</option>
          </optgroup>
          <optgroup label="Musisch-künstlerisch">
            <option>Musik</option>
            <option>Kunst</option>
          </optgroup> 
          <optgroup label="Fremdsprachen">
            <option>Englisch</option>
            <option>Spanisch</option>
            <option>Französisch</option>
            <option>Latein</option>
          </optgroup>
          <optgroup label="Gesellschaftswissenschaftlicher Schwerpunkt">
            <option>Erdkunde</option>
            <option>Politik</option>
            <option>Geschichte</option>
            <option>Religion</option>
            <option>Werte und Normen</option>
          </optgroup>
          
        </select>
        <label className="cformlabel" id="slabelc">Zurücksetzten</label>
        <button id="firstreset" className="cformbutton" type="reset">Kategorien und Suche leeren</button>
        </form>
        </div>
      </div>
    )
}

export default Suchbox;