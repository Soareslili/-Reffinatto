import { Menu, X, Clock } from "lucide-react"
import { useState } from "react"
import { Button } from "../components/ui/button"


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    }

    return (

        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm ">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    
                    <a href="#hero" className=" flex gap-2 text-2xl font-bold">
                        <Clock className="text-accent" size={32} />
                        <span className="text-foreground font-play">Refinatto</span>
                    </a>


                    <div className="hidden md:flex items-center gap-8 font-play ">
                        <button
                            onClick={() => scrollToSection("sobre")}
                            className="text-foreground cursor-pointer hover:text-accent transition-colors"
                        >
                            Sobre
                        </button>
                        <button
                            onClick={() => scrollToSection("galeria")}
                            className="text-foreground cursor-pointer hover:text-accent transition-colors"
                        >
                            Galeria
                        </button>
                        
                        <button
                            onClick={() => scrollToSection("depoimentos")}
                            className="text-foreground cursor-pointer hover:text-accent transition-colors"
                        >
                            Depoimentos
                        </button>
                        <button
                            onClick={() => scrollToSection("contato")}
                            className="text-foreground cursor-pointer hover:text-accent transition-colors"
                        >
                            Contato
                        </button>
                        <Button onClick={() => scrollToSection("contato")} className="neon-border hover-glow cursor-pointer">
                          Compre agora
                        </Button>
                    </div>


                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>


                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
                        <button
                            onClick={() => scrollToSection("treinos")}
                            className="text-foreground hover:text-accent transition-colors text-left"
                        >
                          Sobre
                        </button>
                        <button
                            onClick={() => scrollToSection("sobre")}
                            className="text-foreground hover:text-accent transition-colors text-left"
                        >
                           Galeria
                        </button>
                        
                        <button
                            onClick={() => scrollToSection("depoimentos")}
                            className="text-foreground hover:text-accent transition-colors text-left"
                        >
                            Depoimentos
                        </button>
                        <button
                            onClick={() => scrollToSection("contato")}
                            className="text-foreground hover:text-accent transition-colors text-left"
                        >
                            Contato
                        </button>
                        <Button onClick={() => scrollToSection("contato")} className="neon-border hover-glow w-full">
                           Compre agora
                        </Button>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;