export default function Pagination() {
  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button className="h-8 w-8 rounded-full border border-[#E0E0E0] bg-white text-[#888] hover:bg-[#F1F3F5]">
        &lt;
      </button>
      <button className="h-8 w-8 rounded-full border border-[#4C6EF5] bg-[#4C6EF5] font-bold text-white">
        1
      </button>
      <button className="h-8 w-8 rounded-full border border-[#E0E0E0] bg-white text-[#888] hover:bg-[#F1F3F5]">
        2
      </button>
      <button className="h-8 w-8 rounded-full border border-[#E0E0E0] bg-white text-[#888] hover:bg-[#F1F3F5]">
        &gt;
      </button>
    </div>
  );
}
