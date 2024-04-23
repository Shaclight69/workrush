"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import { edit, trash, important } from "@/app/utils/Icons";
import React from "react";
import styled from "styled-components";
import formatDate from "@/app/utils/formatDate";
import { FaExclamationCircle } from "react-icons/fa";
import { AiFillExclamationCircle } from "react-icons/ai";
import EditContent from "../modals/EditContent";
import Modal from "../modals/Modal";

interface Props {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  isImportant: boolean;
  id: string;
}

function TaskItem({
  title,
  description,
  date,
  isCompleted,
  isImportant,
  id,
}: Props) {
  const { currentTheme, deleteTask, updateTask, modal, openModal } =
    useGlobalState();
  return (
    <TaskItemStyled theme={currentTheme}>
      {modal && <Modal content={<EditContent id={id} />} />}
      <h1>{title}</h1>
      <p>{description}</p>
      <p className="date">{formatDate(date)}</p>
      <div className="task-footer">
        {isCompleted ? (
          <button
            className="completed"
            onClick={() => {
              const task = {
                id,
                isCompleted: !isCompleted,
              };

              updateTask(task);
            }}
          >
            Completed
          </button>
        ) : (
          <button
            className="incomplete"
            onClick={() => {
              const task = {
                id,
                isCompleted: !isCompleted,
              };

              updateTask(task);
            }}
          >
            Incomplete
          </button>
        )}

        {isImportant ? (
          <AiFillExclamationCircle
            className="important"
            style={{
              color: "#fcbf49",
              fontSize: "2rem",
            }}
          />
        ) : null}

        <button className="edit" onClick={openModal}>
          {edit}
        </button>
        <button
          className="delete"
          onClick={() => {
            deleteTask(id);
          }}
        >
          {trash}
        </button>
      </div>
    </TaskItemStyled>
  );
}

const TaskItemStyled = styled.div`
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colorItem};
  box-shadow: ${(props) => props.theme.shadow7};
  border: 2px solid ${(props) => props.theme.borderColor};

  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1,
  p,
  .date {
    color: ${(props) => props.theme.colorReverse};
  }

  .date {
    margin-top: auto;
    color: ${(props) => props.theme.colorReverse};
  }

  > h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .task-footer {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    button {
      border: none;
      outline: none;
      cursor: pointer;

      i {
        font-size: 1.4rem;
        color: ${(props) => props.theme.colorGrey2};
      }
    }

    .edit {
      margin-left: auto;
    }

    .completed,
    .incomplete {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: ${(props) => props.theme.colorDanger};
      border-radius: 30px;
    }

    .completed {
      background: ${(props) => props.theme.colorGreenDark} !important;
    }
  }
`;

export default TaskItem;
