import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderEmojis = (minutes) => {
    const emoji = minutes < 30 ? "☕️" : "🍱";
    const interval = minutes < 30 ? 5 : 10;
    const emojis = Math.ceil(minutes / interval);

    return `${emoji.repeat(emojis)} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {renderEmojis(minutes)}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;