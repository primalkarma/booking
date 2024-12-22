import RoomCard from "@/components/RoomCard";
import rooms from "@/data/rooms.json";

export default function Home() {
  return (
    <>
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard key={room.id} room={room}/>)
      ) : (
        <p>No Rooms Available</p>
      )}
    </>
  );
}
