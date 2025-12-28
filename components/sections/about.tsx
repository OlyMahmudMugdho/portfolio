export function AboutSection() {
  return (
    <section id="about" className="py-20 flex items-center px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="space-y-6 text-left">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a back-end focused Software and DevOps engineer with a passion for building scalable and efficient web applications.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I have extensive experience in Java, Spring Boot, JavaScript, TypeScript, Node.js, Express.js, Golang, React.js, Next.js, SQL, Jenkins, GitHub Actions, Linux, Docker, Kubernetes, AWS, and GCP.
          </p>
        </div>
      </div>
    </section>
  )
}