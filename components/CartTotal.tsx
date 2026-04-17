export default function CartTotal({ totalPrice }: { totalPrice: number }) {
  return (
    <div className=" p-2  flex justify-between items-center bg-[#f6f6f6]">
      <span className="font-bold">Summa:</span>
      <span>{Math.ceil(totalPrice)} kr</span>
    </div>
  );
}
