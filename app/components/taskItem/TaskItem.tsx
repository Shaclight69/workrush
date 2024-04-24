"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import { edit, trash, important } from "@/app/utils/Icons";
import React from "react";
import styled from "styled-components";
import formatDate from "@/app/utils/formatDate";
import { FaExclamationCircle } from "react-icons/fa";
import { AiFillExclamationCircle } from "react-icons/ai";
import Modal from "../modals/Modal";
import DeleteContent from "../modals/DeleteContent";

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
  const {
    currentTheme,
    updateTask,
    openDeleteModal,
    deleteModal,
    closeDeleteModal,
  } = useGlobalState();
  return (
    <TaskItemStyled theme={currentTheme}>
      {deleteModal && (
        <Modal
          content={<DeleteContent id={id} />}
          closeModal={closeDeleteModal}
        />
      )}

      <h2>{title}</h2>
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

        <button className="edit">{edit}</button>
        <button className="delete" onClick={openDeleteModal}>
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

  > h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.colorReverse};
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
    .delete {
      color: ${(props) => props.theme.colorDanger};
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
