const paths: Record<string, string> = {
  compass: "M12 2a10 10 0 100 20 10 10 0 000-20zM15 9l-2 6-6 2 2-6 6-2z",
  target: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 8a4 4 0 100 8 4 4 0 000-8zM12 11a1 1 0 100 2 1 1 0 000-2z",
  rocket: "M12 2c2 2 4 5 4 9 0 2-1 4-2 5l-2 2-2-2c-1-1-2-3-2-5 0-4 2-7 4-9zM8 15l-3 3M16 15l3 3M9 19l1 2M14 19l-1 2",
  book: "M4 4h7a2 2 0 012 2v14a2 2 0 00-2-2H4V4zM20 4h-7a2 2 0 00-2 2v14a2 2 0 012-2h7V4z",
  users: "M8 11a3 3 0 100-6 3 3 0 000 6zM16 11a3 3 0 100-6 3 3 0 000 6zM2 20c0-3 3-5 6-5s6 2 6 5M12 20c0-3 3-5 6-5s4 1 4 3v2",
  feather: "M20 4c-4 0-14 2-16 12 2 0 6-1 9-4M4 20l8-8M4 20l4-1",
  landmark: "M3 21h18M4 21V10l8-6 8 6v11M9 21V13M15 21V13",
  refresh: "M4 4v6h6M20 20v-6h-6M4 10a8 8 0 0114-5l2 1M20 14a8 8 0 01-14 5l-2-1",
  handshake: "M2 12l5-5 4 2 4-2 5 5M8 9l4 4M13 9l4 4M6 14l2 2M16 14l-2 2"
};

export default function Icon({
  name,
  className = "h-6 w-6"
}: {
  name: string;
  className?: string;
}) {
  const d = paths[name] || paths.target;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={d} />
    </svg>
  );
}
