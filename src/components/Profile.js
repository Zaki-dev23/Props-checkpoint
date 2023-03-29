import "./Profile.css";
const Profile = (props) => {
  const handleName = () => {
    alert(`hello ${props.fullname}`);
  };
  return (
    <div className="clapyResets root">
      
      <div className="rectangle1">{props.children}</div>
      <div className="rectangle2">
        <div>
        <div className="jamesStewart">{props.fullname}</div>
        <div className="jamesMaitlandStewartMay201908J">
          <p className="labelWrapper">{props.bio}</p>
        </div>
        
        <button onClick={handleName}>Show</button>
      </div>
      </div>
    </div>
  );
};
export default Profile;
