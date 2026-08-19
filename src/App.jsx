import { HashRouter, Routes, Route } from 'react-router-dom'
import { SiteStateProvider, RouteChangeEffects } from './context/SiteStateContext'
import RootLayout from './components/layout/RootLayout'
import InnerPageLayout from './components/layout/InnerPageLayout'
import Home from './pages/Home'
import About from './pages/About'
import Teachers from './pages/Teachers'
import TeacherDetail from './pages/TeacherDetail'
import CurriculumPage from './pages/CurriculumPage'
import ClassMethod from './pages/ClassMethod'
import Feedback from './pages/Feedback'
import Schedule from './pages/Schedule'
import Classes from './pages/Classes'
import Seminar from './pages/Seminar'
import SeminarDetail from './pages/SeminarDetail'
import Classroom from './pages/Classroom'
import StudentWork from './pages/StudentWork'
import Reviews from './pages/Reviews'
import Admission from './pages/Admission'
import ConsultForm from './pages/ConsultForm'
import Faq from './pages/Faq'
import Notice from './pages/Notice'
import Location from './pages/Location'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <HashRouter>
      <SiteStateProvider>
        <RouteChangeEffects />
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route element={<InnerPageLayout />}>
              <Route path="about" element={<About />} />
              <Route path="teachers" element={<Teachers />} />
              <Route path="teachers/1" element={<TeacherDetail />} />
              <Route path="curriculum" element={<CurriculumPage />} />
              <Route path="curriculum/class-method" element={<ClassMethod />} />
              <Route path="curriculum/feedback" element={<Feedback />} />
              <Route path="curriculum/grade-1-2" element={<CurriculumPage gradeKey="grade-1-2" />} />
              <Route path="curriculum/grade-3-4" element={<CurriculumPage gradeKey="grade-3-4" />} />
              <Route path="curriculum/grade-5-6" element={<CurriculumPage gradeKey="grade-5-6" />} />
              <Route path="schedule" element={<Schedule />} />
              <Route path="classes" element={<Classes />} />
              <Route path="seminar" element={<Seminar />} />
              <Route path="seminar/1" element={<SeminarDetail />} />
              <Route path="classroom" element={<Classroom />} />
              <Route path="student-work" element={<StudentWork />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="admission" element={<Admission />} />
              <Route path="consult" element={<ConsultForm formPath="/consult" />} />
              <Route path="enroll" element={<ConsultForm formPath="/enroll" />} />
              <Route path="reservation" element={<ConsultForm formPath="/reservation" />} />
              <Route path="faq" element={<Faq />} />
              <Route path="notice" element={<Notice />} />
              <Route path="location" element={<Location />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Route>
        </Routes>
      </SiteStateProvider>
    </HashRouter>
  )
}
