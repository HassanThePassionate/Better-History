import TimeSlider from "@/components/TimeSlider";
import History from "@/components/history/History";
import Navbar from "@/components/navbar/Navbar";

export default function Device() {
  return (
    <div>
      <Navbar text='Devices' />
      <TimeSlider showcase={false} />
      <History showcase={false} />
    </div>
  );
}
