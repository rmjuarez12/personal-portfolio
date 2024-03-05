import Heading from "@/components/ui/Heading";
import ProjectBox from "@/components/ui/ProjectBox";

export default function Projects() {
  return (
    <>
      <div className='mb-12'>
        <Heading title='My Projects' subtitle='Programs' showBorder={true} />
      </div>

      <div>
        <ProjectBox
          imageUrl='/static/images/vg-deals-preview.jpg'
          title='Steam Video Game Deals'
          description='In this webapp, you can search for games that are on sale, based on the price range of your choosing.'
          technologies={["ReactJS", "React Redux"]}
          codeURL='https://github.com/rmjuarez12/Steam-Videogame-Deals'
          projectUrl='https://vg-deals.netlify.app/'
        />
      </div>
    </>
  );
}
