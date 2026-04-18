import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { generateResume } from "../api/ResumeService";
import DynamicResumeForm from "../DynamicForm/DynamicResumeForm";
import ResumePreview from "../Component/ResumePreview"

function GenerateResume() {

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPreviewMode,setIsPreviewMode] = useState(false);
  

  const handleSubmit=()=>{
    console.log("button clciked")
    setIsPreviewMode(true);
  };

    function handleChange(event){
      setData({
        ...data,
        personalInformation:{
          ...data.personalInformation,
          [event.target.name]: event.target.value
        }
      })
    }






    const [data,setData] = useState(null);

  const handleClear = () => {
    setPrompt("");
  };

  const handleGenerate = async () => {
    try{
        setLoading(true);
        const responseData = await generateResume(prompt);
        console.log("Generated Resume:", responseData);
        setData(responseData.data);
        toast.success("Resume generated successfully!" );


    }catch(error){
        console.error("Error generating resume:", error);
        toast.error("Failed to generate resume.");

    }finally{
        setLoading(false);
        setPrompt("");
    }
  };

  useEffect(() => {
    console.log("Resume data updated:", data);

  }, [data]);

  







  // function showForm(){
  //   return(
  //     <div className="w-full">
  //       <div className="p-4">
  //       <h1>this is resume form</h1>
  //       </div>
  //       <p>Personal Information</p>
  //       <div className="border border-b flex ">
          
  //         <div>
  //           <label htmlFor="name">Full Name :--</label>
  //           <input
  //           onChange={handleChange}
  //            type="text" 
  //            name="fullName"
  //            id="name"
  //            placeholder="full name"
  //            value={data.personalInformation.fullName} />
        
  //         </div>
  //         <div>
  //            <label htmlFor="email">Email :--</label>
  //         <input 
  //         onChange={handleChange}
  //         type="email" 
  //         name="email"
  //         id="email"
  //         placeholder="email"value={data.personalInformation.email} />
  //         </div>
  //         <div>
  //            <label htmlFor="phoneNumber">Phone :--</label>
  //         <input 
  //         onChange={handleChange}
  //         type="text" 
  //         name="phoneNumber"
  //         id="phoneNumber"
  //         placeholder="phone number"value={data.personalInformation.phoneNumber} />
  //         </div>
  //          <div>
  //            <label htmlFor="location">Location :--</label>
  //         <input 
  //         onChange={handleChange}
  //         type="text" 
  //         name="location"
  //         id="location"
  //         placeholder="location"
  //         value={data.personalInformation.location} />
  //         </div>
  //         <div>
  //            <label htmlFor="linkedin">LinkedIn :--</label>
  //         <input 
  //         onChange={handleChange}
  //         type="text" 
  //         name="linkedin"
  //         id="linkedin"
  //         placeholder="LinkedIn"
  //         value={data.personalInformation.linkedin} />
  //         </div>
  //         <div>
  //            <label htmlFor="github">GitHub :--</label>
  //         <input 
  //         onChange={handleChange}
  //         type="text" 
  //         name="github"
  //         id="github"
  //         placeholder="GitHub"
  //         value={data.personalInformation.github} />
  //         </div>
  //         <div>
  //            <label htmlFor="portfolio">Portfolio :--</label>
  //         <input 
  //         onChange={handleChange}
  //         type="text" 
  //         name="portfolio"
  //         id="portfolio"
  //         placeholder="Portfolio"
  //         value={data.personalInformation.portfolio} />
  //         </div>
  //       </div>
      
  //     </div>
  //   )
  // }

  function showInputField(){
    return(
       <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-lg">

        {/* Label */}
        <label className="block text-lg font-semibold mb-3">
          Describe Yourself
        </label>

        {/* Textarea */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Example: I am a 3rd year computer science student skilled in Java, Spring Boot, React and MySQL. I have built projects like AI Email Writer and Helpdesk AI system..."
          className="w-full h-56 p-4 rounded-xl border border-border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Buttons */}
        <div className="flex gap-4 mt-6">

          <button
            disabled={loading}
            onClick={handleGenerate}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            {
                loading ? "Generating..." : "Generate Resume"
            }
          
          </button>

          <button
            disabled={loading}
            onClick={handleClear}
            className="flex-1 border border-border py-3 rounded-xl font-semibold hover:bg-muted transition"
          >
            Clear
          </button>

        </div>

      </div>


    );
  }

  return (
    <div className="py-16">

      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Generate Your <span className="text-blue-600">AI Resume</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Describe yourself, your skills, education, and experience.
          Our AI will convert your description into a professional resume.
        </p>
        {
          data&& !isPreviewMode &&(
            <div className="mt-10">
              <DynamicResumeForm data={data}  setData={setData} onSubmit={handleSubmit}/>
            </div>
          )
        }     
        {
          data && isPreviewMode && (
            <div className="mt-10">
              <ResumePreview data={data}/>
            </div>
          )
        }




      </div>
      



      {/* Main Resume Generator Card */}
      
      {showInputField()}


      {/* Tips Section */}
      <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-3 gap-6">

        <div className="bg-card border border-border p-6 rounded-xl">
          <h3 className="font-semibold mb-2">💡 Add Skills</h3>
          <p className="text-sm text-muted-foreground">
            Mention technologies like Java, React, Spring Boot,
            Python, SQL, etc.
          </p>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl">
          <h3 className="font-semibold mb-2">🎓 Add Education</h3>
          <p className="text-sm text-muted-foreground">
            Include your college, degree, and academic achievements.
          </p>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl">
          <h3 className="font-semibold mb-2">🚀 Add Projects</h3>
          <p className="text-sm text-muted-foreground">
            Describe your best projects and what technologies you used.
          </p>
        </div>

      </div>


      {/* Bottom CTA */}
      <div className="text-center mt-16">

        <h2 className="text-2xl font-semibold mb-4">
          Let AI build your professional resume in seconds
        </h2>

        <p className="text-muted-foreground mb-6">
          No templates. No formatting headaches. Just describe yourself.
        </p>

        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
          Try AI Resume Builder
        </button>

      </div>

    </div>
  );
}

export default GenerateResume;