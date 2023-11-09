"use client";

import { useParams } from "next/navigation";
import { projects } from "../data";

export default function Project() {
  const params = useParams();
  const matched = projects.find((project) => project.id === +params.id);

  return matched && <div>{matched.name}</div>;
}
