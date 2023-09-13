"use client";

import React from "react";
import { Avatar } from "@/src";

const AvatarPage = () => (
  <>
    <Avatar
      size="md"
      alt="David Nuges"
      badgePosition="top-right"
      badgeStatus="online"
      variant="square"
    />
    <Avatar
      size="lg"
      alt="David Nuges"
      badgePosition="top-right"
      badgeStatus="online"
    />
    <Avatar
      size="xl"
      alt="David Nuges"
      badgePosition="top-right"
      badgeStatus="online"
    />
    <Avatar
      size="2xl"
      alt="David Nuges"
      badgePosition="top-right"
      badgeStatus="online"
    />
  </>
);

export default AvatarPage;
