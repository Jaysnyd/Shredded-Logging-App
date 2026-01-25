import { PlanType } from "@/types/plan";

export const PLAN_SPLITS: Record<PlanType, string[]> = {
  ppl: ["Push", "Pull", "Legs"],
  fullBody: ["Full Body"],
  upperLower: ["Upper Body", "Lower Body"],
  bodyPart: ["Chest", "Back", "Legs", "Shoulders", "Arms"],
  none: [],
};
