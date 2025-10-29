import Classic from '../assets/Classic.png'
import Luxury from '../assets/Luxury.png'
import Modern from '../assets/Modern.png'

const collections = [
  { 
    title: "Relógio de luxo", 
    description: "Elegância atemporal", 
    image: Luxury 
  },
  { 
    title: "Cronógrafo Moderno", 
    description: "Precisão contemporânea", 
    image: Modern 
  },
  { 
    title: "Edição Clássica", 
    description: "Artesanato patrimonial", 
    image: Classic 
  },
]

const Collection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="luxury-container">
        <div className="grid md:grid-cols-3 gap-10">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:glow-gold cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
         
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

          
              <div className="p-6 text-center">
                <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collection
