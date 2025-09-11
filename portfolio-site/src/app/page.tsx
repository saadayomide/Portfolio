import { profile } from "@/src/data/profile";
import { education } from "@/src/data/education";
import { experience } from "@/src/data/experience";
import { projects } from "@/src/data/projects";
import { skills } from "@/src/data/skills";
import { activities } from "@/src/data/activities";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 sm:p-12 max-w-5xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{profile.name}</h1>
        <p className="text-base text-neutral-600 dark:text-neutral-300">{profile.title} · {profile.location}</p>
        <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 space-x-3">
          <span>{profile.email}</span>
          <span>•</span>
          <a className="underline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span>•</span>
          <span>{profile.phone}</span>
        </div>
        <p className="mt-4 text-neutral-800 dark:text-neutral-200">{profile.summary}</p>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{profile.availability}</p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Education</h2>
        <div className="space-y-4">
          {education.map((ed) => (
            <div key={ed.institution}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-medium">{ed.institution} — {ed.location}</h3>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">{ed.end || ""}</span>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">{ed.degree}{ed.gpa ? ` · GPA: ${ed.gpa}` : ""}</p>
              {ed.highlights && (
                <ul className="list-disc ml-5 mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                  {ed.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Experience</h2>
        <div className="space-y-6">
          {experience.map((ex) => (
            <div key={`${ex.organization}-${ex.role}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-medium">{ex.role} — {ex.organization}</h3>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">{ex.start} – {ex.end}</span>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">{ex.location}</p>
              <ul className="list-disc ml-5 mt-2 text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
                {ex.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div key={p.title} className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
              <h3 className="font-medium">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{p.description}</p>
              {p.tech.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5">{t}</span>
                  ))}
                </div>
              )}
              <div className="mt-3 text-sm space-x-3">
                {p.link && (
                  <a className="underline" href={p.link} target="_blank" rel="noopener noreferrer">Live</a>
                )}
                {p.repo && (
                  <a className="underline" href={p.repo} target="_blank" rel="noopener noreferrer">Code</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group}>
              <h3 className="text-sm uppercase tracking-wide text-neutral-600 dark:text-neutral-400">{group.replace(/([A-Z])/g, " $1").trim()}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {(list as string[]).map((item) => (
                  <span key={item} className="text-xs rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-3">Activities</h2>
        <ul className="list-disc ml-5 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
          {activities.map((a) => (
            <li key={`${a.title}-${a.dates || ""}`}>
              <span className="font-medium">{a.title}</span>
              {a.location ? ` — ${a.location}` : ""}
              {a.dates ? ` (${a.dates})` : ""}
              {a.details ? ` – ${a.details}` : ""}
            </li>
          ))}
        </ul>
      </section>

      <footer className="py-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
