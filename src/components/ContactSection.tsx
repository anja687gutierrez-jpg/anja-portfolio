import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, ExternalLink } from "lucide-react";

const contactLinks = [
  {
    label: "GitHub",
    url: "https://github.com/anja687gutierrez-jpg",
    icon: Github,
  },
  {
    label: "anja687gutierrez@gmail.com",
    url: "mailto:anja687gutierrez@gmail.com",
    icon: Mail,
  },
  {
    label: "(310) 600-6624",
    url: "tel:+13106006624",
    icon: Phone,
  },
  {
    label: "XPO Fleet (GitHub)",
    url: "https://github.com/anja687gutierrez-jpg/xpo-fleet",
    icon: ExternalLink,
  },
  {
    label: "Abenteuer LIVE",
    url: "https://abenteuer-mieten.pages.dev",
    icon: ExternalLink,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">Get in Touch</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Reach out or check out my work
        </p>
      </div>

      <div className="mx-auto grid max-w-md gap-3">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Button
              key={link.label}
              variant="outline"
              className="h-12 justify-start gap-3 text-sm"
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <Icon className="size-4 text-muted-foreground" />
                {link.label}
              </a>
            </Button>
          );
        })}
      </div>
    </section>
  );
}
