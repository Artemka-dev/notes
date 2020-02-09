import React from "react";

import { TransitionGroup, CSSTransition } from "react-transition-group";

function Search({ changeText }) {
    const [searching, setSearching] = React.useState(false);

    return(
        <TransitionGroup component='div'>
                <div className="search">
                    {searching ? 
                        <CSSTransition in={searching} classNames={"search"} timeout={1000} unmountOnExit mountOnEnter>
                            <input onBlur={() => setSearching(false)} 
                                    type="text" placeholder="Поиск заметок" 
                                    autoFocus={true} className="searching" onChange={changeText} />
                        </CSSTransition>
                    : <button className="search-button" onClick={() => setSearching(true)}>Поиск заметок</button>}
                </div>
        </TransitionGroup>
    );
}

export default Search;