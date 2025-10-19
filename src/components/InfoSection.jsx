export default function InfoSection({ title, articleArray, image, additional, theme }) {
  const articles = articleArray.map((article, i) => <p key={i}>{article}</p>);

  return (
    <div className={`grid w-full xl:grid-cols-2 gap-6 xl:gap-24 text-sky-900 ${theme == "dark" && "dark"}`}>
      <img loading="lazy"  className="rounded-md object-cover h-52 xl:h-96 w-full" src={image} alt="clinic" />
      <div className="flex flex-col gap-6 text-lg xl:text-xl">
        <h3 className="text-2xl xl:text-4xl font-medium">{title}</h3>
        <div className="flex flex-col justify-start gap-6">
          {articles}
        </div>
        {additional || ""}
      </div>
    </div>
  );
}
