// pages/_middleware.js

import { NextResponse } from 'next/server';

export function middleware(req) {
  const { token } = req.cookies;

  // Check if the user is logged in
  if (!token) {
    // If not logged in, redirect to login page
    return NextResponse.redirect(new URL('/user/login', req.url));
  }

  return NextResponse.next(); // Allow the request to proceed if logged in
}