import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-20 pb-8">
      <Separator />
      <div className="mt-6 flex flex-col items-center gap-2 text-center">
        <p className="text-sm font-medium">
          Built by Anja Gutierrez
        </p>
        <p className="text-xs text-muted-foreground">
          Designed and developed from scratch. Not a template.
        </p>
      </div>
    </footer>
  );
}
