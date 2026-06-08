"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"

import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"

function Sheet({ ...props }) {
  return <SheetPrimitive.Root {...props} />
}

function SheetTrigger({ ...props }) {
  return <SheetPrimitive.Trigger {...props} />
}

function SheetClose({ ...props }) {
  return <SheetPrimitive.Close {...props} />
}

function SheetPortal({ ...props }) {
  return <SheetPrimitive.Portal {...props} />
}

function SheetOverlay({ className, ...props }) {
  return (
    <SheetPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-40 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return (
    <SheetPortal>
      <SheetOverlay />

      <SheetPrimitive.Content
        className={cn(
          "fixed top-0 z-50 h-screen w-[300px] bg-white shadow-2xl p-6",

          side === "right" && "right-0 border-l",
          side === "left" && "left-0 border-r",

          className
        )}
        {...props}
      >
        {children}

        {showCloseButton && (
          <SheetPrimitive.Close asChild>
            <button
              className="absolute top-4 right-4 flex items-center justify-center"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        className
      )}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }) {
  return (
    <div
      className={cn(
        "mt-auto flex flex-col gap-2",
        className
      )}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }) {
  return (
    <SheetPrimitive.Title
      className={cn(
        "text-lg font-semibold",
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({ className, ...props }) {
  return (
    <SheetPrimitive.Description
      className={cn(
        "text-sm text-gray-500",
        className
      )}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}