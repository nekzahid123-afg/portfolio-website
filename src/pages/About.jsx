import Carousel from '../components/Carousel'

export default function About({ mediaItems }) {
  return (
    <div>
       {/*Image carousel*/}
     <div className="flex bg-blue-200">
         <Carousel mediaItems={mediaItems} />
     </div>
      <div>
         <h1 className="font-bold text-center text-4xl underline decoration-black" style={{ fontFamily: '"Arial Black", Arial, sans-serif' }}>
          My Technical Skills</h1>
          <h1 className="font-bold pl-16 text-3xl underline decoration-black mt-2">Programing Languages</h1>
          <p className="text-xl pl-16 pr-16 mt-1">
           <span className='font-bold'>C++ and Java</span><br></br>
            I have strong command on C++ and covered all necessary concepts from beginer to advance level than included:
            Programming  Fundamentals 
            Object Oriented Programming
            Data Structures 
            Algorithms
            I have solved Limited amount of leelcode problems and general problems.
            I also have strong understanding of standard Tempelate Liberary.
            In Java the Fundamentals and OOP and DSA also covered.<br></br>
           <span className='font-bold'>Web Programming</span><br></br>
           I have JavaScipt indepth Knowledge From bassic data types functions DOM to Promises , Asynchronious Javascript
           and much more.I have entensive knowlege in React.js that is Javascript famous libarary for fronend developememt.
           I have explored advance HTML , CSS and Tailwindcss.
          Wordpress: Wordpress is CMS that is used for fullstack development and I worked for two years on Wordpress built 
          beatifull websites.<br></br>
           <span className='font-bold'>Plateforms and Tools</span><br></br>
         <span className='font-bold'>Git</span><br></br> Git is a tool used for deploment and version control I am using in this tool in developement now a days.<br></br>
           <span className='font-bold'>Github</span><br></br>I have keept multiple projects on gethub and worked with this plateform.<br></br>
          <span className='font-bold'>C#.NET</span><br></br>I also worked with C# .NET and built many projects.<br></br>
          <span className='font-bold'>Canva Design</span><br></br>Multiple banners and pictures have desinged by me using canva.<br></br>
         <span className='font-bold'>Figma Desingn</span><br></br>Figma also had explored by me and  use for some drawings.<br></br>
          <span className='font-bold'>N8N Automation</span><br></br>I have worked with n8n and automate different systems.<br></br>
          </p>
        <h1 className="font-bold pl-16 text-3xl underline decoration-black mt-2">My projects</h1>
        <p className="text-xl pl-16 pr-16 mt-1">
        <span className='font-bold'>Corrency Converter App(Reactjs)</span><br></br>
         Accepts currency input from any country and converts it to the desired target currency in real time.
         You may provide provide any country's currency and the App convert it into the targeted currency.<br></br>
          <span className='font-bold'>Portfolio Website | React.js</span><br></br>
          The website you watching is built in Reactjs , React router DOM and tailwindcss.<br></br>
          <span className='font-bold'>E-Commerce Platform | WordPress</span><br></br>
          Led development of a full e-commerce platform featuring product listings, a shopping cart, payment 
          gatewayes.<br></br>
          <span className='font-bold'>Local Language App | Android | Java+XML</span><br></br>
          Developed a mobile application that takes a text or voice input in English and explain it in Pashto.<br></br>
          <span className='font-bold'>Online Learning Management System | .NET</span><br></br>
         A simple LMS with five modules where the admins uploads teacher’s contents and authenticate users. 
         Learners access the lectures and other uploaded contents. <br></br>
            
        </p>
     </div>
    
        {/*Personal and  Social Life */}
      <div className='pt-10'>
        <h1 className="font-bold text-center text-4xl underline decoration-black" style={{ fontFamily: '"Arial Black", Arial, sans-serif' }}>
          My Early Life and Education Upto to Now</h1>
          <h1 className="font-bold pl-16 text-3xl underline decoration-black mt-4">My School Life</h1>
          <p className="text-xl pl-16 pr-16 mt-2">
            I bornt in April 1, 2004 in a small town of North Waziristan in a family with limited resources.As I grown up and reach five years.I have been 
           started my educational life and and joined government primary School Mama Ziarat.For three years I got the top position awards.
           After finishing grade I left my home and migrated for further education.I got admission in Government  high School Data Khel.
           There I  Passed fith and again came to my village and joined a private school named Islamia Public School Mama Ziarat later 
           renamed to Sun Rise Public School Mama Ziarat and did seventh grade from here.After this I faced  severe financial issues
           due to which I Paused my Education for a year.in 2018  I got the opporturnity to join Army Public School Thal with fully funded
           scholership and studied for three from grade 8 to matriculation.In 2021 I did Matriculation wiht ronounced marks 1006 out of 1100
          from federal board  of Intermediate ans Secondery Schools and I Was Second Position holder from the institution.
          </p>
         <h1 className="font-bold pl-16 text-3xl underline decoration-black mt-2">My College Life</h1>
         <p className="text-xl pl-16 pr-16 mt-2">
          I joined Army Public School & College Kohat Cant in 2021 and started my College journely.There I worked hard and attepted my first year
          Rxam and got grade A in the firet year Exam.I studied grede 2nd year Kohat but the anual Exam I  came to North Waziristan and did my 
          Fsc Pre-Engineering from D&K Ashraf's College Mirali with grade A in 2023.
         </p>
          <h1 className="font-bold pl-16 text-3xl underline decoration-black mt-2">My University Life</h1>
           <p className="text-xl pl-16 pr-16 mt-2">
            In 2033 I started teaching in Sun Rise Public School as I was unable to afford Univesity Education expenditures.
            This time I got another golden oppurtunity again to successfully got another fully funded Scholorship in Akhuwat College Kasuer in the
            department of BS information Technologies.
            There I found a dynamic Society and diverse Environment which capable me to be confident and speak and share my ideas with 
            different cultures and multi languages people in  the University.Still I am studying there.Now am in sixth semester and Insha-Allah
            I will complete my degree in 2027.
           </p>
        <h1 className="font-bold pl-16 text-3xl underline decoration-black mt-2">My Soft Skills</h1>
        <p className="text-xl pl-16 pr-16 mt-2">
          Through out my life I always speak the truth and keep my-self well disciplined in my personal as well as eductional life
          and Social life.I respect the elders and seniors and obey their order.
          I have strong communication skills specialy in english language.I always follow the deadline of any activity ,attend classes
          on time and regular.
          I have strong problem solving skills and solves technical and social problems with ease.I never accept
          failulre untill reach the goal. I take time for solving problems and applies different approaches to reach
          the optimal sotion.
          I quickly adopt the new environment and technology and never resist the change.I feel exicted with team members
          and have patience and respect the openions of team members. 
        </p>
        <h1 className="font-bold pl-16 text-3xl underline decoration-black mt-2">My Timetable and Health Activities</h1>
        <p className="text-xl pl-16 pr-16 mt-2">
          I Wake up Early in the morning and say my prayer.After prayer I go to gymenastic and exercising for half an hour.
          Than I sleep for while again wake up when 20 minutes left for breakfast and prepare for class.On 8 AM I take freakfast
          and on exact 8:30 PM my classes has been starting upto 5 PM.After 5 PM I have rexation time and enjoy with my friends and social
          media.I have dinner on 7 PM and than go to IT lab for study and on 9 PM I say Eisha prayer and again come to IT lab for further
          study upto 12 Oclock.Than I go to bed.
        </p>
      </div>
    </div>
  )
}
