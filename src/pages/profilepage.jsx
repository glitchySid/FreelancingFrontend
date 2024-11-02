import NavBar from "../components/navbar";

export default function ProfilePage() {
  const Name = "Siddhesh";
  const Role = "Seller";
  return (
    <div>
      <NavBar />
      <div>
        <div
          className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-sky-100`}
        >
          <div className="w-8 h-12 mb-4"><p>{Name}</p></div>
          <h3 className="text-lg font-medium">{Role}</h3>
        </div>
      </div>
    </div>
  );
}
