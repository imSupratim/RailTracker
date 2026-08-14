export default function ErrorState({ message }) {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <h1 className="text-red-500 text-xl">{message}</h1>
    </div>
  );
}
