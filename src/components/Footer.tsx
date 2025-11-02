import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock } from 'lucide-react';





const Footer = () => {
    const socialLinks = [
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
    ];

    const quickLinks = [
        { name: 'Sobre', href: '#about' },
        { name: 'Galeria', href: '#gallery' },
        { name: 'Depoimentos', href: '#testimonials' },
        { name: 'Contato', href: '#contact' },
       
    ];

   

    return (
        <footer id='contato' className="bg-[#0B0C10] border-t border-gray-600">
            <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-20 gap-8 sm:gap-10 space-y-8 sm:space-y-0">
                    <motion.div
                        className="md:col-span-1 flex flex-col items-center md:items-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <a href="#hero" className=" flex gap-2 text-2xl font-bold mb-8">
                            <Clock className="text-accent" size={32} />
                            <span className="text-foreground font-play">Refinatto</span>
                        </a>
                        <p className="font-inter text-white mb-6 text-center md:text-left">
                            Como o site Reffinatto tem uma estética de luxo masculino, design sofisticado e tom elegante, posso reformular o texto que você trouxe para refletir o conceito de exclusividade, precisão e estilo atemporal — mantendo a mesma estrutura poética e envolvente, mas adaptada ao tema dos relógios de luxo.                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    className="w-10 h-10 bg-[#14181D] border border-[#E5E7EB] rounded-full flex items-center justify-center text-[#C8A24A] hover:text-primary hover:bg-primary/10 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-marcellus text-lg font-bold text-white mb-6 text-center md:text-left ml-40">
                            Links Rápidos
                        </h4>
                        <ul className="space-y-3 text-center md:text-left ml-40">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="font-inter text-white hover:text-[#C7A569] transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-marcellus text-lg font-bold text-white mb-6 text-center md:text-left">
                            Contato
                        </h4>
                        <div className="space-y-4 text-center md:text-left">
                            <div className="flex items-start gap-3 justify-center md:justify-start">
                                <MapPin className="w-5 h-5 text-[#C7A569] mt-0.5 flex-shrink-0" />
                                <span className="font-inter text-white">
                                    Rua das Flores, 123<br />
                                    Vila Madalena, São Paulo
                                </span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Phone className="w-5 h-5 text-[#C7A569]" />
                                <span className="font-inter text-white">
                                    (11) 99999-9999
                                </span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Mail className="w-5 h-5 text-[#C7A569]" />
                                <span className="font-inter text-white">
                                    contato@kurosushi.com
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        
                       
                    </motion.div>
                </div>

                <motion.div
                    className="border-t border-gray-600 pt-8 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center">
                        <h4 className="font-marcellus text-xl font-bold text-[#C7A569] mb-4">
                            Entre em Contato
                        </h4>
                        <p className="font-inter text-white mb-6 max-w-md mx-auto">
                          Conhaça nossas coleções de relógios.
                        </p>
                        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                className="flex-1 px-4 py-3 bg-secondary border border-[#C7A569] rounded-lg font-inter text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <a

                                className="px-6 py-3 bg-[#C7A569] text-primary-foreground cursor-pointer rounded-lg font-inter font-medium hover:bg-black hover:border border-[#C7A569] hover:text-[#C7A569] transition-colors w-full sm:w-auto"
                            >
                                Inscrever
                            </a>
                        </div>
                    </div>
                </motion.div>

                <div className="border-t border-gray-600 pt-8 mt-8 text-center">
                    <p className="font-inter text-white">
                        © 2025 Studio Ale Photography. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;