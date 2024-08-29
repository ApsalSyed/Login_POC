import React from 'react';
import { useSelector } from 'react-redux';
import PostNavigation from './PostNavigation';
import PreNavigation from './PreNavigation';

export default function Routes() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return isLoggedIn ?<PostNavigation/>:<PreNavigation/>
}
