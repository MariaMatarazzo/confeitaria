import "./Hero.css"

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h1 className="hero-title">BEM VINDO ao</h1>
                <h2 className="hero-subtitle">Quintiliano´s Cakes</h2>
                <h2 className="hero-phrase"> Nada como um doce caseiro para adoçar o dia!</h2>

                <p className="hero-description">
                    Nossos bolos no pote são feitos com ingredientes selecionados, muito carinho e aquele sabor irresistivel que conquista a cada colherada
                </p>
            </div>

            <div className="hero-img">
                <img src="bolo.png" alt="bolo/torta" />
            </div>
        </section>

    )
}