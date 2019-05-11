import React from 'react';
import "./Navigation.css"

const Navigation = ({ onRouteChange, onInputChange, onButtonSubmit, isSignedIn, onButtonSearch, onSearchChange }) => {
    if (isSignedIn) {
         return (
            <nav className="bg-light">
                <div className="navbar tl">
                    <div className="links">
                    <ul>
                        <div className="navLinks pl0">
                            <p className="navLeft f4" id="femdelafemme" onClick={() => onRouteChange('home')} >{'Home'}</p>
                        </div>

                        <div className="navLinks pl3">
                            <a className="navLeft f5" id="feminism" href="http://www.realsexism.com/">{'Feminism'}</a>
                        </div>
                            
                        <div className="navLinks pl3">
                            <p className="navLeft f5" onClick={() => onRouteChange('signOut')}>{'Sign Out'}</p>
                        </div>

                    </ul>
                    </div>


                <div className="navLinks">
                    <div className="InputBoxes">
                    <div className='UploadBox tc pa2 br2 dib shadow-5'>
                        <input className='br2 pa2' placeholder={'Add photo link...'} type='text' onChange={onInputChange}/>
                        <button className='br2 grow link ph3 pv2 bg-light-purple' 
                            onClick={onButtonSubmit}> {'Upload'} </button>
                        </div>
                    <div className='SearchBox tc pa2 br2 dib shadow-5'>
                        <input className='br2 pa2' placeholder={'Search for photo...'} type='text' onChange={onSearchChange}/>
                        <button 
                            className='br2 grow link ph3 pv2 bg-light-blue' 
                            onClick={onButtonSearch}
                            id="submitHashtag"
                            > {'Search'} </button>
                        </div>
                        </div>
                    </div>

                </div>
            </nav>
            );
        } else {
            return (
            <nav className="bg-light">
                <div className="navbar tl">
                    <div className="Links">
                    <ul>
                        <div className="navLinks pl0">
                            <p className="navLeft f4" id="femdelafemme" onClick={() => onRouteChange('home')} >{'Home'}</p>
                        </div>

                        <div className="navLinks pl3">
                            <a className="navLeft f5" id="feminism" href="http://www.realsexism.com/">{'Feminism'}</a>
                        </div>

                        <div className="navLinks pl3">
                            <p className="navLeft f5" onClick={() => onRouteChange('signOut')}>{'Sign Out'}</p>
                        </div>

                    </ul>
                    </div>

                    <div className='Create tc pa2 br2 dib ma2 shadow-5 bg-black'>
                        <input className='br2 pa2' placeholder={'Create...'} type='text' onChange={onInputChange}/>
                        <button 
                            className='br2 grow link ph3 pv2 bg-light-purple' 
                            onClick={onButtonSubmit}
                            id="submitLink"
                            > {'Create'} </button>
                        </div>
                    <div className='Search tc pa2 br2 dib ma2 shadow-5 bg-black'>
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
}
 
export default Navigation;