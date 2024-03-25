import React from 'react';
import './Footer.css';


const Footer = () => {
    return(
        <footer>
        <div className="footer">
            <div className="footer__texto">
                <p>TESTAR O PREMIUM DE GRAÇA</p>
                <p>Inscreva-se para curtir música limitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
            </div>
            <div className="footer__botao">
                <button>Inscreva-se grátis</button>
            </div>
        </div>
    </footer>
    ) 
}

export default Footer;