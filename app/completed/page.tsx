"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "../components/tasks/Tasks";

function page() {
  const { completedTasks } = useGlobalState();

  return <Tasks title="Completed Tasks" tasks={completedTasks} />;
}

export default page;
