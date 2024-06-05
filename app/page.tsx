import DateSlider from "@/components/DateSlider";
import TimeSlider from "@/components/TimeSlider";
import History from "@/components/history/History";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar text='Activity' />
      <DateSlider />
      <TimeSlider showcase={true} />
      <History showcase={true} />
    </div>
  );
}
