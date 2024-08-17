

export default function About() {
    return (
        <section id="about" className="bg-muted py-12 md:py-24 px-6">
            <div className="container mx-auto max-w-4xl space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
                    <p className="text-muted-foreground">
                        I am a back-end focused full-stack web developer and DevOps engineer with a passion for building
                        scalable and efficient web applications. I have extensive experience in Java, Spring Boot,
                        JavaScript,
                        TypeScript, Node.js, Express.js, Golang, React.js, Next.js, SQL, Jenkins, GitHub Actions, Linux,
                        Docker,
                        Kubernetes, AWS, and GCP.
                    </p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold md:text-3xl">Work Experience</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-bold">Full-Stack Developer, Reekto</h4>
                            <p className="text-muted-foreground">August 2023 - Present</p>
                            <p className="text-muted-foreground">
                                Developed and maintained web applications using Java, Spring Boot, React.js, and
                                Next.js.
                                Implemented CI/CD pipelines using Jenkins and GitHub Actions. Deployed and managed
                                applications on
                                AWS and GCP using Docker and Kubernetes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold md:text-3xl">Education</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-bold">
                                B.Sc. (Engineering) in Information and Communication Engineering
                            </h4>
                            <p className="text-muted-foreground">Pabna University of Science and Technology, May 2022 -
                                Present</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}