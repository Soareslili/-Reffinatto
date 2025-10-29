
import AboutImg from '../assets/About.png'


const About = () => {
    return (

        <section className="py-24 bg-black relative overflow-hidden">


            <div className="luxury-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-6">
                        <h2 className="font-serif text-4xl md:text-6xl font-bold">
                            Feito à mão <span className="text-primary">cada detalhe</span>
                        </h2>
                        <div className="h-1 w-24 bg-primary" />
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Cada relógio Refinatto é meticulosamente elaborado por mestres relojoeiros,
                            apresentando movimentos automáticos suíços com mais de 200 componentes trabalhando em
                            harmonia perfeita. Vidro de cristal de safira, caixa de aço inoxidável 316L e
                            resistência à água de até 100 metros garante beleza e durabilidade.
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full" />

                                Movimento Automático Suíço
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                Vidro de cristal de safira
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full" />

                                100m resistente à água
                            </li>
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 glow-gold blur-3xl opacity-20" />
                        <img
                            src={AboutImg}
                            alt="Watch Mechanism Details"
                            className="relative z-10 rounded-lg w-full hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About