'use client'

import Image from "next/image"
import type { Project } from "@/lib/projects"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ProjectFinalDesignsProps {
  project: Project
}

export function ProjectFinalDesigns({ project }: ProjectFinalDesignsProps) {
  const isMobileApp = project.category.toLowerCase().includes("mobile") || project.category.toLowerCase().includes("aplicativo")
  const isWebProject = project.category.toLowerCase().includes("landing page") || project.category.toLowerCase().includes("web") || project.category.toLowerCase().includes("e-commerce")

  const renderMobileScreens = (images: string[]) => (
    <div className="relative px-4 md:px-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((design, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="relative aspect-[9/19] rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-foreground overflow-hidden shadow-2xl bg-muted group transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src={design}
                  alt={`Design final ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12" />
        <CarouselNext className="hidden md:flex -right-12" />
      </Carousel>
    </div>
  )

  const renderWebScreens = (images: string[]) => (
    <div className="space-y-16 md:space-y-32">
      {images.map((design, index) => (
        <div 
          key={index} 
          className="relative w-full overflow-hidden shadow-2xl border border-border rounded-lg bg-muted group"
        >
          {/* Safari-like browser mockup frame */}
          <div className="h-8 md:h-10 bg-muted-foreground/10 border-b border-border flex items-center px-4 gap-1.5 backdrop-blur-sm sticky top-0 z-10">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-400/50" />
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-amber-400/50" />
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400/50" />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src={design}
              alt={`Design final ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01]"
              priority={index === 0}
            />
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4">
            Interface Final
          </h2>
          <p className="text-3xl md:text-5xl font-serif text-foreground leading-tight">
            O resultado final após iterações e validações com usuários.
          </p>
        </div>
        
        {project.sections ? (
          <div className="space-y-32">
            {project.sections.map((section, sIndex) => (
              <div key={sIndex} className="space-y-12">
                <div className="max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-serif mb-4">{section.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {section.description}
                  </p>
                </div>
                {section.layout === "mobile" ? renderMobileScreens(section.images) : 
                 section.layout === "web" ? renderWebScreens(section.images) :
                 isMobileApp ? renderMobileScreens(section.images) : renderWebScreens(section.images)}
              </div>
            ))}
          </div>
        ) : (
          isMobileApp ? renderMobileScreens(project.finalDesigns) : 
          isWebProject ? renderWebScreens(project.finalDesigns) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {project.finalDesigns.map((design, index) => (
                <div 
                  key={index} 
                  className="group relative aspect-[16/10] bg-muted overflow-hidden shadow-sm rounded-lg"
                >
                  <Image
                    src={design}
                    alt={`Design final ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </section>
  )
}
