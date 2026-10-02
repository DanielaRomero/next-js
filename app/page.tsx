import SkillCategory from "@/app/ui/land-page/skill-category";
import ProjectCard from "@/app/ui/land-page/project-card";
import SectionIntro from "@/app/ui/land-page/section-intro";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-10 flex flex-col justify-center gap-6 border rounded-lg bg-gray-100 p-6 md:mt-20 md:flex-row md:gap-20 md:p-20">
        <SectionIntro 
          heading="Skills & Tools"
          title="What I use to build solutions"
          description="These are some of the technologies I use to build web applications."
          linkLabel="View all on my GitHub"
          linkUrl="#"
        />
        <div className="flex flex-col flex-1 gap-6 md:flex-row md:gap-20 justify-center">
          <SkillCategory
            title="Front End"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z" />
              </svg>
            }
            skills={[
              "HTML5",
              "CSS3",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
            ]}
          />
          <SkillCategory
            title="Back End"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M120-160v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80-440v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80 280v-160h720v160H120Zm80-40h80v-80h-80v80Z" />
              </svg>
            }
            skills={["Java", "Spring Boot", "Node.js", "C#", "Python"]}
          ></SkillCategory>
          <SkillCategory
            title="Platforms and Tools"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M686-132 444-376q-20 8-40.5 12t-43.5 4q-100 0-170-70t-70-170q0-36 10-68.5t28-61.5l146 146 72-72-146-146q29-18 61.5-28t68.5-10q100 0 170 70t70 170q0 23-4 43.5T584-516l244 242q12 12 12 29t-12 29l-84 84q-12 12-29 12t-29-12Zm29-85 27-27-256-256q18-20 26-46.5t8-53.5q0-60-38.5-104.5T386-758l74 74q12 12 12 28t-12 28L332-500q-12 12-28 12t-28-12l-74-74q9 57 53.5 95.5T360-440q26 0 52-8t47-25l256 256ZM472-488Z" />
              </svg>
            }
            skills={["Git", "GitHub", "Docker", "AEM", "Jira"]}
          ></SkillCategory>
        </div>
      </div>

      <div className="mt-10 block border rounded-lg bg-gray-100 p-6 md:mt-20 md:flex-row md:gap-20 md:p-20">
        <SectionIntro 
          heading="Personal Projects"
          title="Constant learning and building"
          description="These are some of the technologies I use to build web applications."
          variant="purple"
          linkLabel="See all projects"
          linkUrl="#"
          centered
          size="lg"
        />
        
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:flex-row md:gap-10 justify-center lg:grid-cols-3">
          <ProjectCard
            imageUrl="/hero-desktop.png"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M120-160v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80-440v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80 280v-160h720v160H120Zm80-40h80v-80h-80v80Z" />
              </svg>
            }
            title="Project Title"
            description="Project description goes here."
            technologies={["Technology 1", "Technology 2", "Technology 3"]}
          ></ProjectCard>
          <ProjectCard
            imageUrl="/hero-desktop.png"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M120-160v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80-440v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80 280v-160h720v160H120Zm80-40h80v-80h-80v80Z" />
              </svg>
            }
            title="Project Title"
            description="Project description goes here."
            technologies={["Technology 1", "Technology 2", "Technology 3"]}
          ></ProjectCard>
          <ProjectCard
            imageUrl="/hero-desktop.png"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M120-160v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80-440v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80 280v-160h720v160H120Zm80-40h80v-80h-80v80Z" />
              </svg>
            }
            title="Project Title"
            description="Project description goes here."
            technologies={["Technology 1", "Technology 2", "Technology 3"]}
          ></ProjectCard>
        </div>
      </div>
      <footer className="mt-10 flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-50 p-6 md:mt-20"></footer>
    </main>
  );
}
