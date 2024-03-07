import React from "react";

export interface TimelineSectionObj {
  date: string | React.ReactNode;
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  headlingURL?: string;
}

export interface SkillObj {
  title: string;
  icon: React.ReactNode;
}
