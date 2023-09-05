"use client";

import { ServerWithMembersWithProfiles } from "@/types";
import { MemberRole } from "@prisma/client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  CalendarPlus,
  ChevronDown,
  Diamond,
  FolderPlus,
  FolderTree,
  LogOut,
  Pencil,
  PlusCircle,
  Settings,
  Shield,
  Square,
  Trash,
  UserPlus,
  Users,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { useModal } from "@/hooks/use-modal-store";

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
}

export const ServerHeader = ({ server, role }: ServerHeaderProps) => {
  const { onOpen } = useModal();

  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <button
          className="w-full text-md font-semibold px-3 flex items-center h-12
           border-neutral-200 dark:border-neutral-800 border-b-2
        hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50"
        >
          {server.name}
          <ChevronDown className="h-5 w-5 ml-auto" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
        <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
          Server Boost
          <Diamond className=" text-purple-900 h4 w-4 ml-auto" />
        </DropdownMenuItem>
        <Separator className="w-[90%] mx-auto" />

        {isModerator && (
          <DropdownMenuItem
            onClick={() => onOpen("invite", { server })}
            className="text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer"
          >
            Invite People <UserPlus className="h4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}

        {isAdmin && (
          <DropdownMenuItem
            onClick={() => onOpen("editServer", { server })}
            className="px-3 py-2 text-sm cursor-pointer"
          >
            Server Settings
            <Settings className="h4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}

        {isModerator && (
          <>
            <DropdownMenuItem
              onClick={() => onOpen("members", { server })}
              className="px-3 py-2 text-sm cursor-pointer"
            >
              Manage Members
              <Users className="h4 w-4 ml-auto" />
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onOpen("createChannel", { server })}
              className="px-3 py-2 text-sm cursor-pointer"
            >
              Create Channel
              <PlusCircle className="h4 w-4 ml-auto" />
            </DropdownMenuItem>
            <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
              Create Category
              <FolderPlus className="h4 w-4 ml-auto" />
            </DropdownMenuItem>
            <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
              Create Event
              <CalendarPlus className="h4 w-4 ml-auto" />
            </DropdownMenuItem>{" "}
          </>
        )}

        <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
          App Directory
          <FolderTree className="h4 w-4 ml-auto" />
        </DropdownMenuItem>
        <Separator className="w-[90%] mx-auto" />
        <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
          Notification Settings
          <Bell className="h4 w-4 ml-auto" />
        </DropdownMenuItem>
        <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
          Privacy Settings
          <Shield className="h4 w-4 ml-auto" />
        </DropdownMenuItem>
        <Separator className="w-[90%] mx-auto" />
        <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
          Edit Server Profile
          <Pencil className="h4 w-4 ml-auto" />
        </DropdownMenuItem>
        <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
          Hide Muted Channels
          <Square className="h4 w-4 ml-auto" />
        </DropdownMenuItem>

        {isAdmin && (
          <>
            <Separator className="w-[90%] mx-auto" />
            <DropdownMenuItem
              onClick={() => onOpen("deleteServer", { server })}
              className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
            >
              Delete Server
              <Trash className="h4 w-4 ml-auto" />
            </DropdownMenuItem>{" "}
          </>
        )}

        {!isAdmin && (
          <>
            <Separator className="w-[90%] mx-auto" />
            <DropdownMenuItem
              onClick={() => onOpen("leaveServer", { server })}
              className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
            >
              Leave Server
              <LogOut className="h4 w-4 ml-auto" />
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
