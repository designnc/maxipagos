// utils/useActiveSection.ts
import { useState, useEffect } from "react";

interface UseActiveSectionProps {
  sectionIds: string[];
  rootMargin?: string;
}

export function useActiveSection({
  sectionIds,
  rootMargin = "0px 0px 0% 0px",
}: UseActiveSectionProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id") || "";
          setActiveSection(sectionId);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin,
      threshold: 0.1,
    });

    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [sectionIds, rootMargin]);

  return activeSection;
}
