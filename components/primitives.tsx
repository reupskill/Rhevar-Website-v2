"use client";

import styled, { css } from "styled-components";

export const Button = styled.a<{
  $variant: "gradient" | "outline" | "dark";
  $full?: boolean;
}>`
  appearance: none;
  cursor: pointer;
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 56px;
  padding: 0 28px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  border: 0;
  width: ${(p) => (p.$full ? "100%" : "auto")};
  transition:
    box-shadow var(--rh-duration-base) var(--rh-ease),
    transform var(--rh-duration-base) var(--rh-ease),
    background var(--rh-duration-base) var(--rh-ease),
    border-color var(--rh-duration-base) var(--rh-ease);

  ${(p) =>
    p.$variant === "gradient" &&
    css`
      background: var(--rh-gradient);
      color: #fff;
      &:hover {
        box-shadow: var(--rh-shadow-brand);
        transform: translateY(-1px);
        color: #fff;
      }
    `}

  ${(p) =>
    p.$variant === "outline" &&
    css`
      border: 1px solid #eaecf0;
      background: #fff;
      color: #080f19;
      &:hover {
        border-color: #c9cdd6;
        color: #080f19;
      }
    `}

  ${(p) =>
    p.$variant === "dark" &&
    css`
      height: 40px;
      padding: 0 18px;
      font-size: 14px;
      background: #080f19;
      color: #fff;
      &:hover {
        background: #1a1f2e;
        color: #fff;
      }
    `}

  &:active {
    transform: scale(0.98);
  }
`;

export const HoverLink = styled.a<{
  $color: string;
  $hoverColor: string;
  $fontWeight?: number | string;
}>`
  color: ${(p) => p.$color};
  font-weight: ${(p) => p.$fontWeight ?? "inherit"};
  &:hover {
    color: ${(p) => p.$hoverColor};
  }
`;

export const PillToggle = styled.button`
  appearance: none;
  cursor: pointer;
  font-family: inherit;
  height: 40px;
  padding: 0 16px;
  border-radius: 9999px;
  border: 1px solid #d5d9e0;
  background: #fff;
  color: #1a1f2e;
  font-size: 14px;
  font-weight: 500;
  transition:
    background var(--rh-duration-base) var(--rh-ease),
    border-color var(--rh-duration-base) var(--rh-ease);
  &:hover {
    border-color: #080f19;
  }
`;

export const TabButton = styled.button`
  appearance: none;
  cursor: pointer;
  font-family: inherit;
  height: 34px;
  padding: 0 18px;
  border: 0;
  border-radius: 9999px;
  background: transparent;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
`;
