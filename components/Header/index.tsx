import React from "react";
import Link from "next/link";
import Avatar from "./Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Header() {
  return (
    <header className="flex w-full p-6 pb-0 justify-between text-sm text-gray-700 sticky top-0">
      {/* Left */}
      <div className="flex space-x-4 mx-10 items-center">
        <p className="link">Store</p>
      </div>

      {/* Right */}
      <div className="flex space-x-4 mx-10 items-center">
        <a className="link" href="/doc">
          Doc
        </a>
        <p className="link">About</p>

        {/* Icon */}
        <IconButton aria-label="github">
          <GitHubIcon color="primary" />
        </IconButton>

        {/* Avatar */}
        <Avatar url="https://i.redd.it/ra3fqmi60ct61.jpg" />
      </div>
    </header>
  );
}
