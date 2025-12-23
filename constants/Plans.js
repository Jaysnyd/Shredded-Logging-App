// WORKOUT PLANS
// Plans will be determined based off of which one user chooses and when they choose to start the plan.

// If user were to choose PPL and to start on a Wednesday, then Wednesday would be PUSH

// Their plan will populate as headers in TodaysFocus on the Dashboard Screen and Logging Screen.

const plans = [
  // PUSH PULL LEGS
  // Ex. M - Push, T - Pull, W - Legs, TH - Push, FRI - Pull, SAT - Legs, SUN - Rest
  {
    id: "PPL",
    startDate: "",
    days: [
      {
        key: "push",
        label: "Push Day",
        focus: ["Chest", "Shoulders", "Triceps"],
      },
      { key: "pull", label: "Pull Day", focus: ["Back, Biceps"] },
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
      { key: "pull", label: "Pull Day", focus: ["Back, Biceps"] },
      {
        key: "legs",
        label: "Leg Day",
        focus: ["Quads", "Hamstrings", "Glutes"],
      },
      {
        key: "rest",
        label: "Rest Day",
        focus: ["Rest your Shreds today!"],
      },
    ],
  },
  // FULL BODY
  // Ex. M - Full Body, T - Rest/Active, W - Full Body, TH - Rest/Active, FRI - Full Body, SAT - Rest, SUN - Rest
  {
    id: "FB",
    startDate: "",
    days: [
      {
        key: "full",
        label: "Full Body",
        focus: ["Upper", "Lower", "Core"],
      },
      {
        key: "rest",
        label: "Rest/Active Recovery",
        focus: ["Rest your Shreds today!"],
      },
      {
        key: "full",
        label: "Full Body",
        focus: ["Upper", "Lower", "Core"],
      },
      {
        key: "rest",
        label: "Rest/Active Recovery",
        focus: ["Rest your Shreds today!"],
      },
      {
        key: "full",
        label: "Full Body",
        focus: ["Upper", "Lower", "Core"],
      },
      {
        key: "rest",
        label: "Rest Day",
        focus: ["Rest your Shreds today!"],
      },
      {
        key: "rest",
        label: "Rest Day",
        focus: ["Rest your Shreds today!"],
      },
    ],
  },
  // UPPER LOWER
  // M - Upper, T - Lower, W - Rest, TH - Upper, FRI - Lower, SAT - Rest, SUN - Rest
  {
    id: "UL",
    startDate: "",
    days: [
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
      {
        key: "rest",
        label: "Rest Day",
        focus: [],
      },
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
      {
        key: "rest",
        label: "Rest Day",
        focus: [],
      },
      {
        key: "rest",
        label: "Rest Day",
        focus: [],
      },
    ],
  },
  // BODY PART
  // M - Chest, T - Back, W - Shoulders, TH - Legs, F - Arms, SAT - Rest, SUN - Rest
  {
    id: "BP",
    startDate: "",
    days: [
      {
        key: "chest",
        label: "Chest Day",
        focus: ["Foucs on Chest Muscles"],
      },
      {
        key: "back",
        label: "Back Day",
        focus: ["Focus on Back Muscles"],
      },
      {
        key: "shoulders",
        label: "Shoulder Day",
        focus: ["Focus on Shoulder Muscles"],
      },
      {
        key: "legs",
        label: "Leg Day",
        focus: ["Focus on Leg Muscles"],
      },
      {
        key: "arms",
        label: "Arm Day",
        focus: ["Biceps", "Triceps"],
      },
      {
        key: "rest",
        label: "Rest Day",
        focus: "Rest your Shreds today!",
      },
      {
        key: "rest",
        label: "Rest Day",
        focus: "Rest your Shreds today!",
      },
    ],
  },
];

export default plans;
