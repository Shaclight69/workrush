"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";
import { add, plus, sun, moon, heart } from "@/app/utils/Icons";
import Modal from "../modals/Modal";
import TaskItem from "../taskItem/TaskItem";
import CreateContent from "../modals/CreateContent";
import { FaMoon, FaSun } from "react-icons/fa";

interface Props {
  title: string;
  tasks: any[];
}

function Tasks({ title, tasks }: Props) {
  const { currentTheme, toggleTheme, openAddModal, addModal, closeAddModal } =
    useGlobalState();

  return (
    <TaskStyled theme={currentTheme}>
      {addModal && (
        <Modal content={<CreateContent />} closeModal={closeAddModal} />
      )}
      <div className="top-wrapper">
        <h1>{title}</h1>

        <div className="flex gap-x-2 ">
          <button className="btn-rounded" onClick={openAddModal}>
            {plus}
          </button>
          <button className="btn-rounded" onClick={toggleTheme}>
            {currentTheme.name === "dark" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>

      <div className="tasks grid">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.isCompleted}
            isImportant={task.isImportant}
            id={task.id}
          />
        ))}
        <button className="create-task" onClick={openAddModal}>
          {add}
          Add New Task
        </button>
      </div>
    </TaskStyled>
  );
}

const TaskStyled = styled.main`
  position: relative;
  padding: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.colorMainBg};
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 1rem;
  height: 100%;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  .top-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn-rounded {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.borderColor};
    box-shadow: ${(props) => props.theme.shadow7};
    color: ${(props) => props.theme.colorGrey2};
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tasks {
    margin: 2rem 0;
  }

  h1 {
    color: ${(props) => props.theme.colorReverse};
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 800;
    position: relative;
  }

  h1::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 3rem;
    height: 0.2rem;
    background-color: ${(props) => props.theme.colorPrimaryGreen};
    border-radius: 0.5rem;
  }

  .create-task {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 16rem;
    color: ${(props) => props.theme.colorGrey2};
    font-weight: 600;
    cursor: pointer;
    border-radius: 1rem;
    border: 3px dashed ${(props) => props.theme.colorGrey5};
    transition: all 0.3s ease;

    i {
      font-size: 1.5rem;
      margin-right: 0.2rem;
    }

    &:hover {
      background-color: ${(props) => props.theme.colorGrey5};
      color: ${(props) => props.theme.colorGrey0};
    }
  }
`;

export default Tasks;
