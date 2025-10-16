// components/ui/Badge.tsx
export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-gray-100 dark:bg-gray-700">
      {children}
    </span>
  );
}
