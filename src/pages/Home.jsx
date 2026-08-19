import Hero from '../components/home/Hero'
import QuickMenu from '../components/home/QuickMenu'
import CurrentClasses from '../components/home/CurrentClasses'
import CurriculumPreview from '../components/home/CurriculumPreview'
import TeachersPreview from '../components/home/TeachersPreview'
import SeminarBlock from '../components/home/SeminarBlock'
import ConsultationCta from '../components/home/ConsultationCta'

export default function Home() {
  return (
    <>
      <Hero />
      <QuickMenu />
      <CurrentClasses />
      <CurriculumPreview />
      <TeachersPreview />
      <SeminarBlock />
      <ConsultationCta />
    </>
  )
}
