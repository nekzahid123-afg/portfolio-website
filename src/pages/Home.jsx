import portfoliopic from "../assets/portfoliopic.jpg";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/*HERO  SECTION*/}
      <div className="flex flex-col-reverse bg-white md:flex-row md:justify-between">
        <div className="w-full p-4 text-base sm:p-6 sm:text-lg md:w-1/2 md:p-12 md:text-2xl lg:p-16 lg:text-3xl">
          <p
            className="text-blue-900 leading-relaxed"
            style={{ fontFamily: '"Arial Black", Arial, sans-serif' }}
          >
            My life shaped by remarkable principles.
            <br />
            Hardwork built my foundation.
            <br />
            Discipline defined my path.
            <br />
            Consistency kept me moving.
            <br />
            Curiosity fueled my growth.
            <br />
            Courage faced every challenge.
            <br />
            Beliefs guided every step.
            <br />
            Love drives everything I create.
          </p>
        </div>
        <div className="relative flex w-full justify-center md:w-1/2 md:items-start md:justify-end">
          <img
            src={portfoliopic}
            alt="Nek Zahid Khan portfolio portrait"
            className="h-auto w-full max-w-xs sm:max-w-sm md:w-3/4 md:max-w-none object-cover"
          />
        </div>
      </div>
      {/*BODY*/}
      <div className="mt-2 bg-blue-700 px-4 sm:px-6 py-6 sm:py-8 md:px-12 md:py-10 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
            A DEVELOPER WHO BUILDS WITH PURPOSE
          </h1>
          <p className="pt-3 sm:pt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            I'm Nek Zahid Khan, a BSIT student at the University of the Punjab,
            Lahore. Originally from North Waziristan, KPK, I came here to build
            technology that solves real problems. I work across web development
            and AI automation, turning ideas into reliable, working solutions.
          </p>
        </div>
        <div>
          <h1 className="m-4 sm:m-6 text-center text-xl sm:text-2xl md:text-3xl font-bold">
            MY TECHNICAL FOCUS
          </h1>
          <div className="mx-auto grid max-w-5xl gap-4 sm:gap-6 text-center md:grid-cols-2">
            <section className="text-sm sm:text-base md:text-lg leading-relaxed">
              <h2 className="font-bold">WEB DEVELOPMENT</h2>
              <p className="mt-2">
                Building modern, responsive web applications using JavaScript
                and .NET, with a focus on clean architecture and reliable
                delivery.
              </p>
            </section>
            <section className="text-sm sm:text-base md:text-lg leading-relaxed">
              <h2 className="font-bold">AI AUTOMATION</h2>
              <p className="mt-2">
                Designing intelligent automation workflows with n8n, Zapier, and
                Lovable, and applying generative AI and prompt engineering to
                real-world use cases.
              </p>
            </section>
          </div>
        </div>
        <div className="mx-auto mt-6 sm:mt-8 max-w-4xl text-center">
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
            VALUES I BRING TO EVERY PROJECT
          </h1>
          <p className="pt-3 sm:pt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            I believe great work is not only about technical skill, but also
            about showing up with the right mindset. I am committed to meeting
            deadlines without compromising quality, communicating clearly in
            English throughout every project, and maintaining honesty and
            respect in every collaboration. I lead with empathy, take feedback
            constructively, and hold myself to a high standard of discipline and
            professionalism.
          </p>
        </div>
        <div className="mx-auto max-w-4xl text-white">
          <h1 className="pt-6 sm:pt-8 text-center text-xl sm:text-2xl md:text-3xl font-bold">
            VISION
          </h1>
          <p className="pt-3 sm:pt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Building Pakistan's AI-powered future I envision a Pakistan where
            local communities and businesses are empowered through intelligent
            technology. My goal is to grow into a world-class AI developer and
            launch a startup that bridges the gap between cutting-edge
            innovation and everyday local needs. I believe technology should be
            accessible, understandable, and used responsibly from villages in
            KPK to businesses operating globally.
          </p>
        </div>
        <div className="mx-auto max-w-4xl text-white">
          <h1 className="pt-6 sm:pt-8 text-center text-xl sm:text-2xl md:text-3xl font-bold">
            MISSION
          </h1>
          <p className="pt-3 sm:pt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Solve local problems Use AI and web technology to address real
            challenges faced by communities across Pakistan. Digitalize
            businesses Help local businesses modernize and scale, from their
            first website to full automation, nationally and internationally.
            Educate with awareness each people how to use technology wisely and
            equally, how not to so it becomes a tool for good, not harm.
          </p>
        </div>
      </div>
    </div>
  );
}
