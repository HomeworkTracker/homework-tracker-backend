import { User } from "./User";
import { Board } from "./Board";
import { Post } from "./Post";
import { CheckListContent } from "./Contents/CheckListContent";
import { PlainTextContent } from "./Contents/PlainTextContent";
import { Member } from "./Member";

function associations() {
    Board.hasMany(Post);
    Board.hasMany(Member);


    User.hasMany(Member);
    User.hasMany(Post);

    Member.belongsTo(User);
    Member.belongsTo(Board);

    
    Post.belongsTo(Board);
    Post.belongsTo(User);
    Post.hasOne(PlainTextContent);
    Post.hasMany(CheckListContent);
}

export default associations;