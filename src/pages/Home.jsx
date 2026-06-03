import portfoliopic from "../assets/portfoliopic.jpg"

export default function Home() {
  return (
    
    <div className="w-full overflow-hidden">
    {/*HERO  SECTION*/}
    <div className="flex flex-col-reverse bg-white md:flex-row md:justify-between">
      <div className="w-full p-5 text-xl sm:p-8 sm:text-2xl md:w-1/2 md:p-16 md:text-3xl">
        <p className="text-blue-900" style={{ fontFamily: '"Arial Black", Arial, sans-serif' }}>
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
        <div className="relative flex w-full justify-center md:w-1/2 md:items-start md:justify-end">
           <img src={portfoliopic } alt="Nek Zahid Khan portfolio portrait" className="h-auto w-full max-w-sm object-cover md:w-3/4 md:max-w-none" />
       </div>
    </div>
    {/*BODY*/}
    <div className="mt-2 bg-blue-700 px-5 py-8 text-white sm:px-8 md:px-16" >
       <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-center text-2xl font-bold sm:text-3xl">
          A DEVELOPER WHO BUILDS WITH PURPOSE</h1>
         <p className='pt-4 text-center text-base sm:text-lg'>
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
          <h1 className="m-6 text-center text-2xl font-bold sm:text-3xl">
            MY TECHNICAL FOCUS
          </h1>
         <div className="mx-auto grid max-w-5xl gap-6 text-center md:grid-cols-2">
           <section className='text-base sm:text-lg'>
             <h2 className="font-bold">WEB DEVELOPMENT</h2>
             <p className="mt-2">
               Building modern, responsive web applications
               using JavaScript and .NET, with a focus on clean
               architecture and reliable delivery.
             </p>
           </section>
           <section className='text-base sm:text-lg'>
             <h2 className="font-bold">AI AUTOMATION</h2>
             <p className="mt-2">
               Designing intelligent automation workflows with n8n,
               Zapier, and Lovable, and applying generative AI and 
               prompt engineering to real-world use cases.
             </p>
           </section>
        </div>
       </div>
       <div className="mx-auto mt-8 max-w-4xl text-center">
        <h1 className="text-center text-2xl font-bold sm:text-3xl">
           VALUES I BRING TO EVERY PROJECT
        </h1>
         <p className='pt-4 text-center text-base sm:text-lg'>
        I believe great work is not only about technical skill,
        but also about showing up with the right mindset. 
        I am committed to meeting deadlines without compromising quality, 
        communicating clearly in English throughout every project,
        and maintaining honesty and respect in every collaboration.
          I lead with empathy, take feedback constructively,
          and hold myself to a high standard of discipline and professionalism.
         </p>
       </div>
       <div className="mx-auto max-w-4xl text-white">
          <h1 className="pt-10 text-center text-2xl font-bold text-white sm:text-3xl">VISION</h1>
          <p className='pt-4 text-center text-base sm:text-lg'>
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
        <div className="mx-auto max-w-4xl text-white">
          <h1 className="pt-10 text-center text-2xl font-bold text-white sm:text-3xl">MISSION</h1>
          <p className='pt-4 text-center text-base sm:text-lg'>
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
