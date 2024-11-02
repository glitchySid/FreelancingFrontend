export default function Card({ icon, title }) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-sky-100`}
    >
      <div className="w-8 h-12 mb-4">{icon}</div>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  );
}
