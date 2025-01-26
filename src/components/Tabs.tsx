export default function Tabs() {
  return (
    <div className="">
      <div className="flex justify-start space-x-5">
        <button className="rounded-[32px] border px-[44px] py-1 text-primary hover:bg-secondary hover:shadow-sm">
          All
        </button>
        <button className="rounded-[32px] border px-[44px] py-1 text-primary hover:bg-secondary hover:shadow-sm">
          Frontend
        </button>
        <button className="rounded-[32px] border px-[44px] py-1 text-primary hover:bg-secondary hover:shadow-sm">
          Freelancing
        </button>
        <button className="rounded-[32px] border px-[44px] py-1 text-primary hover:bg-secondary hover:shadow-sm">
          Fullstack
        </button>
        <button className="rounded-[32px] border px-[44px] py-1 text-primary hover:bg-secondary hover:shadow-sm">
          Archive
        </button>
      </div>
    </div>
  );
}
