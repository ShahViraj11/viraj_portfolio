import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ReactElement, useEffect, useState } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

