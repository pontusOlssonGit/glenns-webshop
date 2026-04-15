export default function RouterBackButton() {
    return (
        <button
            onClick={() => window.history.back()}
            className="absolute right-0 top-0 font-bold h-13 w-13 p-3 bg-[#ef085f] rounded-bl-full text-white justify-start  pl-6 pb-6 flex hover:bg-[#a30641]"
        >
            ✕
        </button>
    )
}