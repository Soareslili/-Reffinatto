
import AboutImg from '../assets/About.png'


const specs = [
    "Movimentos Automáticos Suíços",
    "Vidro de cristal de safira",
    "100m resistente à água"
]

const About = () => {
    return (

        <section id='sobre' className="py-24 bg-black relative overflow-hidden">


            <div className="luxury-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-6">
                        <h2 className="font-serif text-4xl md:text-6xl font-bold"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                        >
                            Feito à mão <span className="text-primary">cada detalhe</span>
                        </h2>
                        <div className="h-1 w-24 bg-primary"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                        />
                        <p className="text-lg text-muted-foreground leading-relaxed"
                            data-aos="fade-right"
                            data-aos-duration="1800"
                        >
                            Cada relógio Refinatto é meticulosamente elaborado por mestres relojoeiros,
                            apresentando movimentos automáticos suíços com mais de 200 componentes trabalhando em
                            harmonia perfeita. Vidro de cristal de safira, caixa de aço inoxidável 316L e
                            resistência à água de até 100 metros garante beleza e durabilidade.
                        </p>

                        <ul className='space-y-3 text-muted-foreground'>
                            {specs.map((item, index) => (
                                <li
                                    key={index}
                                    className='flex items-center gap-8'
                                    data-aos="fade-right"
                                    data-aos-delay={index * 300}
                                    data-aos-duration="2000"
                                >
                                    <div className='w-2 h-2 bg-primary rounded-full' />
                                    {item}

                                </li>
                            ))}

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