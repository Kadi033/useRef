import './Cards.css'
const Cards = () => {
  return (
    <div className="justify-center gap-4 cards">
      <div>
        <div className="border-[#ffffff26] rounded-lg border-solid border p-4 hover:bg-[#2f2f2f] cursor-pointer ">
          <h1 className="w-80 text-white font-bold">Write Text</h1>
          <p className="text-[#ececec] opacity-50">
            asking a friend to be my plus-one at a wedding
          </p>
        </div>
        <div className="border-[#ffffff26] rounded-lg border-solid border p-4 mt-4 hover:bg-[#2f2f2f] cursor-pointer ">
          <h1 className="w-80 text-white font-bold">Write a thank-you note</h1>
          <p className="text-[#ececec] opacity-50">to my interviewer</p>
        </div>
      </div>

      <div>
        <div className="border-[#ffffff26] rounded-lg border-solid border p-4 hover:bg-[#2f2f2f] cursor-pointer ">
          <h1 className="w-80 text-white font-bold">
            Design a programming game
          </h1>
          <p className="text-[#ececec] opacity-50">teach basics in a fun way</p>
        </div>
        <div className="border-[#ffffff26] rounded-lg border-solid border p-4 mt-4 hover:bg-[#2f2f2f] cursor-pointer ">
          <h1 className="w-80 text-white font-bold">
            Quiz me on world capitals
          </h1>
          <p className="text-[#ececec] opacity-50">
            to enhance my geography skills
          </p>
        </div>
      </div>
    </div>
  );
};
export default Cards;
