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

  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4">
            Interface Final
          </h2>
          <p className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
            O resultado final após iterações e validações com usuários reais.
          </p>
        </div>
        
        {isMobileApp ? (
          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {project.finalDesigns.map((design, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="relative aspect-[9/19] rounded-[3rem] border-[8px] border-foreground overflow-hidden shadow-2xl bg-muted">
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
        ) : isWebProject ? (
          <div className="space-y-24 md:space-y-32">
            {project.finalDesigns.map((design, index) => (
              <div 
                key={index} 
                className="relative w-full overflow-hidden shadow-2xl border border-border rounded-lg bg-muted"
              >
                {/* Safari-like browser mockup frame */}
                <div className="h-10 bg-muted-foreground/10 border-b border-border flex items-center px-4 gap-1.5 backdrop-blur-sm sticky top-0 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                </div>
                <div className="relative">
                  <Image
                    src={design}
                    alt={`Design final ${index + 1}`}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
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
        )}
      </div>
    </section>
  )
}
