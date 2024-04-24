"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import themes from "./theme";
import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";
import { getCookie, setCookie } from "cookies-next";
import path from "path";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const user = useUser();

  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const themeCookie = getCookie("theme");
    if (themeCookie === "dark") {
      setCurrentTheme(themes[1]);
    } else {
      setCurrentTheme(themes[0]);
    }
    document.body.style.backgroundColor = currentTheme.colorSecBg;
  }, [currentTheme]);

  const openAddModal = () => {
    setAddModal(true);
  };

  const closeAddModal = () => {
    setAddModal(false);
  };

  const openDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const collapseMenu = () => {
    setCollapsed(!collapsed);
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === themes[0] ? themes[1] : themes[0];
    setCurrentTheme(newTheme);
    setCookie("theme", currentTheme.name, { maxAge: 30 * 24 * 60 * 60 * 1000 });
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

  const deleteTask = async (id) => {
    setIsLoading(true);
    try {
      const res = await axios.delete(`/api/tasks/${id}`);
      toast.success("Task deleted successfully");
      allTasks();
    } catch (error) {
      console.log(error);
      toast.error(error);
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
        addModal,
        deleteModal,
        openAddModal,
        closeAddModal,
        openDeleteModal,
        closeDeleteModal,
        allTasks,
        collapsed,
        collapseMenu,
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
