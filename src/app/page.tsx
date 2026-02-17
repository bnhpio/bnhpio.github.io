import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "findex.work",
    url: "https://findex.work",
    description: "Decentralized job marketplace connecting talent with Web3 opportunities.",
  },
  {
    name: "thyme.sh",
    url: "https://thyme.sh",
    description: "Developer tooling for time-tracked smart contract deployments.",
  },
  {
    name: "bckit.cc",
    url: "https://bckit.cc",
    description: "Blockchain toolkit — batteries-included SDK for chain integrations.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-24">
        {/* Hero */}
        <section className="mb-20">
          <p className="mb-4 text-sm text-muted-foreground">bnhp.io</p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Bunny Hop
          </h1>
          <p className="max-w-lg text-muted-foreground">
            Small team of four building blockchain services and products.
          </p>
        </section>

        {/* Portfolio */}
        <section>
          <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Projects
          </h2>
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between rounded-lg border border-border p-5 transition-colors hover:border-accent hover:bg-muted"
              >
                <div>
                  <h3 className="mb-1 font-semibold group-hover:text-accent">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 ml-4 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Bunny Hop</p>
          <div className="flex gap-6">
            <a
              href="mailto:hello@bnhp.io"
              className="transition-colors hover:text-foreground"
            >
              hello@bnhp.io
            </a>
            <a
              href="https://github.com/bnhpio"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
