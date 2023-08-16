'use client'

import React from 'react';
import { styled } from '../../stitches.config';
import { Avatar } from '@/components/Avatar';

const AvatarPage = () => (
  <>
  <Avatar size="md"  alt="David Nuges" badgePosition="top-right" badgeStatus="online" variant='square'/>
  <Avatar size="lg"  alt="David Nuges" badgePosition="top-right" badgeStatus="online" />
  <Avatar size="xl"  alt="David Nuges" badgePosition="top-right" badgeStatus="online" />
  <Avatar size="2xl"  alt="David Nuges" badgePosition="top-right" badgeStatus="online" />
</>
);





export default AvatarPage;