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
        </header>
        `
    }
}
customElements.define('the-header', TheHeader)

//js kod för att köra footer
class TheFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <ul>
                <li>Kisa Padelcenter</li>
                <li>Sörbäcksvägen 5</li>
                <li>SE-590 38 KISA</li>
            </ul>
            <ul>
                <li><a href="">Instagram</a></li>
                <li><a href="">Facebook</a></li>
                <li><a href="">Privacy Policy</a></li>
            </ul>
            <a class="cta" href="#"><button>Kontakt</button></a>
        </footer>
        `
    }
}
customElements.define('the-footer', TheFooter)