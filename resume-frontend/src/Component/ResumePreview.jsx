
import {usePDF} from "react-to-pdf";

const ResumePreview = ({ data }) => {
  const {toPDF,targetRef} = usePDF({filename:"resume.pdf"});
  const p = data.personalInformation || {};
  const contactFields = [p.email, p.phoneNumber, p.location, p.linkedIn, p.gitHub, p.portfolio].filter(Boolean);

  return (
     <div>
      {/* Download button - outside ref, won't appear in PDF */}
      <div className="flex justify-center mb-6">
        <button
          onClick={toPDF}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Download PDF
        </button>
      </div>
    
    <div ref={targetRef} id="resume-preview" className="max-w-3xl mx-auto bg-white text-black font-sans border rounded-xl overflow-hidden">
      
      {/* Header */}
      <div className="px-10 py-8 border-b">
        <h1 className="text-3xl font-semibold">{p.fullName}</h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-500">
          {contactFields.map((f, i) => <span key={i}>{f}</span>)}
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-[1fr_260px]">
        
        {/* Main column */}
        <div className="p-8 border-r space-y-6">
          
          {data.summary && (
            <Section title="Summary">
              <p className="text-sm leading-relaxed">{data.summary}</p>
            </Section>
          )}

          {data.experience?.length > 0 && (
            <Section title="Experience">
              {data.experience.map((e, i) => (
                <div key={i} className="mb-4">
                  <p className="font-semibold">{e.jobTitle}</p>
                  <p className="text-xs text-gray-500 mb-1">{[e.company, e.location, e.duration].filter(Boolean).join(' · ')}</p>
                  <p className="text-sm leading-relaxed">{e.responsibility}</p>
                </div>
              ))}
            </Section>
          )}

          {data.education?.length > 0 && (
            <Section title="Education">
              {data.education.map((e, i) => (
                <div key={i} className="mb-3">
                  <p className="font-semibold">{e.degree || e.title}</p>
                  <p className="text-xs text-gray-500">{[e.institution || e.school, e.duration].filter(Boolean).join(' · ')}</p>
                </div>
              ))}
            </Section>
          )}

          {data.projects?.length > 0 && (
            <Section title="Projects">
              {data.projects.map((p, i) => (
                <div key={i} className="mb-3">
                  <p className="font-semibold">{p.title || p.name}</p>
                  <p className="text-sm leading-relaxed">{p.description}</p>
                </div>
              ))}
            </Section>
          )}
        </div>

        {/* Side column */}
        <div className="p-6 space-y-6">

          {data.skills?.length > 0 && (
            <Section title="Skills">
              {data.skills.map((s, i) => (
                <div key={i} className="flex justify-between items-center py-1 border-b last:border-0 text-sm">
                  <span>{s.title}</span>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-500">{s.level}</span>
                </div>
              ))}
            </Section>
          )}

          {data.languages?.length > 0 && (
            <Section title="Languages">
              <div className="flex flex-wrap gap-2">
                {data.languages.map((l, i) => <Tag key={i} label={l.name || l} />)}
              </div>
            </Section>
          )}

          {data.interests?.length > 0 && (
            <Section title="Interests">
              <div className="flex flex-wrap gap-2">
                {data.interests.map((item, i) => <Tag key={i} label={item.name || item} />)}
              </div>
            </Section>
          )}

          {data.certifications?.length > 0 && (
            <Section title="Certifications">
              {data.certifications.map((c, i) => (
                <p key={i} className="text-sm">{c.title || c.name}</p>
              ))}
            </Section>
          )}

        </div>
      </div>
    </div>
    </div>
  );
};

// Helper components
const Section = ({ title, children }) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2 pb-1 border-b">{title}</p>
    {children}
  </div>
);

const Tag = ({ label }) => (
  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 border">{label}</span>
);

export default ResumePreview;