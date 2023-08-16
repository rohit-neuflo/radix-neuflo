'use client'

import React from 'react';
import { styled } from '../../stitches.config';
import { Avatar } from '@/components/Avatar';

const AvatarPage = () => (
  <>
  <Avatar sizes="md" src="avatar-image-url" alt="User" badgePosition="top-right" badgeStatus="online" />
  <Avatar sizes="lg" src="avatar-image-url" alt="User" badgePosition="top-right" badgeStatus="online" />
  <Avatar sizes="xl" src="avatar-image-url" alt="User" badgePosition="top-right" badgeStatus="online" />
  <Avatar sizes="2xl" src="avatar-image-url" alt="User" badgePosition="top-right" badgeStatus="online" />


  </>
);





export default AvatarPage;