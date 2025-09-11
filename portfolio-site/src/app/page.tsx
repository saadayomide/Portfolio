export default function Home() {
  return (
    <div className="font-sans min-h-screen p-6 sm:p-10">
      <main className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white backdrop-blur shadow-xl ring-1 ring-neutral-200 overflow-hidden">
          <div className="px-6 sm:px-10 py-8 sm:py-10">
            <header className="flex items-start gap-6 mb-8 sm:mb-10">
              <div className="shrink-0">
                <img
                  src="/headshot.jpg"
                  alt="Headshot"
                  className="h-24 w-24 rounded-full object-cover border border-neutral-200 shadow-sm"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">SAAD AYOMIDE OLOWOLAYEMO</h1>
                <p className="mt-1 text-neutral-600">Madrid, Spain</p>
                <p className="mt-1 text-sm text-neutral-700">
                  (+34) 664404283 · solowolayemo.ieu2023@student.ie.edu ·
                  <a className="underline ml-1 text-blue-700 hover:text-blue-600" href="https://www.linkedin.com/in/saad-ayomide-olowolayemo-bbb2a8300/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
                <p className="mt-2 text-sm text-neutral-700">Eligible to sign an internship agreement via IE University</p>
              </div>
            </header>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-blue-800">Summary</h2>
              <div className="h-1 w-12 bg-blue-200 rounded mt-1" />
              <p className="mt-3 leading-relaxed text-neutral-800">
                Computer Science & AI student with strong analytical and programming skills, driven by a passion for learning and problem-solving. Eager to contribute to innovative environments using a solid foundation in software development, machine learning, and data systems.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-blue-800">Education</h2>
              <div className="h-1 w-12 bg-blue-200 rounded mt-1" />
              <div className="mt-3 space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className="font-medium text-neutral-900">IE University (IEU) — Madrid, Spain</h3>
                    <span className="text-sm text-neutral-800">Expected: June 2027</span>
                  </div>
                  <p className="text-sm text-neutral-800">Bachelor of Computer Science and Artificial Intelligence · GPA: 9.4/10 (Ranked 4th with Honors)</p>
                  <ul className="list-disc ml-5 mt-1 text-sm text-neutral-800">
                    <li>IE Foundation Student and Young Talented Leaders Scholarship (Academic and Leadership Excellence)</li>
                    <li>Relevant Courses: Statistics, Data Analysis</li>
                  </ul>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className="font-medium text-neutral-900">Homeschool — Cambridge International Education System • Kuala Lumpur, Malaysia</h3>
                    <span className="text-sm text-neutral-800">Sept 2019 - June 2023</span>
                  </div>
                  <p className="text-sm text-neutral-800">IGCSE and A Levels · Straight A student and top of class</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-blue-800">Experience</h2>
              <div className="h-1 w-12 bg-blue-200 rounded mt-1" />
              <div className="mt-3 space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className="font-medium text-neutral-900">Research Analyst — IEU Student Government, Madrid, Spain</h3>
                    <span className="text-sm text-neutral-800">Sep 2024 - Jun 2025</span>
                  </div>
                  <ul className="list-disc ml-5 mt-1 text-sm text-neutral-800 space-y-1">
                    <li>Conducted quantitative and qualitative research to inform decision-making.</li>
                    <li>Explored ML for automating survey analysis (sentiment analysis) and insights.</li>
                    <li>Presented AI-driven recommendations for well-being initiatives and resources.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className="font-medium text-neutral-900">Designer & Junior Developer — Web Development Club, Kuala Lumpur, Malaysia</h3>
                    <span className="text-sm text-neutral-800">Jun 2022 - Aug 2023</span>
                  </div>
                  <ul className="list-disc ml-5 mt-1 text-sm text-neutral-800 space-y-1">
                    <li>Co-built a dynamic website for a local news outlet (JavaScript, React, Azure).</li>
                    <li>Integrated basic analytics; introduced early data analytics concepts.</li>
                    <li>Participated in peer learning on AI for personalization and recommendations.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className="font-medium text-neutral-900">Cashier & Operations Assistant — 7‑Eleven, Kuala Lumpur, Malaysia</h3>
                    <span className="text-sm text-neutral-800">Jun 2019 – Aug 2022</span>
                  </div>
                  <ul className="list-disc ml-5 mt-1 text-sm text-neutral-800 space-y-1">
                    <li>Handled POS operations and inventory updates; exposure to retail data systems.</li>
                    <li>Observed purchasing patterns; discussed automation/AI for stock and service.</li>
                    <li>Developed interest in ML for demand forecasting and retail analytics.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-blue-800">Projects & Courses</h2>
              <div className="h-1 w-12 bg-blue-200 rounded mt-1" />
              <ul className="mt-3 space-y-3 text-sm text-neutral-800">
                <li>
                  <span className="font-medium">Student Dropout Predictor –</span> Built a predictive model with Scikit‑Learn to identify at‑risk students for early intervention.
                </li>
                <li>
                  <span className="font-medium">Expense Management Systems –</span> Cloud app for tracking expenses with Azure Functions and MySQL.
                </li>
                <li>
                  <span className="font-medium">Django Database Management System –</span> Web CRUD app using Django and relational models.
                </li>
                <li>
                  <span className="font-medium">Python UNO Game –</span> Implemented UNO with OOP and data structures in Python.
                </li>
                <li>
                  <span className="font-medium">Chat Application in C –</span> Terminal chat with sockets and multithreading.
                </li>
                <li>
                  <span className="font-medium">Health Optimization App –</span> Prototype using OpenAI APIs to suggest routines.
                </li>
                <li>
                  <span className="font-medium">Linear Algebra in Quantum Computing –</span> Simulated qubits via matrix operations.
                </li>
                <li>
                  <span className="font-medium">Blockchain IoT Embedded System Design –</span> Secure IoT with blockchain for tamper‑proof logging.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-blue-800">Activities</h2>
              <div className="h-1 w-12 bg-blue-200 rounded mt-1" />
              <ul className="mt-3 space-y-2 text-sm text-neutral-800">
                <li>IE Math Olympiad (2024‑25)</li>
                <li>IE AI Hackathon (time‑series forecasting)</li>
                <li>IE University Cheerleading Team (Madrid, Sept 2023 – Jan 2024)</li>
                <li>Private CS Tutor (Madrid, 2023 – Present)</li>
                <li>Volunteer: Kechara Food Bank; COVID‑19 Relief (Kuala Lumpur, 2017–2023)</li>
              </ul>
            </section>

            <section className="mb-2 grid sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold text-blue-800">Skills</h2>
                <div className="h-1 w-12 bg-blue-200 rounded mt-1" />
                <ul className="mt-3 text-sm text-neutral-800 space-y-1">
                  <li><span className="font-medium">Programming:</span> Python (Pandas, Django, NumPy, Matplotlib), C, Bash, HTML, CSS, JavaScript, React, Git</li>
                  <li><span className="font-medium">Databases & Cloud:</span> SQL, MongoDB, Azure, AWS, Docker</li>
                  <li><span className="font-medium">ML & AI:</span> scikit‑learn, OpenCV, PyTorch, TensorFlow</li>
                  <li><span className="font-medium">Software & Design:</span> Microsoft Office, Illustrator, Photoshop, Figma, Canva</li>
                  <li><span className="font-medium">Tools:</span> GitHub, Calendar, Slack, Zoom, Google Meet, Teams, Notion, Trello, Asana</li>
                  <li><span className="font-medium">Languages:</span> Spanish (Intermediate), English (Native), Malay (Bilingual), Arabic (Intermediate‑Advanced), Yoruba (Advanced)</li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-blue-800">Research & Interests</h2>
                <div className="h-1 w-12 bg-blue-200 rounded mt-1" />
                <p className="mt-3 text-sm text-neutral-800">
                  Research: “To what extent can machine learning models replicate human decision-making in complex ethical scenarios, and how does this challenge traditional notions of responsibility and accountability?”
                </p>
                <p className="mt-3 text-sm text-neutral-800">
                  Interests: Gaming & Development, Basketball, Football, Cooking, Baking, Coding, Checkers, Machine Learning, Gym
                </p>
              </div>
            </section>
          </div>

          <div className="px-6 sm:px-10 py-4 bg-neutral-50/80 border-t border-neutral-200 text-xs text-neutral-600 text-center">
            © {new Date().getFullYear()} Saad Ayomide Olowolayemo
          </div>
        </div>
      </main>
    </div>
  );
}
