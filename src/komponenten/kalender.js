import React from 'react';
import './komponentencss/kalender.css';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import $ from 'jquery';

export default function Kalender() {
    const kalenderclose = () => {
        $('.kalenderroot').fadeOut('slow');
    }
    return (
        <div className="kalenderroot">
            <div className="kalenderdes">
                <strong>Dein Kalender</strong>
                <div className="kalenderclose" onClick={kalenderclose}><IconButton className="closedetail"><CloseIcon/></IconButton></div>
            </div>
            <div className="kalenderum">
            <section className="kalender">
            <div className="kalenderheader">Januar</div>
                <section className="kalenderrow">
                <div className="kalenderitem">30</div>
                <div className="kalenderitem">1</div>
                <div className="kalenderitem">2</div>
                <div className="kalenderitem">3</div>
                <div className="kalenderitem">4</div>
                <div className="kalenderitem">5</div>
                <div className="kalenderitem">6</div>
                </section>
                <section className="kalenderrow">
                <div className="kalenderitem">7</div>
                <div className="kalenderitem">8</div>
                <div className="kalenderitem">9</div>
                <div className="kalenderitem">10</div>
                <div className="kalenderitem">11</div>
                <div className="kalenderitem">12</div>
                <div className="kalenderitem">13</div>
                </section>
                <section className="kalenderrow">
                <div className="kalenderitem">14</div>
                <div className="kalenderitem">15</div>
                <div className="kalenderitem">16</div>
                <div className="kalenderitem">17</div>
                <div className="kalenderitem">18</div>
                <div className="kalenderitem">19</div>
                <div className="kalenderitem">20</div>
                </section>
                <section className="kalenderrow">
                <div className="kalenderitem">21</div>
                <div className="kalenderitem">22</div>
                <div className="kalenderitem">23</div>
                <div className="kalenderitem">24</div>
                <div className="kalenderitem">25</div>
                <div className="kalenderitem">26</div>
                <div className="kalenderitem">27</div>
                </section>
                <section className="kalenderrow">
                <div className="kalenderitem">28</div>
                <div className="kalenderitem">29</div>
                <div className="kalenderitem">30</div>
                <div className="kalenderitem">31</div>
                <div className="kalenderitem">1</div>
                <div className="kalenderitem">2</div>
                <div className="kalenderitem">3</div>
                </section>
            </section>
            <form className="kalendereintrag">
                <div className="kalenderheader">Eintrag erstellen</div>
                <select id="kalenderfirst" className="selectmenuma">
                    <option value="Frei">1</option>
                    <option value="Besetzt">2</option>
                    <option value="nichterreich">3</option>
                </select>
                <input id="kalendersecond" type="text" placeholder="Uhrzeit" className="cforminput" ></input>
                <input id="kalenderthird"  type="text" placeholder="Beschreibung" className="cforminput"></input>
                <button type="submit" className="kalenderformbutton">Erstellen</button>
            </form>
            <section className="kalendereinträge">
                <div className="kalenderheader">Einträge</div>
            </section>
            </div>
        </div>
    )
}