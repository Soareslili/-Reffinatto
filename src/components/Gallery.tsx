 
 import watch1 from '../assets/watch1.png';
    import watch2 from '../assets/watch2.png';
    import watch3 from '../assets/watch3.png';
    import watch4 from '../assets/watch4.png';
    import watch5 from '../assets/watch5.png';
    import watch6 from '../assets/watch6.png';




 
 
 const featuredWatches = [
    { name: "Midnight Chrono", price: "$2,499", image: watch1 },
    { name: "Ocean Blue", price: "$2,899", image: watch2 },
    { name: "Classic Gold", price: "$3,499", image: watch3 },
    { name: "Rose Elite", price: "$3,199", image: watch4 },
    { name: "Sport Silver", price: "$2,699", image: watch5 },
    { name: "Heritage Brown", price: "$2,799", image: watch6 },
  ];


const Gallery = () => {
    return(
        <section id='galeria' className="py-24 bg-navy-dark">
        <div className="luxury-container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-play text-4xl md:text-6xl font-bold">Coleção em destaque</h2>
            <div className="h-1 w-24 bg-primary mx-auto" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWatches.map((watch, index) => (
              <div 
                key={index}
                className="group relative bg-card rounded-lg overflow-hidden hover:glow-gold transition-all duration-300 cursor-pointer"
              
                data-aos="zoom-in"
                data-aos-delay={index * 300}
                data-aos-duration="1200"
              
              >
                <div className="aspect-square bg-black flex items-center justify-center p-8 overflow-hidden">
                  <img 
                    src={watch.image} 
                    alt={watch.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold mb-2">{watch.name}</h3>
                  <p className="text-primary text-2xl font-bold">{watch.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Gallery;