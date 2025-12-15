import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github, TrendingUp, Zap, Brain, Target } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Aviation Delay DSS using US DOT Flight Data – Tableau Project",
      description: "Developed an interactive, multi-dashboard Tableau-based DSS integrating flight performance, weather, cancellation, and airport geolocation datasets to analyze and predict flight delay patterns across the U.S. aviation network.",
      icon: <Brain className="w-8 h-8" />,
      achievements: [
        {
          metric: "Multi-Dashboard DSS",
          description: "Integrated flight performance, weather, cancellation, and airport geolocation datasets for comprehensive analysis"
        },
        {
          metric: "Flight Delay Prediction",
          description: "Analyzed and predicted flight delay patterns across the U.S. aviation network using advanced analytics"
        },
        {
          metric: "Interactive Visualization",
          description: "Created comprehensive Tableau dashboards for data-driven decision making in aviation operations"
        }
      ],
      technologies: ["Tableau", "Excel", "Python", "Pandas", "NumPy", "Data joins", "ETL structuring", "Outlier detection", "Data cleansing"],
      category: "Data Analytics",
      gradient: "from-purple-500 to-pink-500",
      projectLink: "#"
    },
    {
      title: "Statistical Analysis of Unemployment Across Europe (2013 - 2023)",
      description: "Conducted a decade-long statistical analysis of unemployment across Europe, examining variations by gender, age group, and citizenship status using descriptive and inferential methods. Identified regional labour-market disparities, pandemic-driven disruptions, and structural inequalities using hypothesis testing and ANOVA to quantify significance.",
      icon: <Target className="w-8 h-8" />,
      achievements: [
        {
          metric: "Decade-Long Analysis",
          description: "Examined unemployment trends across Europe from 2013-2023, analyzing variations by gender, age group, and citizenship status"
        },
        {
          metric: "Statistical Rigor",
          description: "Used descriptive and inferential methods, hypothesis testing, and ANOVA to quantify significance of findings"
        },
        {
          metric: "Key Insights",
          description: "Identified regional labour-market disparities, pandemic-driven disruptions, and structural inequalities"
        }
      ],
      technologies: ["Excel", "Python", "Descriptive statistics", "Paired t-test", "ANOVA", "Correlation analysis", "Statistical formulas", "Visualizations"],
      category: "Statistical Analysis",
      gradient: "from-blue-500 to-cyan-500",
      projectLink: "#"
    }
  ];

  const getGradientClasses = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  };

  return (
    <section id="projects" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Data-driven projects demonstrating expertise in business analytics, statistical analysis, 
            and dashboard development that deliver actionable insights and measurable business impact.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                  <div className="h-full min-h-[600px]">
                    <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${getGradientClasses(project.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {project.category}
                            </Badge>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4 md:space-y-6 flex-grow flex flex-col px-4 md:px-6">
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {project.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                        {project.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex gap-3 p-3 bg-background/50 rounded-lg border border-primary/10">
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                                <Zap className="w-3 h-3 text-primary" />
                              </div>
                            </div>
                            <div>
                              <div className="text-primary font-semibold text-sm">
                                {achievement.metric}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex-grow">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 min-h-[60px]">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4 mt-auto">
                        {project.projectLink && project.projectLink !== "#" && (
                          <Button variant="outline" size="sm" asChild className="w-full">
                            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                              View Project
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
                Interested in <span className="text-gradient">Collaboration?</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                I'm always excited to work on challenging analytics problems and data-driven solutions. 
                Let's discuss how we can turn complex data into actionable insights together.
              </p>
              <div className="flex justify-center">
                <Button variant="gradient" size="lg" asChild>
                  <a href="mailto:nidhivsharma.10@gmail.com">
                    Get In Touch
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;