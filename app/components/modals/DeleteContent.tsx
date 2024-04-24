"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { add, deleted, cancel } from "@/app/utils/Icons";
import Button from "../button/Button";

interface Props {
  id: string;
}

function DeleteContent({ id }: Props) {
  const { currentTheme, allTasks, closeDeleteModal, deleteTask, deleteModal } =
    useGlobalState();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      deleteTask(id);
      closeDeleteModal();
      allTasks();
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    }
  };

  return (
    <DeleteContentStyled onSubmit={handleSubmit} theme={currentTheme}>
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete this task ?</p>

      <ButtonWrapper>
        <div className="submit-btn flex gap-x-9 justify-between">
          <Button
            name="Cancel"
            icon={cancel}
            padding={"0.8rem 2rem"}
            borderRad={"0.8rem"}
            fw={"500"}
            fs={"1.2rem"}
            background={"#005066"}
            click={closeDeleteModal}
          />
          <Button
            type="submit"
            name="Delete"
            icon={deleted}
            padding={"0.8rem 2rem"}
            borderRad={"0.8rem"}
            fw={"500"}
            fs={"1.2rem"}
            background={"#660000"}
          />
        </div>
      </ButtonWrapper>
    </DeleteContentStyled>
  );
}

const DeleteContentStyled = styled.form`
  text-align: center;
  p {
    font-size: clamp(1rem, 1vw, 1rem);
    font-weight: 300;
    color: ${(props) => props.theme.colorReverse};
  }
  > h2 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 800;
    color: ${(props) => props.theme.colorReverse};
  }

  .submit-btn button {
    margin-top: 10px;
    transition: all 0.35s ease-in-out;
    color: ${(props) => props.theme.colorWhite} !important;

    @media screen and (max-width: 500px) {
      font-size: 0.9rem !important;
      padding: 0.6rem 1rem !important;

      i {
        font-size: 1.2rem !important;
        margin-right: 0.5rem !important;
      }
    }

    i {
      color: ${(props) => props.theme.colorWhite};
    }

    &:hover {
      background: ${(props) => props.theme.colorPrimaryGreen} !important;
      color: ${(props) => props.theme.colorWhite} !important;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

export default DeleteContent;
