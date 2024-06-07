import ProximosBazares from "@/components/HomeBanners/ProximosBazares";
import ProductSmallView from "@/components/SmallViews/ProductSmallView";
export default function Home() {
  return (
    <main className="flex  mt-16  mx-auto  lg:max-w-7xl overflow-auto">
      <div className="flex flex-col w-10/12 mx-auto  lg:max-w-7xl ">
        <div className=" grid grid-cols-4 gap-4 py-10 px-20">
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
        <ProximosBazares className=" relative flex justify-center " />
      </div>
    </main>
  );
}
