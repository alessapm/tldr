import Link from "next/link";

const MediaSite = ({ mediaObj }) => {

  return (
    <>
      <Link
        href={{
          pathname: `/topStories/${mediaObj.title.toLowerCase()}`,
          query: {
            brand: mediaObj.title,
            articleUrl: mediaObj.url,
            networkImage: mediaObj.imageUrl,
            color: mediaObj.color
          },
        }}
      >
        <div className="my-5 w-[326px] h-[125px] flex md:w-[25rem] border-slate-100 rounded-md border-[6px] shadow-md cursor-pointer hover:shadow-xl hover:border-slate-300">
          <div>
            <img
              className="h-full w-40 object-cover"
              src={`${mediaObj.imageUrl}`}
            />
          </div>
          <div className="p-5 md:p-8">
            <h1 className="font-bold text-xl">{mediaObj.title}</h1>
            <span className="text-xs text-gray-500">{mediaObj.url}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MediaSite;
