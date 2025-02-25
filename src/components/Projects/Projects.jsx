import React from 'react'
import Project from '../Project/Project'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center gap-5 ml-6 mr-6 place-items-center sm:ml-6 sm:mr-6 mt-10 '>
        <h1 className='text-3xl mb-4 text-gray-300 text-center'>Proyectos</h1>
        <div className='flex flex-col  justify-center place-content-center gap-5 lg:flex-row md:gap-5 '>
            <Project backgroundColor={'bg-green-600'} introduction={'Landing de Startup de moda y blockchain sostenible'} image={'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740423008/qardrobe_preview_edplqm.png'} tools={['Figma', 'Framer']} title={'Qardrobe'} description={'Qardrobe es una plataforma que revoluciona la moda sostenible a través de blockchain, permitiendo rastrear el origen, materiales y procesos de fabricación de cada prenda. Con un sistema seguro e inmutable, garantizamos transparencia total para consumidores y marcas, promoviendo decisiones de compra más conscientes.'} hasGithub={'hidden'} webLink={'https://www.qardrobe.com/'} id={'qardrobe'}/>
            <Project backgroundColor={'bg-gray-500'} introduction={'Aplicación web de contraste de color'} image={'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740502941/colorease_gwjzop.png'} title={'ColorEase'} description={'ColorEase es una herramienta diseñada para ayudar a desarrolladores y diseñadores a garantizar la accesibilidad visual en sus proyectos mediante la verificación del contraste de color 🎨. El sitio web permite a los usuarios comprobar paletas de colores personalizadas y verificar si cumplen con los estándares WCAG (Pautas de Accesibilidad para el Contenido Web).'} tools={['React', 'JavaScript', 'Bootstrap', 'Figma', 'Git', 'Github', 'Vercel', 'Trello']} githubLink={'https://github.com/LozzDev/ColorEase'} webLink={'https://color-ease.vercel.app/'} id={'color-ease'}/>
        </div>
        <div className='flex flex-col justify-center gap-5 lg:flex-row md:gap-5 '>
            <Project backgroundColor={'bg-red-600'} introduction={'Wheel of doom interactivo'} image={'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740522452/eyeofthedoom_fwngwe.png'} tools={['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Trello', 'Vercel', 'Figma']} title={'Eye of the Doom'} description={'Eye of the Doom es un juego de supervivencia donde un ojo cósmico decide el destino de los astronautas atrapados en su letal mirada. Los jugadores solo pueden esperar mientras el ojo dispara rayos al azar, eliminando uno por uno. La tensión aumenta con cada disparo, hasta que solo queda un superviviente, el último en desafiar el destino en esta lotería cósmica.'} githubLink={'https://github.com/LozzDev/EyeOfTheDoom'}webLink={'https://eye-of-the-doom.vercel.app/'} id={'eye-of-the-doom'}/>
            <Project backgroundColor={'bg-emerald-800'} introduction={'App Fitness con Guia de ejercicios'} image={'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740523047/yourgainz_hrcakl.png'} tools={['Laravel', 'Blade', 'PHP', 'JavaScript', 'Git', 'GitHub', 'Trello', 'Vercel', 'Figma']} title={'Your Gainz (En progreso)'} description={'YourGainz es una app de fitness diseñada para ayudar a los usuarios a mejorar su entrenamiento a través de planes personalizados, cálculo de IMC, ejercicios animados y rutinas. Desarrollada con Laravel y React, ofrece una experiencia dinámica e intuitiva para seguir progresos y alcanzar metas de manera motivadora.'} githubLink={'https://github.com/Nando218/YourGainz/tree/dev'} hasWeb={'hidden'} id={'your-gainz'}/>
            
        </div>
        <div className='flex flex-col justify-center gap-5 lg:flex-row md:gap-5 '>
            <Project backgroundColor={'bg-gray-50'} introduction={'Pagina web de Hotel con sistema de reservas funcional'} image={'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740523562/magnolia_cet0f0.png'} tools={['React', 'CSS', 'JavaScript','Bootstrap', 'Git', 'GitHub', 'Trello', 'Vercel', 'Figma']} title={'Hotel Magnolia'} description={'Hotel Magnolia es una plataforma de reservas hoteleras que permite a los usuarios encontrar y reservar habitaciones de forma sencilla. Con un backend simulado en JSON Server y un frontend en React, ofrece una experiencia fluida, intuitiva y eficiente para gestionar estancias con facilidad.'} githubLink={'https://github.com/Bimai6/Magnolia-Hotels/tree/main'} hasWeb={'hidden'} id={'magnolia-hotel'}/>
            <Project backgroundColor={'bg-pink-500'} introduction={'Mini proyectos individuales y colaborativos'} image={'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740524378/miniProjects_shbuq2.png'} tools={['React', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Trello', 'Vercel', 'Figma', 'Bootstrap']} title={'Mini Proyectos: Tetris, To-do list, Cartelera estilo Dragon ball, Landing de empresa ficticia, Tres en raya, Escape room'} description={'Proyectos que he ido realizando a lo largo de mi formación como desarrollador web en el grado superior de Desarrollo de Aplicaciones Web, dentro de mi perfil en GitHub se encuentran como repositorios dónde se podrán identificar facilmente con los nombres indicados en esta tarjeta.'} githubLink={'https://github.com/LozzDev?tab=repositories'} hasWeb={'hidden'} id={'mini-projects'}/>
            
        </div>
        
    </div>
  )
}

export default Projects