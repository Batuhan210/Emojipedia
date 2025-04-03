import emojipedia from "../emojipedia.js";
import EmojiDic from "./emojidic";
import "../index.css";

function createDicEmoji(emojiTerm) {
    return (
        <EmojiDic
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            desciption={emojiTerm.desciption}
            meaning={emojiTerm.meaning}
        />
    );
}

function App() {
    return (
        <div>
            <h1>
                <span>Emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map(createDicEmoji)}</dl>
        </div>
    );
}
export default App