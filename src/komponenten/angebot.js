import React from 'react';
import './komponentencss/angebot.css';
import $ from 'jquery';
export default function Angebot() {
    const sectiononclick = () => {
        $('.detailroot').fadeToggle('slow')
    }
    
    return(
        <div className="section" onClick={sectiononclick}>
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
    )
}