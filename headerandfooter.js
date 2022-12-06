//js kod för att köra headern
class TheHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <a href="index.html">
        <img src="images/logo2.png" class="logo"  alt="logo" height="50" width="50">
            </a>
            <nav>
            <a class="burger-nav"></a>
                <ul class="nav">
                    <li><a href="bokning.html">Bokning</a></li>
                    <li><a href="banor.html">Banor</a></li>
                    <li><a href="omkl.html">Omklädningsrum</a></li>
                    <li><a href="#">Varuautomat</a></li>
                </ul>
            </nav>
            <a class="cta" href="#"><button>Kontakt</button></a>
        </header>
        `
    }
}
customElements.define('the-header', TheHeader)