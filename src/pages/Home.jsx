import React from 'react'
import portfoliopic from "../assets/portfoliopic.jpg"

export default function Home() {
  return (
    
    <div>
    {/*HERO  SECTION*/}
    <div className="flex justify-between bg-white">
      <div className="w-1/2  text-3xl p-16  ">
        <p className="text-blue-700" style={{ fontFamily: '"Arial Black", Arial, sans-serif' }}>
           My life shaped by remarkable principles.
           Hardwork built my foundation.
           Discipline defined my path.
           Consistency kept me moving.
          Curiosity fueled my growth.
           Courage faced every challenge.
           Beliefs guided every step.
           Love drives everything I create.
           
        </p>
     </div>
        <div className="relative w-1/2 flex justify-end items-start">
           <img src={portfoliopic } alt="image not ready" className="w-3/4 h-auto object-cover" />
       </div>
    </div>
    {/*BODY*/}
    <div className="mt-2 bg-blue-700 text-white h-250" >
       <div className="pt-5 px-16 text-center">
        <h1 className="text-center font-bold text-3xl ">
          A DEVELOPER WHO BUILDS WITH PURPOSE</h1>
         <p className='pt-4 pl-16 pr-16 text-center text-1xl'>
           I'm Nek Zahid Khan, a BSIT student
           at the University of the Punjab, Lahore.
           Originally from North Waziristan, KPK,
           I came here to build technology that 
          solves real problems. I work across 
          web development and AI automation,
          turning ideas into reliable, working solutions.
         </p>
       </div>
       <div>
          <h1 className="text-center  m-6 font-bold text-3xl">
            MY TECHNICAL FOCUS
          </h1>
         <div className="flex  justify-between">
           <p className='px-10 text-center text-1xl'>
           <h className="text-center font-bold">WEB DEVELOPMENT</h><br></br>
          Building modern, responsive web applications
          using JavaScript and .NET, with a focus on clean
          architecture and reliable delivery.
           </p>
           <p className=' px-10 text-center text-1xl'>
             <h className="text-center font-bold">  AI AUTOMATION</h><br></br>
               Designing intelligent automation workflows with n8n,
               Zapier, and Lovable, and applying generative AI and 
               prompt engineering to real-world use cases.
           </p>
        </div>
       </div>
       <div className="mt-8 px-16 text-center">
        <h1 className="text-center font-bold text-3xl">
           VALUES I BRING TO EVERY PROJECT
        </h1>
         <p className='pt-4 pl-16 pr-16 text-center text-1xl'>
        I believe great work is not only about technical skill,
        but also about showing up with the right mindset. 
        I am committed to meeting deadlines without compromising quality, 
        communicating clearly in English throughout every project,
        and maintaining honesty and respect in every collaboration.
          I lead with empathy, take feedback constructively,
          and hold myself to a high standard of discipline and professionalism.
         </p>
       </div>
       <div className="text-white">
          <h1 className="text-center font-bold text-white text-3xl pt-10">VISION</h1>
          <p className='pt-4 pl-16 pr-16 text-center text-1xl'>
            Building Pakistan's AI-powered future
           I envision a Pakistan where local communities 
           and businesses are empowered through intelligent
           technology. My goal is to grow into a world-class
           AI developer and launch a startup that bridges the
           gap between cutting-edge innovation and everyday 
          local needs. I believe technology should be accessible,
          understandable, and used responsibly from villages in
          KPK to businesses operating globally.
          </p>
        </div>
        <div className="text-white">
          <h1 className="text-center font-bold text-white text-3xl pt-10">MISSION</h1>
          <p className='pt-4 pl-16 pr-16 text-center text-1xl'>
           Solve local problems Use AI and web 
           technology to address real challenges
           faced by communities across Pakistan.
           Digitalize businesses Help local businesses
           modernize and scale, from their first 
           website to full automation, nationally
           and internationally.
          Educate with awareness each people how 
          to use technology wisely and equally,
          how not to so it becomes a tool for good,
          not harm.
          </p>
        </div>
    </div>
</div>
  )
}
