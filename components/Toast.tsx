export default function Toast({ message }: { message: string }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-9999 pointer-events-none">
      <div className="bg-gray-900/90 text-white px-6 py-3 rounded-full shadow-2xl animate-in fade-in zoom-in duration-300">
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
}
