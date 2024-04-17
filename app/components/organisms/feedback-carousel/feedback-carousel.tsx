"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const FeedbackCarousel = () => {
  return (
    <Carousel plugins={[Autoplay({ delay: 10000 })]}>
      <CarouselContent className="max-w-72 items-center">
        <CarouselItem>
          <div className="border p-4 h-[400px] flex flex-col justify-between">
            <p className="text-neutral-200">
              Taking care of the tech deep is something that is really
              important. Thank you for being responsible for that and having a
              clear plan to focus on it.
            </p>
            <p className="text-neutral-400 text-right">-Lamia, PO (client)</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="border p-4 h-[400px] flex flex-col justify-between">
            <p className="text-neutral-200">
              Despite the challenges and intricacies involved, you tackled each
              task with utmost professionalism and competence. Your ability to
              work together harmoniously, communicate effectively, and find
              innovative solutions ensured a smooth and successful transition.
            </p>
            <p className="text-neutral-400 text-right">-PO (client)</p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
};
