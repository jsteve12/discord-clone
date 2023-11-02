"use client";
import { useSocket } from "@/components/providers/socket-provider";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  const label = isConnected
    ? "Live: Real-time updates"
    : "Fallback: Polling every 1s";

  return (
    <Badge
      variant="outline"
      className={cn(
        "px-2 rounded-full text-[12px] text-white border-none",
        isConnected ? "bg-emerald-600" : "bg-yellow-600"
      )}
    >
      {label}
    </Badge>
  );
};
