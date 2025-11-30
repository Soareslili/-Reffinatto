import HeroImg from '../assets/Hero-Relogio.png'
import { Button } from './ui/button'
import { Clock } from 'lucide-react'

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* Fundo */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${HeroImg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background"></div>
            </div>


            <div className="luxury-container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">


                <div className="hidden lg:block"></div>


                <div className="text-left lg:text-right space-y-8 animate-fade-in">
                    <div className="flex items-center justify-center lg:justify-end gap-3 mb-6">
                        <Clock className="text-primary w-8 h-8" />
                        <span className="text-sm font-semibold tracking-[0.3em] text-muted-foreground uppercase">Refinatto</span>
                    </div>

                    <h1 className="font-play text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1300"
                    >
                        Reffinatto<br />
                        <span className="text-primary">
                            Redefina a elegância.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground font-play font-light tracking-wide"
                      data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1600"
                    >
                        Coleção de relógios masculinos de luxo
                    </p>

                    <div className="flex items-baseline gap-4 justify-center lg:justify-end">
                        <span className="text-5xl font-serif font-bold text-primary animate-price-bounce">$2,499</span>
                        <span className="text-muted-foreground line-through text-xl">$3,499</span>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <Button variant="hero" size="lg" className="text-lg px-12 py-6 font-play h-auto">
                            Compre agora
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
