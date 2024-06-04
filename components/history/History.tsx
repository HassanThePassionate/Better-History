import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import HistoryItem from "./HistroyItem";
  
const History = () => {
    return ( 
        <div className="p-3 max-w-[1024px]">
       <div className="pl-[40px]">
       <Card className="bg-transparent  mt-3 mb-4">
  <CardHeader>
    <CardTitle>Your History</CardTitle>
    <CardDescription>Your lastet History</CardDescription>
  </CardHeader>
  <CardContent>
<HistoryItem domains = 'www.google.com'/>
<HistoryItem domains = 'www.youtube.com'/>
<HistoryItem domains = 'www.facebook.com'/>
<HistoryItem domains = 'www.apple.com'/>
<HistoryItem domains = 'https://chromewebstore.google.com/detail/egehpkpgpgooebopjihjmnpejnjafefi'/>
<HistoryItem domains = 'https://filecr.com/en/'/>
<HistoryItem domains = 'https://anygame.net/en/?id=751308672000'/>
<HistoryItem domains = 'https://www.daraz.pk/'/>
<HistoryItem domains = 'https://ui.shadcn.com/docs'/>
<HistoryItem domains = 'https://www.amazon.com/'/>
<HistoryItem domains = 'https://react-icons.github.io/react-icons/search/#q=arrow'/>
<HistoryItem domains = 'https://online-video-cutter.com/remove-logo'/>
  </CardContent>

</Card>

       </div>
        </div>
     );
}
 
export default History;