export type PlanType = "ppl" | "fullBody" | "upperLower" | "bodyPart" | "none";

export type TrainingPlan = {
  type: PlanType;
  startDate: string;
  startIndex: number;
};

export interface PlanDay {
  key: string;
  label: string;
  focus: string[];
}

export interface PlanDefinition {
  id: PlanType;
  startDate: string;
  cycle: PlanDay[];
}
