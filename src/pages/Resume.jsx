import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

const resumeUrl = 'https://drive.google.com/file/d/11kf17rAfpwX1zTLqRDtwOyyCXQmCQQnT/view?usp=sharing';

export default function Resume() {
  return (
    <div className="page-shell">
      <SectionTitle
        eyebrow="Resume"
        title="My Resume"
        description="A snapshot of my academic journey, technical interests, software skills, and development-focused projects."
      />

      <div className="glass-card rounded-[30px] p-7 sm:p-10">
        <p className="text-lg leading-8 text-slate-300">
          I am a Computer Science Engineering student pursuing practical learning across AI, web development, and software problem solving. This resume highlights my foundational technical skills, project experience, and the direction of my continuous growth as an aspiring developer.
        </p>

        <div className="mt-8">
          <Button href={resumeUrl} className="px-7 py-3" target="_blank" rel="noreferrer">
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
