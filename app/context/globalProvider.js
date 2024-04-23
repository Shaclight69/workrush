"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import themes from "./theme";
import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const user = useUser();

  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
    completed: false,
    important: false,
  });

  useEffect(() => {
    document.body.style.backgroundColor = currentTheme.colorSecBg;
  }, [currentTheme]);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const collapseMenu = () => {
    setCollapsed(!collapsed);
  };

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === themes[0] ? themes[1] : themes[0]);
  };

  const allTasks = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/tasks");
      setTasks(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/api/tasks/${id}`);
      setTask(res.data);
      console.log(res);
      setIsLoading(false);
    } catch (error) {
      toast.error("Error fetching task data.");
      console.log(error);
    }
  };

  const editTask = async (task) => {
    setIsLoading(true);
    try {
      const res = await axios.put(`/api/tasks/${id}`, task);

      if (res.data.error) {
        toast.error(res.data.error);
      }

      if (!res.data.error) {
        toast.success("Task updated successfully.");

        setIsLoading(false);
        closeModal();
        allTasks();
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    setIsLoading(true);
    try {
      const res = await axios.delete(`/api/tasks/${id}`);
      toast.success("Task deleted successfully");
      allTasks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const updateTask = async (task) => {
    try {
      const res = await axios.put(`/api/tasks`, task);

      toast.success("Task updated successfully");

      allTasks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const completedTasks = tasks.filter((task) => task.isCompleted === true);
  const importantTasks = tasks.filter((task) => task.isImportant === true);
  const incompleteTasks = tasks.filter((task) => task.isCompleted === false);

  useEffect(() => {
    if (user) allTasks();
  }, [user]);

  return (
    <GlobalContext.Provider
      value={{
        currentTheme,
        toggleTheme,
        tasks,
        deleteTask,
        isLoading,
        completedTasks,
        importantTasks,
        incompleteTasks,
        updateTask,
        modal,
        openModal,
        closeModal,
        allTasks,
        collapsed,
        collapseMenu,
        getTask,
        editTask,
      }}
    >
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
