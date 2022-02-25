import Footer from "./footer";
import Sidebar from "./Sidebar";
import PubBanner from "./PubBanner";

export default function Layout(props) {
  return (
    <div className="flex flex-row min-h-screen bg-backcolor-500">
      <Sidebar className="sm:z-40 sm:absolute transition-all duration-300 ease-linear" />
      <main className="flex-1 lg:container px-4 py-2 md:py-3 mx-auto md:px-6">
        <PubBanner />
        {props.children}
      </main>
    </div>
  );
}
