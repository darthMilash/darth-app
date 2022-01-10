import "./style.css"

export function Profile({name, avatar, bday, email, phone}) {
  return (
    <div className="profile">
    <div className="avatar">{avatar}</div>
    <div className="name">NAME: {name}</div>
    <div className="bday">BDAY: {bday}</div>
    <div className="email">EMAIL: {email}</div>
    <div className="phone">PHONE: {phone}</div>
    </div>
  );
};