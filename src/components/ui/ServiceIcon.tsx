import {
  Building2,
  ClipboardCheck,
  Factory,
  HardHat,
  House,
  Layers,
  PaintRoller,
  Road,
  Route,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "general-contracting": HardHat,
  "civil-infrastructure": Route,
  "structural-concrete": Layers,
  "commercial-building": Building2,
  "renovation-fit-out": PaintRoller,
  "project-management": ClipboardCheck,
  "roads-highways": Road,
  "villa-construction": House,
  "oil-gas": Factory,
};

/** Looks up a service's icon by slug. Shared by every service surface. */
export function ServiceIcon({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  const Icon = ICONS[id] ?? HardHat;
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
