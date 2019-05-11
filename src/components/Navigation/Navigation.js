import React from 'react';
import "./Navigation.css"

const Navigation = ({ onRouteChange, onInputChange, onButtonSubmit, isSignedIn, onButtonSearch, onSearchChange }) => {
         return (
            <nav className="bg-light">
                <div className="navbar tl">
                    <div className="Links">
                    <ul>
                        <div className="navLinks">
                            <a className="navCenter f4 pa3" id="feminism" href="http://www.realsexism.com/">{'Feminism'}</a>
                        </div>

                        <div className="navLinks">
                            <p className="navCenter f3 pa3" id="femdelafemme" onClick={() => onRouteChange('home')} >{'Home'}</p>
                        </div>

                        <div className="navLinks">
                            <p className="navCenter f4 pa3" onClick={() => onRouteChange('signOut')}>{'Sign Out'}</p>
                        </div>

                    </ul>
                    </div>

                    <div className='Create tc pa2 dib shadow-5'>
                        <input className='br2 pa2' placeholder={'Create...'} type='text' onChange={onInputChange}/>
                        <button 
                            className='br2 grow link ph3 pv2 bg-light-purple' 
                            onClick={onButtonSubmit}
                            id="submitLink"
                            > {'Create'} </button>
                        </div>
                    <div className='Search tc pa2 dib shadow-5'>
                        <input className='br2 pa2' placeholder={'Search...'} type='text' onChange={onSearchChange}/>
                        <button 
                            className='br2 grow link ph3 pv2 bg-light-purple' 
                            onClick={onButtonSearch}
                            id="submitHashtag"
                            > {'Search'} </button>
                        </div>
                </div>
            </nav>
         );   
}
 
export default Navigation;