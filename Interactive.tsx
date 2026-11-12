"use client";

import { useEffect } from "react";
import behavior from "./behavior";

export function Behavior() {
  useEffect(() => {
    // behavior.js is an IIFE that binds to the DOM; run once on mount.
    const s = document.createElement("script");
    s.textContent = behavior;
    document.body.appendChild(s);
    return () => {
      s.remove();
    };
  }, []);
  return null;
}
