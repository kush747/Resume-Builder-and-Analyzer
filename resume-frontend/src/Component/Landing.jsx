import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Create Professional Resumes
          <span className="block text-blue-600 mt-2">
            Using Artificial Intelligence
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Describe your skills, experience, and achievements. Our AI instantly
          generates a professional resume optimized for recruiters.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/generate-resume"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Build Resume
          </Link>

          <Link
            to="/about"
            className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition"
          >
            See Features
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Powerful Resume Features
          </h2>

          <p className="text-center text-muted-foreground mt-4">
            Everything you need to create a job-winning resume
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                AI Resume Generator
              </h3>
              <p className="text-muted-foreground">
                Just describe your profile and our AI creates a structured,
                professional resume instantly.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                Smart Skill Suggestions
              </h3>
              <p className="text-muted-foreground">
                AI recommends optimized resume points to increase your chances
                of getting shortlisted.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                ATS Friendly Templates
              </h3>
              <p className="text-muted-foreground">
                Choose modern resume templates designed to pass ATS systems
                used by recruiters.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16 text-center">

            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600">1</div>
              <h3 className="mt-4 text-xl font-semibold">
                Enter Your Details
              </h3>
              <p className="text-muted-foreground mt-2">
                Provide your experience, skills, and career summary.
              </p>
            </div>

            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600">2</div>
              <h3 className="mt-4 text-xl font-semibold">
                AI Generates Resume
              </h3>
              <p className="text-muted-foreground mt-2">
                Our AI organizes your information into a professional resume.
              </p>
            </div>

            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600">3</div>
              <h3 className="mt-4 text-xl font-semibold">
                Download & Apply
              </h3>
              <p className="text-muted-foreground mt-2">
                Export your resume and start applying to jobs immediately.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Build Your Resume?
        </h2>

        <p className="mt-4 opacity-90">
          Generate a professional AI resume in seconds.
        </p>

        <Link
          to="/generate-resume"
          className="inline-block mt-8 px-10 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Start Now
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
        © 2026 ResumeAI — Built with AI
      </footer>

    </div>
  );
}

export default Landing;