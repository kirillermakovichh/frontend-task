"use client";

import { SessionProvider } from "next-auth/react";

/**
 * The AuthProvider function is a wrapper component that provides authentication functionality to its
 * children components.
 * @returns The AuthProvider component is returning the SessionProvider component with the children
 * prop passed as its children.
 */
export default function AuthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
