import Heading from "@/components/ui/Heading";
import ProjectBox from "@/components/ui/ProjectBox";

export const metadata = {
  title: "Richard Rodriguez Portfolio | Projects",
};

export default function Projects() {
  return (
    <>
      <div className='mb-12'>
        <Heading title='My Projects' subtitle='Programs' showBorder={true} />
      </div>

      <div>
        <ProjectBox
          className='mb-6'
          imageUrl='/static/images/vg-deals-preview.jpg'
          title='Steam Video Game Deals'
          description='In this webapp, you can search for games that are on sale, based on the price range of your choosing.'
          technologies={["ReactJS", "React Redux", "JavaScript", "JSON"]}
          codeURL='https://github.com/rmjuarez12/Steam-Videogame-Deals'
          projectUrl='https://vg-deals.netlify.app/'
        />

        <ProjectBox
          imageUrl='/static/images/react-photo-nasa.jpg'
          title='NASA Photo of the day'
          description="This is a webapp that displays a photo from NASA's API. You can cycle through the days and get the photo of that day!"
          technologies={["ReactJS", "JSON", "JavaScript"]}
          codeURL='https://github.com/rmjuarez12/nasa-photo-of-the-day/tree/Richard-Rodriguez'
          projectUrl='https://react-photo-nasa-richard.netlify.app/'
        />

        <ProjectBox
          className='mb-6'
          imageUrl='/static/images/pokedex-og-150-app.jpg'
          title='Pokedex'
          description='This is a webapp that showcases the original 150 pokemon, with a Pokedex when you check their info. Project was done as learning experience on React.'
          technologies={["ReactJS", "JSON", "JavaScript"]}
          codeURL='https://github.com/rmjuarez12/web-sprint-challenge-intro-to-react/tree/Richard-Rodriguez'
          projectUrl='https://pokedex-og-150.netlify.app/'
        />

        <ProjectBox
          className='mb-6'
          imageUrl='/static/images/invaders-ex.jpg'
          title='Space Invaders EX Game'
          description='This is a videogame I created using Unity3D game engine.'
          technologies={["Unity3D", "C#"]}
          projectUrl='https://rmjuarez12.itch.io/invaders-ex'
        />

        <ProjectBox
          className='mb-6'
          imageUrl='/static/images/wavykickzco.jpg'
          title='Wavy Kickz Website'
          description='This is a Shopify website, with a fully custom-made theme. The theme was built using Shopify Liquid language, based off of a PSD mockup.'
          technologies={["Shopify", "Liquid", "JavaScript", "jQuery"]}
          projectUrl='https://wavykickzco.com/'
        />

        <ProjectBox
          className='mb-6'
          imageUrl='/static/images/thesneakeratticllc.jpg'
          title='The Sneaker Attic'
          description='This is a Shopify website, with a fully custom-made theme. The theme was built using Shopify Liquid language.'
          technologies={["Shopify", "Liquid", "JavaScript", "jQuery"]}
          projectUrl='https://thesneakeratticllc.com/'
        />
      </div>
    </>
  );
}
