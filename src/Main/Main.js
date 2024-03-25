import React, { useEffect, useState } from 'react';
import './Main.css';
import play1 from '../assets/playlist/1.jpeg'
import play2 from '../assets/playlist/2.png'
import play3 from '../assets/playlist/3.jpeg'
import play4 from '../assets/playlist/4.jpeg'
import play5 from '../assets/playlist/5.jpeg'
import play6 from '../assets/playlist/6.jpeg'
import play7 from '../assets/playlist/7.jpeg'
import play8 from '../assets/playlist/8.jpeg'
import play9 from '../assets/playlist/9.jpeg'
import play10 from '../assets/playlist/10.jpeg'
import play11 from '../assets/playlist/11.jpeg'
import play12 from '../assets/playlist/12.jpeg'
import play13 from '../assets/playlist/13.jpeg'
import play14 from '../assets/playlist/14.jpeg'
import play15 from '../assets/playlist/15.jpeg'

const Main = () => {
    const [artists, setArtists] = useState([]);
    const [showPlaylists, setShowPlaylists] = useState(true);

    const toggleView = () => {
        setShowPlaylists(!showPlaylists);
    }

    return (
        <div className='main-container'>
        <div className="playlist-container">
        <div id="result-playlists" style={{display: showPlaylists ? 'block' : 'none'}}>
            <div className="playlist">
                <h1 id="greeting">Boas vindas</h1>
                <h2 className="session">Navegar por todas as seções</h2>
            </div>

            
            <div className="offer__scroll-container">
                <div className="offer__list">
                    <section className="offer__list-item">
                        
                        <a href="" className="cards">
                            <div className="cards card1">
                                <img src={play1} alt="" />
                                <span>Boas festas</span>
                            </div>
                        </a>

                        
                        <a href="" className="cards">
                            <div className="cards card2">
                                <img src={play2} alt="" />
                                <span>Feitos para você</span>
                            </div>
                        </a>

                       
                        <a href="" className="cards">
                            <div className="cards card3">
                                <img src={play3} alt="" />
                                <span>Lançamentos</span>
                            </div>
                        </a>

                        
                        <a href="" className="cards">
                            <div className="cards card4">
                                <img src={play4} alt="" />
                                <span>Creators</span>
                            </div>
                        </a>

                        
                        <a href="" className="cards">
                            <div className="cards card5">
                                <img src={play5} alt="" />
                                <span>Para treinar</span>
                            </div>
                        </a>

                        
                        <a href="" className="cards">
                            <div className="cards card6">
                                <img src={play6} alt="" />
                                <span>Podcasts</span>
                            </div>
                        </a>

                        
                        <a href="" className="cards">
                            <div className="cards card7">
                                <img src={play7} alt="" />
                                <span>Sertanejo</span>
                            </div>
                        </a>

                        
                        <a href="" className="cards">
                            <div className="cards card8">
                                <img src={play8} alt="" />
                                <span>Samba e pagode</span>
                            </div>
                        </a>

                        
                        <a href="" className="cards">
                            <div className="cards card9">
                                <img src={play9} alt="" />
                                <span>Funk</span>
                            </div>
                        </a>

                       
                        <a href="" className="cards">
                            <div className="cards card10">
                                <img src={play10} alt="" />
                                <span>MPB</span>
                            </div>
                        </a>

                        
                        <a href="" className="cards">
                            <div className="cards card11">
                                <img src={play11} alt="" />
                                <span>Rock</span>
                            </div>
                        </a>

                        
                        <a href="" className="cards">
                            <div className="cards card12">
                                <img src={play12} alt="" />
                                <span>Hip Hop</span>
                            </div>
                        </a>

                        
                        <a href="" className="cards">
                            <div className="cards card13">
                                <img src={play13} alt="" />
                                <span>Indie</span>
                            </div>
                        </a>

                        
                        <a href="" className="cards">
                            <div className="cards card14">
                                <img src={play14} alt="" />
                                <span>Relax</span>
                            </div>
                        </a>

                        
                        <a href="" className="cards">
                            <div className="cards card15">
                                <img src={play15} alt="" />
                                <span>Música Latina</span>
                            </div>
                        </a>
                    </section>
                </div>
            </div>
        </div>
        <div id="result-artist" className="hidden" style={{ display: showPlaylists ? 'none' : 'block' }}>
            <div className="grid-container">
                {artists.map(artist => (
                    <div key={artist.id} className="artist-card" id="">
                    <div className="card-img">
                        <img src={artist.image} id="artist-img" className="artist-img" />
                        <div className="play">
                            <span className="fa fa-solid fa-play"></span>
                        </div>
                    </div>
                    <div className="card-text">
                        <a title={artist.name} className="vst" href=""></a>
                        <span className="artist-name" id="artist-name">{artist.name}</span>
                        <span className="artist-categorie">Artista</span>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    </div>
    </div>

    )
}

export default Main