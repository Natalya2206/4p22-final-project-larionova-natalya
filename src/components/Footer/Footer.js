import './Footer.css';

function Footer () {
    return(
        <footer className='Footer'>
             <div className='Footer-container'>
                 <div className='Footer-logo'>
                     <img src="https://img.icons8.com/ios-filled/50/null/controller.png" alt="logo" />
                 </div>
                 <div class="Footer-title">
                     <h3>Game-shop</h3>
                 </div>
                 <div className='Footer-text'>
                     <p>Показываем вам видеоигры. В ассортименте представлены известные игровые 
                        предложения от лучших производителей софта.</p>
                 </div>
             </div>
             <div class="Footer-subscription">
                <h4>Подписывайтесь на нас:</h4>
                <div className='Footer-links'>
                     <a href="https://vk.com/" class="Footer-links-vk">Vkontakte</a>
                     <a href="https://web-telegram.ru/" class="Footer-links-telegram">Telegram</a>
                     <a href="https://www.youtube.com/" class="Footer-links-basket">YouTube</a>
                 </div>
             </div>
        </footer>
    )
}

export default Footer;