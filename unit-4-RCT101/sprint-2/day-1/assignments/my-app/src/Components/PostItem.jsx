const PostItem = ({ id, title, body }) => {
    return (
      <div key={id} style={{ border: " 1px solid black" }}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  };
  export default PostItem;