import { PlanDefinition, PlanType } from "@/types/plan";

export const PLAN_DEFINITIONS: Record<PlanType, PlanDefinition> = {
  ppl: {
    id: "ppl",
    startDate: "",
    cycle: [
      {
        key: "push",
        label: "Push Day",
        focus: ["Chest", "Shoulders", "Triceps"],
      },
      { key: "pull", label: "Pull Day", focus: ["Back", "Biceps"] },
      {
        key: "legs",
        label: "Leg Day",
        focus: ["Quads", "Hamstrings", "Glutes"],
      },
      {
        key: "push",
        label: "Push Day",
        focus: ["Chest", "Shoulders", "Triceps"],
      },
      { key: "pull", label: "Pull Day", focus: ["Back", "Biceps"] },
      {
        key: "legs",
        label: "Leg Day",
        focus: ["Quads", "Hamstrings", "Glutes"],
      },
      { key: "rest", label: "Rest Day", focus: ["Rest your Shreds today!"] },
    ],
  },

  fullBody: {
    id: "fullBody",
    startDate: "",
    cycle: [
      { key: "full", label: "Full Body", focus: ["Upper", "Lower", "Core"] },
      {
        key: "rest",
        label: "Rest / Recovery",
        focus: ["Rest your Shreds today!"],
      },
      { key: "full", label: "Full Body", focus: ["Upper", "Lower", "Core"] },
      {
        key: "rest",
        label: "Rest / Recovery",
        focus: ["Rest your Shreds today!"],
      },
      { key: "full", label: "Full Body", focus: ["Upper", "Lower", "Core"] },
      { key: "rest", label: "Rest Day", focus: ["Rest your Shreds today!"] },
      { key: "rest", label: "Rest Day", focus: ["Rest your Shreds today!"] },
    ],
  },

  upperLower: {
    id: "upperLower",
    startDate: "",
    cycle: [
      {
        key: "upper",
        label: "Upper Body",
        focus: ["Chest", "Back", "Shoulders", "Arms"],
      },
      {
        key: "lower",
        label: "Lower Body",
        focus: ["Quads", "Hamstrings", "Glutes", "Calves"],
      },
      { key: "rest", label: "Rest Day", focus: [] },
      {
        key: "upper",
        label: "Upper Body",
        focus: ["Chest", "Back", "Shoulders", "Arms"],
      },
      {
        key: "lower",
        label: "Lower Body",
        focus: ["Quads", "Hamstrings", "Glutes", "Calves"],
      },
      { key: "rest", label: "Rest Day", focus: [] },
      { key: "rest", label: "Rest Day", focus: [] },
    ],
  },

  bodyPart: {
    id: "bodyPart",
    startDate: "",
    cycle: [
      { key: "chest", label: "Chest Day", focus: ["Focus on Chest Muscles"] },
      { key: "back", label: "Back Day", focus: ["Focus on Back Muscles"] },
      {
        key: "shoulders",
        label: "Shoulder Day",
        focus: ["Focus on Shoulder Muscles"],
      },
      { key: "legs", label: "Leg Day", focus: ["Focus on Leg Muscles"] },
      { key: "arms", label: "Arm Day", focus: ["Biceps", "Triceps"] },
      { key: "rest", label: "Rest Day", focus: ["Rest your Shreds today!"] },
      { key: "rest", label: "Rest Day", focus: ["Rest your Shreds today!"] },
    ],
  },

  none: {
    id: "none",
    startDate: "",
    cycle: [
      { key: "none", label: "Shred your way", focus: ["No Plan Selected"] },
    ],
  },
};
