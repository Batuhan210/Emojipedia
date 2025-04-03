function EmojiDic(props) {
    return (
        <div className="term">
            <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
                {props.emoji}
            </span>
            <span>{props.name}</span>
        </dt>
        <dd>{props.description}</dd>
        <p>{props.meaning}</p>
        </div>
    );
}
export default EmojiDic;