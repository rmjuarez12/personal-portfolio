import React from "react";

export interface TimelineSectionObj {
  date: string | React.ReactNode;
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
}
