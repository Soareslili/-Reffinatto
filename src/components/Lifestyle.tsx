import EstiloImg from "../assets/Estilo.png"

import { Button } from "./ui/button"


const Lifestyle = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">


            <div className="luxury-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    <div className="relative">
                        <div className="absolute inset-0 glow-gold blur-3xl opacity-20" />
                        <img
                            src={EstiloImg}
                            alt="Watch Mechanism Details"
                            className="relative z-10 rounded-lg w-full hover:scale-105 transition-transform duration-500"
                        />
                    </div>



                    <div className="space-y-6">
                        <h2 className="font-serif text-4xl md:text-6xl font-bold"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                        >
                            Luxo não é uma opção  <span className="text-primary">é uma declaração.</span>
                        </h2>
                        <div className="h-1 w-24 bg-primary"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                        />
                        <p className="text-lg text-muted-foreground leading-relaxed"
                          data-aos="fade-right"
                            data-aos-duration="1600"
                        >

                            Mais do que um relógio, GetTime representa um compromisso com a excelência, precisão e estilo atemporal. Usado por quem entende que o verdadeiro luxo está nos detalhes.
                        </p>


                        <div className="flex justify-center lg:justify-start mt-6 ">
                            <Button variant="hero" size="lg" className="text-lg px-12 cursor-pointer py-6 font-play h-auto"
                           
                            >
                                Explore Coleções
                            </Button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}


export default Lifestyle