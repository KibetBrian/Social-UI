import React, { useContext } from "react";
import './postCard.scss';
import {
  MoreVert,
  FiberManualRecord,
  ThumbUpAltOutlined,
  ChatBubbleOutline,
  ShareOutlined,
  BookmarkBorder,
  ThumbUp,
  Opacity,
  Bookmark,
  Share,
  SentimentDissatisfied,
  ReportOutlined,
  Block,
  PersonAddDisabledOutlined,
  BookmarkBorderRounded,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import "./post.scss";
import axios from "axios";
import { RootState, AppDispatch } from "../../Redux/store";
import { useSelector } from "react-redux";
import { axiosInstance } from "../../axiosInstance";
import { IPost, IComment, IUser } from "../../interfaces";

function Post(post: IPost) {
  const [isLiked, setIsLiked] = useState(false);
  const [commentContainerOpen, setCommentContainerOpen] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = useSelector((state: RootState) => state.user);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [comments, setComments] = useState<Array<IComment>>([]);
  const [usersC, setUsersC] = useState<Array<IUser>>([]);
  const [commentInput, setCommentInput] = useState("");
  const [userP, setUserP] = useState({});
  const [likes, setLikes] = useState(post.likes.length as number);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axiosInstance.get(`/users/?userId=${post.userId}`);
      setUserP(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axiosInstance.put("/posts/" + post._id + "/like", {
        userId: user.currentUser?._id,
      });
    } catch (err) {
      console.log(err);
    }
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };
  const handleMoreClick = () => {
    setDropDownOpen(!dropDownOpen);
  };
  const profileComponent = () => {
    return (
      <div className="postTopLeft">
        <Link
          to={`profile/${user.currentUser?.userName}`}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={
              user.currentUser?.profilePicture === ""
                ? PF + "noavatar.svg"
                :user.currentUser?.profilePicture
            }
            alt="Profile"
            className="postProfileImage"
          />
          <span className="postUserName">{user.currentUser?.userName}</span>
        </Link>
        <FiberManualRecord className="postDateDot" />
        <span className="postDate"></span>
      </div>
    );
  };
  const handleCommentIconClick = () => {
    setCommentContainerOpen(!commentContainerOpen);

    const fetchComments = async () => {
      const res = await axiosInstance.get(`/posts/comment/`);
      setComments(res.data);
    };
    fetchComments();
      comments.forEach((eachComment) => {
      const fetchUsers = async () => {
        const res = await axiosInstance.get("/users/", {
          params: { userId: eachComment.userId },
        });
        usersC.push(res.data);
      };
      fetchUsers();
    });
  };
  
  const handlePostComment = async (postId: string) => {
    if (commentInput.length > 0) {
      const res = await axiosInstance.post(`/posts/comment/${postId}`, {
        postId: postId,
        userId: user.currentUser?._id,
        comment: commentInput,
      });
    }
    setCommentInput("");
    console.log(commentInput);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          {profileComponent()}
          <div className="postTopRight">
            {" "}
            <MoreVert onClick={handleMoreClick} className="postMoreIcon" />
            <div
              style={dropDownOpen ? { display: "block" } : { display: "none" }}
              className="moreDropDown"
            >
              <div className="dropDownWrapper">
                <li>
                  <BookmarkBorderRounded className="dropDownIcons" /> Save
                </li>
                <li>
                  <Share className="dropDownIcons" /> Share
                </li>
                <li>
                  <PersonAddDisabledOutlined /> Unfollow {user.currentUser?.userName}
                </li>
                <li>
                  <SentimentDissatisfied className="dropDownIcons" /> Not
                  interested
                </li>
                <li>
                  <ReportOutlined className="dropDownIcons" /> Report this post
                </li>
                <li>
                  <Block className="dropDownIcons" /> Block{" "}
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="postCenter">
          <span className="postCaption"> {post.description} </span>
          <img src={PF + post.image} alt="PostImage" className="postImage" />
        </div>
        <hr className="postHr" />
        <div className="postBottom">
          <div className="postBottomLeft">
            {isLiked ? (
              <ThumbUp
                style={{ color: "#77ACF1" }}
                className="postBottomIcon"
                onClick={likeHandler}
              />
            ) : (
              <ThumbUpAltOutlined
                className="postBottomIcon"
                onClick={likeHandler}
              />
            )}
            <span
              style={likes <= 0 ? { opacity: 0 } : { opacity: 1 }}
              className="postBottomCounter"
            >
              {" "}
              {likes}{" "}
            </span>
            <ChatBubbleOutline
              style={{ color: commentContainerOpen ? "#1976d2" : "#9e9e9e" }}
              onClick={handleCommentIconClick}
              className="postBottomIcon"
            />
            <span className="postBottomCounter"> {post.comments} </span>
            <ShareOutlined className="postBottomIcon" />
            {/*<span className="postBottomCounter"> {post.?shares} </span>*/}
          </div>
          <div className="postBottomRight">
            <BookmarkBorder className="postBottomIcon" />
          </div>
        </div>
        <div
          style={{ display: commentContainerOpen ? "block" : "none" }}
          className="commentsContainer"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="userInputContainer"
          >
            <img
              src={
                user.currentUser?.profilePicture === ""
                  ? PF + "noavatar.svg"
                  : user.currentUser?.profilePicture
              }
              alt=""
            />
            <input
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Leave you thoughts here ..."
              type="text"
            />
            <button
              style={{
                backgroundColor:
                  commentInput.length > 0 ? "#42a5f5" : "#b3e5fc",
                cursor: commentInput.length > 0 ? "" : "none",
              }}
              onClick={() => handlePostComment(post._id)}
              type={"submit"}
            >
              Comment
            </button>
          </form>
          <hr className="commentHr" />
          {comments.map((eachComment) => {
            usersC.map((eachCommentedUser) => {
              console.log("Comment", eachComment, "User", eachCommentedUser);
              return (
                <div className="otherComments">
                  <div style={{ marginLeft: "20px" }} className="postTopLeft">
                    <Link
                      to={`profile/${user.currentUser?.userName}`}
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                      }}
                    >
                      <img
                        src={
                          user.currentUser?.profilePicture === ""
                            ? PF + "noavatar.svg"
                            :user.currentUser?.profilePicture
                        }
                        alt="Profile"
                        className="postProfileImage"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      />
                      <span className="postUserName">{user.currentUser?.userName}</span>
                    </Link>
                    <FiberManualRecord className="postDateDot" />
                    <span className="postDate">{format(post.createdAt)}</span>
                  </div>
                  <div className="theirComment">
                    <p className={"commentContent"}>{eachComment.comment}</p>
                  </div>
                </div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
