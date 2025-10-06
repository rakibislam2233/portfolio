import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { LoadingScreen } from "@/components/ui/loading-screen"
import { ResumeHeader } from "@/components/sections/resume-header"
import { ResumeSummary } from "@/components/sections/resume-summary"
import { ResumeExperience } from "@/components/sections/resume-experience"
import { ResumeEducation } from "@/components/sections/resume-education"
import { ResumeSkills } from "@/components/sections/resume-skills"
import { ResumeProjects } from "@/components/sections/resume-projects"
import { ResumeLanguages } from "@/components/sections/resume-languages"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen bg-background">
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <div className="max-w-5xl mx-auto border border-border/50 print:shadow-none print:border-none print:bg-white  overflow-hidden print:rounded-none print:max-w-none print:mx-0">
          <ResumeHeader />
          <ResumeSummary />
          <ResumeSkills />
          <ResumeExperience />
          <ResumeEducation />
          <ResumeProjects />
          <ResumeLanguages />
        </div>
      </main>
    </>
  )
}
