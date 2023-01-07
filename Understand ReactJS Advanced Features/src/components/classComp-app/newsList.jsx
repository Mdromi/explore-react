import React from "react";

const TextLink = ({ value, item }) => (
  <a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#424242" }}
  >
    {value && value}
  </a>
);

const getDateString = (dateTimeStr) => {
  return new Date(dateTimeStr).toString();
};

const NewsItem = React.forwardRef(({ item }, ref) => (
  <div ref={el => ref.push(el)} className="card mb-4">
    {item.urlToImage && (
      <img src={item.urlToImage} alt={item.title} className="card-img-top" />
    )}
    <div className="card-body">
      <TextLink value="" item={item}>
        <h5 className="card-title">{item.title}</h5>
      </TextLink>
      <TextLink value={item.content} item={item} />
      <div className="mt-2 d-flex align-item-center">
        <small>
          <strong>published at {getDateString(item.publishedAt)}</strong>
        </small>
        <div
          style={{
            padding: ".25rem .5rem",
            background: "#ededed",
            color: "#424242",
            borderRadius: ".25rem",
            display: "inline-block",
          }}
          className="ml-auto"
        >
          <small>{item.source.name}</small>
        </div>
      </div>
    </div>
  </div>
));

const NewsList = React.forwardRef(({ news }, ref) => {
  return (
    <div>
      {news && news.length === 0 && <h4>There is no news</h4>}
      {news &&
        news.map((item) => <NewsItem ref={ref} key={item.title} item={item} />)}
    </div>
  );
});

export default NewsList;
