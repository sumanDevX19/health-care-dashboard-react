import React from "react";
import classNames from "classnames";

export function Card({ className, children }) {
  return (
    <div
      className={classNames(
        "bg-white shadow-sm border border-gray-200",
        "rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardContent({ className, children }) {
  return <div className={classNames("p-4", className)}>{children}</div>;
}
