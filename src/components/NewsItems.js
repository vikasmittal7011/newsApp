import React  from "react";

const NewsItems = (props) => {
  const { title, desc, img, url, time, author } = props;
  return (
    <div className="m-3">
      <div className="card">
        <img
          src={img}
          className="card-img-top"
          alt="This img is not avilable for now!!"
          style={{ maxHeight: "12rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{desc}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknow" : author} on{" "}
              {new Date(time).toDateString()}
            </small>
          </p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm"
          >
            Further Read...
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;