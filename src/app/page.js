import RegistraTuBazar from "@/components/HomeBanners/RegistraTuBazar";
import ProductSmallView from "@/components/SmallViews/ProductSmallView";
export default function Home() {
  return (
    <main className="flex mt-16  mx-auto  lg:max-w-7xl overflow-auto">
      <div className="w-10/12 grid grid-cols-4 gap-4 py-10 px-20">
        <ProductSmallView />
        <ProductSmallView />
        <ProductSmallView />
        <ProductSmallView />
        <ProductSmallView />
        <ProductSmallView />
        <ProductSmallView />
        <ProductSmallView />
        <ProductSmallView />
        <ProductSmallView />
        <ProductSmallView />
        <ProductSmallView />
        <ProductSmallView />
      </div>
      <RegistraTuBazar className="w-1/6 relative flex justify-center " />
    </main>
  );
}
