import React from "react";

export function Copyright() {
  return (
    <>
      {"© " + new Date().getFullYear() + " "}
      <a href="">Website</a>
    </>
  );
}
