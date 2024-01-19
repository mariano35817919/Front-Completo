import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import imagen1 from "../Assets/imagenes/fondo/fodo pokebola.jpg"
import imagen2 from "../Assets/imagenes/carruzel/imagen hd 2.jpg"
import imagen3 from "../Assets/imagenes/carruzel/imagen hd 3.jpg"
import '../CSS/Home.css';

import imagen4 from "../Assets/imagenes/home/afueraPoquemon.jpeg"

import imagen5 from "../Assets/imagenes/home/1-Noticias poquemon.jpg"
import imagen6 from "../Assets/imagenes/home/2-Torneo Pokemon.jpg"
import imagen7 from "../Assets/imagenes/home/3-Historia pokemon.jpg"

import Image from 'react-bootstrap/Image';

function Home() {
    return (

        <>

            <header>
                <h1>POKÉMON TRAINER</h1>
            </header>


            <section>
                <article>
                    <Image src={imagen4} fluid className="border border-dark "/>
                    <p>Explora un emocionante universo lleno de criaturas asombrosas y desafíos apasionantes.</p>
                </article>
                    

                <aside>
                    <h2 className='segundo'>Un mundo increíble</h2>
                    <p>Bienvenido/a al emocionante mundo de Pokémon, donde los sueños se hacen realidad y la aventura nunca termina. Mi nombre es Ash Ketchum, y estoy emocionado de invitarte a un viaje inolvidable.

                        Todo comenzó cuando decidí convertirme en un Maestro Pokémon. Mi sueño siempre fue convertirme en el mejor entrenador, ¡y estoy seguro de que tú también puedes lograrlo! Juntos, enfrentaremos gimnasios, exploraremos regiones asombrosas y capturaremos Pokémon increíbles.

                        Recuerda, la clave está en la amistad con tus Pokémon. A lo largo de mi viaje, he conocido a compañeros leales como Pikachu, Bulbasaur, Charizard y muchos más. Cada Pokémon tiene su personalidad única y habilidades especiales, y estoy seguro de que encontrarás a tu propio equipo increíble.

                        No todo será fácil; enfrentaremos desafíos, conoceremos a rivales fuertes y nos embarcaremos en una búsqueda para convertirnos en campeones de la Liga Pokémon. Pero ten en cuenta que la verdadera victoria está en disfrutar del viaje y crear lazos duraderos con tus Pokémon.

                        Así que, ¿estás listo/a para convertirte en un Pokémon Trainer legendario? ¡Prepárate para la emoción, la diversión y las sorpresas que el mundo Pokémon tiene reservadas para nosotros!

                        ¡Hagamos historia juntos!</p>
                </aside>
            </section>


            <Carousel className='container'>
                <Carousel.Item interval={1000}>
                    <img text="First slide" src={imagen2} className='Carruzel' alt='entrenadores peleando' />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img text="Second slide" src={imagen1} className='Carruzel' alt='poquebola' />
                </Carousel.Item>
                <Carousel.Item>
                    <img text="Third slide" src={imagen3} className='Carruzel' alt='entrenador con poquemon bajo la lluvia' />
                </Carousel.Item>
            </Carousel>


            








            <div className="padre">
                <div className="hijo">
                    <img src={imagen5} alt="Noticia" className="imagen" />
                    <h3 className='parrafo'>Noticias</h3>
                    <p className='parrafo'>Mantente al tanto de las últimas novedades en el mundo Pokémon, donde las noticias giran en torno a nuevos descubrimientos, eventos emocionantes y desafíos inesperados. Desde el lanzamiento de nuevos juegos y películas hasta eventos en el mundo real y actualizaciones en la Liga Pokémon.</p>
                </div>

                <div className="hijo">
                    <img src={imagen6} alt="Torneos" className="imagen" />
                    <h3 className='parrafo'>Torneos</h3>
                    <p className='parrafo'>En los campos de batalla Pokémon, los entrenadores de todo el mundo se enfrentan en emocionantes torneos para demostrar sus habilidades y estrategias. Desde la Liga Pokémon regional hasta torneos internacionales, los competidores despliegan a sus Pokémon en intensas batallas. Cada torneo es una oportunidad para destacar, aprender de otros entrenadores y aspirar a la gloria de convertirse en el campeón indiscutible. </p>
                </div>

                <div className="hijo">
                    <img src={imagen7} alt="Historia pokemon" className="imagen" />
                    <h3 className='parrafo'>Historia</h3>
                    <p className='parrafo'>En el vasto universo de Pokémon, la historia se teje con los lazos inquebrantables entre entrenadores y sus adorados compañeros Pokémon. Desde los primeros días en Kanto hasta las tierras lejanas de Galar, los entrenadores han forjado amistades duraderas, desafiado gimnasios y enfrentado a poderosos rivales.</p>
                </div>
            </div>
        </>
    );
}


export default Home;






